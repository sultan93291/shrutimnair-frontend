import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex w-[55px] lg:w-[60px] h-[28px] lg:h-[30px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 px-[5px] py-[4.4px] shadow-[0px_4.026px_5.368px_2.013px_rgba(0,0,0,0.10)]",
      className
    )}
    {...props}
    ref={ref}
    data-color-switch
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block rounded-full bg-background shadow-lg ring-0",
        "w-[20px] h-[20px] lg:w-[21.5px] lg:h-[21.5px]",
        "transition-all duration-300 ease-in-out",
        "data-[state=checked]:translate-x-[25.5px]",
        "data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
