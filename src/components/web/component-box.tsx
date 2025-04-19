import { cn } from "@/lib/tv.config";

export default function ComponentBox({
  title,
  children,
  fullWidth = false,
}: {
  title: string;
  children: React.ReactNode;
    fullWidth?: boolean;
}) {
  return (
    <div className="border border-border shadow-2xs rounded-lg">
      <div className="py-2 border-b border-border px-4 bg-muted rounded-t-[inherit]">
        <p className="text-muted-foreground font-mono text-xs">{title}</p>
      </div>
      <div className={cn("p-4 grid  min-h-28 rounded-b-[inherit] overflow-hidden items-center", !fullWidth && 'justify-center')}>{children}</div>
    </div>
  );
}
