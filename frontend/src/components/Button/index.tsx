import { tv, VariantProps } from "tailwind-variants"

const button = tv({
    base: "flex items-center justify-center rounded-md uppercase duration-300 hover:scale-105",
    variants: {
        w: {
            full: "w-full",
            default: "w-auto"
        },
        size: {
            sm: "py-2 px-6 text-sm",
            md: "py-2 px-8 text-sm",
            default: "py-2 px-4 text-base"
        },
        theme: {
            primary: "bg-primary text-white",
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