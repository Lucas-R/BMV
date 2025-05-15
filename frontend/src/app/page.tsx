import Container from "@componets/Container"
import Menu from "@componets/Menu";
import Image from "next/image";

function Header() {
  return (
    <header className="relative w-full h-screen">
      <Container size="full" py="none" px="none" className="w-full h-full">
        <img 
          className="absolute top-0 left-0 w-auto h-full object-cover object-center brightness-50" 
          src="/bg.webp" 
          alt="" 
        />
      </Container>
    </header>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900/5">
      <Menu />
      <Header />
    </div>
  );
}
