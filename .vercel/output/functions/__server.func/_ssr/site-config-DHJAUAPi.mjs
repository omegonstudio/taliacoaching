import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-[var(--terracotta)] text-[var(--cream)] shadow-[var(--shadow-soft)] hover:bg-[var(--terracotta-deep)] hover:-translate-y-0.5",
        sage: "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[var(--shadow-soft)] hover:opacity-90 hover:-translate-y-0.5",
        softline: "border border-[var(--terracotta)] text-[var(--terracotta-deep)] bg-transparent hover:bg-[var(--terracotta)] hover:text-[var(--cream)]"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        xl: "h-13 px-9 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const WHATSAPP_NUMBER = "5492914254659";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Talia, me gustaría comenzar mi proceso para construir hábitos sostenibles."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const CALENDLY_URL = "https://calendly.com/taliaalles";
const INSTAGRAM_URL = "https://instagram.com/taliaalles";
const TIKTOK_URL = "https://tiktok.com/@taliaalles";
export {
  Button as B,
  CALENDLY_URL as C,
  INSTAGRAM_URL as I,
  TIKTOK_URL as T,
  WHATSAPP_URL as W,
  cn as c
};
