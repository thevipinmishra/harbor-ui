import * as React from "react";

import {
  AvatarImageProps,
  Avatar as AvatarPrimitive,
  AvatarRootProps,
  UseAvatarContext,
} from "@ark-ui/react/avatar";
import { tv } from "@/lib/tv.config";

const avatarVariants = tv({
    slots: {
        root: 'size-9 shrink-0  bg-muted rounded-full border border-background',
        fallback: 'size-full rounded-[inherit] text-muted-foreground flex justify-center items-center text-sm data-[state=hidden]:hidden',
        image: 'size-full rounded-[inherit]',
    }
})

interface AvatarProps extends AvatarRootProps {
  fallback?: React.ReactNode | ((context?: UseAvatarContext) => React.ReactNode);
  src: AvatarImageProps["src"];
  srcProps?: Omit<AvatarImageProps, "children" | "src">;
}

const Avatar = (props: AvatarProps) => {
  const { fallback, src, className, srcProps, ...rest } = props;
  return (
    <AvatarPrimitive.Root className={avatarVariants().root({className})} {...rest}>
      {typeof fallback === 'function' ? (
        <AvatarPrimitive.Context>
          {(context) => (
            <AvatarPrimitive.Fallback className={avatarVariants().fallback()}>
              {fallback(context)}
            </AvatarPrimitive.Fallback>
          )}
        </AvatarPrimitive.Context>
      ) : (
        fallback && (
          <AvatarPrimitive.Fallback className={avatarVariants().fallback()}>
            {fallback}
          </AvatarPrimitive.Fallback>
        )
      )}

      <AvatarPrimitive.Image className={avatarVariants().image()} src={src} {...srcProps} />
    </AvatarPrimitive.Root>
  );
};

export { Avatar };
