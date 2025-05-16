import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const price = tv({
    base: "text-xl font-semibold"
});

interface PriceProps extends VariantProps<typeof price>, HTMLAttributes<HTMLHeadingElement> {
    value: number
}

export default function Price({ value, className }: PriceProps) {
    let money: string | number = "Sob Consulta";
    if(!!value) {
        money = value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }

    return (
        <h5 className={price({ class: className })}>{money}</h5>
    )
}