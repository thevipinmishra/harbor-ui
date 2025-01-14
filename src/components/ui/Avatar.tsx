import * as React from "react";

import {
  AvatarImageProps,
  Avatar as AvatarPrimitive,
  AvatarRootProps,
  UseAvatarContext,
} from "@ark-ui/react/avatar";
import { tv } from "@/lib/tv.config";
import { VariantProps } from "tailwind-variants";

const avatarVariants = tv({
    slots: {
        root: ' shrink-0  bg-muted rounded-full border border-background',
        fallback: 'size-full rounded-[inherit] text-muted-foreground flex justify-center items-center text-sm data-[state=hidden]:hidden',
        image: 'size-full rounded-[inherit]',
    },
    variants: {
        size: {
            sm: {
                root: 'size-10'
            },
            md: {
                root: 'size-12'
            },
            lg: {
                root: 'size-14'
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
})

interface AvatarProps extends AvatarRootProps, VariantProps<typeof avatarVariants> {
  fallback?: React.ReactNode | ((context?: UseAvatarContext) => React.ReactNode);
  src: AvatarImageProps["src"];
  srcProps?: Omit<AvatarImageProps, "children" | "src">;
}

const Avatar = (props: AvatarProps) => {
  const { fallback, src, className, srcProps, size, ...rest } = props;
  return (
    <AvatarPrimitive.Root className={avatarVariants().root({className, size})} {...rest}>
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
