import { tv } from "@/lib/tv.config";
import {
  type FileUploadDropzoneProps,
  type FileUploadItemGroupProps,
  type FileUploadRootProps,
  type FileUploadTriggerProps,
  FileUpload as Primitive,
} from "@ark-ui/react/file-upload";
import { File, Upload, X } from "@phosphor-icons/react";
import { Button } from "./Button";

const fileUploadVariants = tv({
  slots: {
    root: ["space-y-3"],
    dropzone: [
      "min-h-36 rounded border-2 p-4 flex flex-col items-center gap-4 justify-center border-dashed border-input transition-colors",
    ],
    previewItem: ["flex p-2 rounded border items-center gap-2 border-border"],
  },
});

const FileUpload = (props: FileUploadRootProps) => {
  const { children, className, ...rest } = props;
  return (
    <Primitive.Root className={fileUploadVariants().root()} {...rest}>
      {children}
      <Primitive.HiddenInput />
    </Primitive.Root>
  );
};

const FileUploadTrigger = (props: FileUploadTriggerProps) => {
  const { className, ...rest } = props;
  return <Primitive.Trigger {...rest} />;
};

const FileUploadDropzone = (props: FileUploadDropzoneProps) => {
  const { className, children, ...rest } = props;
  return (
    <Primitive.Dropzone className={fileUploadVariants().dropzone()} {...rest}>
      <Upload className="size-8 text-muted-foreground" />
      <p className="text-sm text-foreground">Drag and drop your files here</p>
      {children}
    </Primitive.Dropzone>
  );
};

const FileUploadPreview = (props: FileUploadItemGroupProps) => {
  const { className, ...rest } = props;
  return (
    <Primitive.ItemGroup {...rest}>
      <Primitive.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <Primitive.Item
              className={fileUploadVariants().previewItem()}
              key={file.name}
              file={file}
            >
              <div className="flex-1 flex items-center gap-2">
                <Primitive.ItemPreview type=".*">
                  <File />
                </Primitive.ItemPreview>
                <Primitive.ItemName className="text-sm font-medium" />
                <Primitive.ItemSizeText className="text-sm text-muted-foreground" />
              </div>
              <Primitive.ItemDeleteTrigger asChild>
                <Button variant="plain" size="icon">
                  <X />
                </Button>
              </Primitive.ItemDeleteTrigger>
            </Primitive.Item>
          ))
        }
      </Primitive.Context>
    </Primitive.ItemGroup>
  );
};

const FileUploadContext = Primitive.Context;

export {
  FileUpload,
  FileUploadTrigger,
  FileUploadDropzone,
  FileUploadPreview,
  FileUploadContext,
};
