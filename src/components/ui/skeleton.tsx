import { cn } from "@/lib/utils"

<<<<<<< HEAD
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
=======
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
>>>>>>> 7f00145 (aeugh)
      {...props}
    />
  )
}

export { Skeleton }
