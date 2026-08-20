import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "border-transparent bg-secondary text-muted-foreground",
        official: "border-sage/30 bg-sage/15 text-sage",
        community: "border-dust/30 bg-dust/15 text-dust",
        editor: "border-paper/30 bg-paper/12 text-paper",
        live: "border-sage/40 bg-sage/20 text-sage",
        expired: "border-rust/30 bg-rust/15 text-rust",
        outline: "border-border text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
