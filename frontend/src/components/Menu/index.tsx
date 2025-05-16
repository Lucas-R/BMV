"use client";
import { useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import Link from "next/link";
import Container from "@componets/Container";
import Icon from "@componets/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
            className="flex w-full h-auto text-base text-stone-900 whitespace-nowrap py-6 border-b border-stone-900/5 hover:text-primary md:border-0 md:py-0 md:px-2 md:last:pr-0 md:text-xs md:uppercase" 
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
                <Link className="font-poppins font-bold" href="/">
                    <img 
                        className="w-28"
                        src="/brands/brand-black.png" 
                        alt="" 
                    />
                </Link>

                <button className="w-10 h-10 px-1 flex flex-col items-center justify-center gap-y-2 md:hidden" onClick={handleNav}>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                    <span className="block w-full h-0.5 bg-stone-900"></span>
                </button>

                <nav className={nav({ open: isOpen })} >
                    <div className={`w-full h-full ${isOpen ? "bg-stone-900/70 delay-500 duration-500 backdrop-blur-xs" : "bg-transparent"}`}>
                        <div className="w-full max-w-96 h-full bg-white">    
                            <Container py="md" px="md" className="flex items-center justify-between h-20 border-b border-stone-900/5 md:hidden">
                                <Link className="font-poppins text-base font-bold" href="/">
                                    <img
                                        className="w-28" 
                                        src="/brands/brand-black.png" 
                                        alt="" 
                                    />
                                </Link>

                                <button className="relative w-8 h-8 flex items-center justify-center" onClick={handleNav}>
                                    <span className="absolute top-1/2 -translate-1/2 block w-full h-0.5 bg-stone-900 rotate-45"></span>
                                    <span className="absolute top-1/2 -translate-1/2 block w-full h-0.5 bg-stone-900 -rotate-45"></span>
                                </button>
                            </Container>
                            <div className="flex flex-col items-center px-4 md:flex-row md:px-0">
                                <NavLink to="/"> Pagina inicial </NavLink>
                                <NavLink to="/"> Imóveis </NavLink>
                                <NavLink to="/"> Serviços </NavLink>
                                <NavLink to="/"> BMV </NavLink>
                                <button className="hidden items-center justify-center min-w-8 h-8 bg-primary/70 hover:bg-primary rounded-full duration-300 md:flex">
                                    <Icon className="text-white" icon={faSearch} size="1x"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
}