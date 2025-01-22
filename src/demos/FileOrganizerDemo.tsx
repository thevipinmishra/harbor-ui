import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/components/ui/Accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { Files, Image, FileCode, FileDoc, Clock } from "@phosphor-icons/react";

export function FileOrganizerDemo() {
  const files = [
    {
      category: "Documents",
      icon: <FileDoc className="size-4" />,
      items: [
        {
          name: "Q4-Report-2023.pdf",
          owner: "Sarah Miller",
          modified: "2 hours ago",
          size: "2.4 MB",
        },
        {
          name: "Project-Proposal.docx",
          owner: "John Chen",
          modified: "1 day ago",
          size: "1.8 MB",
        },
      ],
    },
    {
      category: "Images",
      icon: <Image className="size-4" />,
      items: [
        {
          name: "product-mockup.png",
          owner: "Alex Wong",
          modified: "3 hours ago",
          size: "4.2 MB",
        },
        {
          name: "team-photo.jpg",
          owner: "Emily Davis",
          modified: "5 days ago",
          size: "3.1 MB",
        },
      ],
    },
    {
      category: "Source Code",
      icon: <FileCode className="size-4" />,
      items: [
        {
          name: "main.tsx",
          owner: "Dave Wilson",
          modified: "1 hour ago",
          size: "45 KB",
        },
        {
          name: "styles.css",
          owner: "Rachel Lee",
          modified: "4 hours ago",
          size: "28 KB",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 border rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <Files className="size-5" />
        <h2 className="text-lg font-medium">Project Files</h2>
      </div>

      <Accordion collapsible className="space-y-3">
        {files.map((category) => (
          <AccordionItem
            key={category.category}
            value={category.category}
            className="border rounded-lg transition-colors hover:bg-muted/50"
          >
            <AccordionItemTrigger className="px-4">
              <div className="flex items-center gap-2">
                {category.icon}
                <span>{category.category}</span>
                <Badge variant="outlined" className="ml-2">
                  {category.items.length}
                </Badge>
              </div>
            </AccordionItemTrigger>
            <AccordionItemContent>
              <div className="space-y-2 p-2 sm:p-3">
                {category.items.map((file) => (
                  <HoverCard key={file.name}>
                    <HoverCardTrigger asChild>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer gap-2">
                        <span className="text-sm">{file.name}</span>
                        <div className="flex items-center gap-2">
                          <Clock className="size-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {file.modified}
                          </span>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-64">
                      <div className="flex gap-3">
                        <Avatar
                          src="https://avatar.iran.liara.run/public/15"
                          size="sm"
                        />
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{file.owner}</p>
                          <p className="text-xs text-muted-foreground">
                            Size: {file.size}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
