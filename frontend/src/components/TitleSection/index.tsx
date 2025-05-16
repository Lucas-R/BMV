import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants"

const title = tv({
    base: "text-3xl font-semibold font-poppins mb-2 md:text-4xl",
});

interface TitleSectionProps extends VariantProps<typeof title>, HTMLAttributes<HTMLHeadingElement>{}

export default function TitleSection({ children, className }: TitleSectionProps) {
    return (
        <h2 className={title({ class: className })}>
            { children }
        </h2>
    )
}