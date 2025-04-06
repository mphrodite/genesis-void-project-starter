import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

<<<<<<< HEAD
const AspectRatio = AspectRatioPrimitive.Root
=======
function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}
>>>>>>> 7f00145 (aeugh)

export { AspectRatio }
