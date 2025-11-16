import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent bg-opacity-10 text-accent",
        secondary: "bg-gray-100 text-gray-700",
        outline: "border border-gray-300 bg-transparent text-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
