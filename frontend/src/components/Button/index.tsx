import { tv, VariantProps } from "tailwind-variants"

const button = tv({
    base: "flex items-center justify-center rounded-md font-semibold uppercase duration-300",
    variants: {
        w: {
            full: "w-full",
            default: "w-auto"
        },
        size: {
            sm: "py-2 px-6 text-sm",
            md: "py-4 px-8 text-base",
            default: "py-2 px-4 text-base"
        },
        theme: {
            primary: "bg-primary text-white hover:scale-105",
            default: ""
        }
    },
    defaultVariants: {
        w: "default",
        size: "default",
        theme: "default"
    }
});

interface ButtonProps extends VariantProps<typeof button>, React.HTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, w, size, theme }: ButtonProps) {
    return (
        <button className={button({ w, size, theme, class: className })}>
            { children }
        </button>
    )
}