import { tv, VariantProps } from "tailwind-variants"

const container = tv({
    base: "h-auto",
    variants: {
        size: {
            full: "w-full max-w-full",
            default: "container mx-auto"
        },
        py: {
            sm: "py-2",
            md: "py-6",
            xl: "py-10",
            default: "py-4 md:py-10"
        },
        px: {
            sm: "px-2",
            md: "px-4",
            xl: "px-6",
            default: "px-4 md:px-6"
        }
    },
    defaultVariants: {
        size: "default",
        py: "default",
        px: "default"
    }
});


type ContainerProps = VariantProps<typeof container> & React.HTMLAttributes<HTMLDivElement> &{
    className?: string
};

export default function Container({ children, size, py, px, className }: ContainerProps) {
    return (
        <div className={container({ size, py, px, class: className })}>
            { children }
        </div>
    )
}