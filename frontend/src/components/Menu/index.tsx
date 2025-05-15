"use client";
import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Link from "next/link";
import Container from "@componets/Container";

const nav = tv({
    base: "fixed top-0 w-full h-full md:relative duration-500 ease-in-out md:w-auto md:h-auto md:left-0",
    variants: {
        open: {
            true: "left-0",
            false: "-left-full"
        }
    },
    defaultVariants: {
        open: false
    }
});

interface NavProps extends VariantProps<typeof nav> {};

interface NavLinkProps {
    children: React.ReactNode
    to: string
}

function NavLink({ children, to }: NavLinkProps) {
    return (
        <Link 
            className="flex w-full h-auto text-xs uppercase py-6 border-b border-stone-900/5 md:border-0 md:py-0 md:px-2 md:last:pr-0 hover:text-primary" 
            href={to}
        >{ children }</Link>
    )
}

export default function Menu({ open }: NavProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleNav() {
        setIsOpen(prev => !prev);
    }

    return(
        <div className="fixed top-0 left-0 z-50 w-full h-20 bg-white">
            <Container py="md" className=" flex items-center justify-between h-full">
                <Link className="font-poppins font-bold" href="/">BMV</Link>

                <button className="w-10 h-10 px-1 flex flex-col items-center justify-center gap-y-2 md:hidden" onClick={handleNav}>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                </button>

                <nav className={nav({ open: isOpen })} >
                    <div className={`w-full h-full ${isOpen ? "bg-stone-900/70 delay-500 duration-500 backdrop-blur-xs" : "bg-transparent"}`}>
                        <div className="w-full max-w-96 h-full bg-white">    
                            <Container py="md" px="md" className="flex items-center justify-between h-20 border-b border-stone-900/5 md:hidden">
                                <Link className="font-poppins text-base font-bold" href="/">BMV</Link>

                                <button className="relative w-8 h-8 flex items-center justify-center" onClick={handleNav}>
                                    <span className="absolute top-1/2 -translate-1/2 block w-full h-0.5 bg-stone-900 rotate-45"></span>
                                    <span className="absolute top-1/2 -translate-1/2 block w-full h-0.5 bg-stone-900 -rotate-45"></span>
                                </button>
                            </Container>
                            <div className="flex flex-col md:flex-row px-4">
                                <NavLink to="/"> Início </NavLink>
                                <NavLink to="/"> BMV </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
}