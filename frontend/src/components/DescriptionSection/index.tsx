import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const description = tv({
    base: "text-sm font-poppins md:text-base",
});

interface DescriptionSectionProps extends VariantProps<typeof description>, HTMLAttributes<HTMLParagraphElement>{}

export default function DescriptionSection({ children, className }: DescriptionSectionProps) {
    return (
        <p className={description({ class: className })}>{ children }</p>
    )
}