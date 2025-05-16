"use client";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@componets/Container"
import Menu from "@componets/Menu";
import 'swiper/css';
import Button from '@componets/Button';

const mockSlide = [
  {
    src: "/mock.webp",
    alt: "mock 1"
  },
   {
    src: "/mock.webp",
    alt: "mock 2"
  },
   {
    src: "/mock.webp",
    alt: "mock 3"
  }
];

function Header() {
  return (
    <header className="relative w-full h-screen">
      <Swiper
        className="!absolute !top-0 !left-0 -z-0 w-full h-full"
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
      >
        {
          mockSlide.map(item => {
            return (
              <SwiperSlide key={item.alt}>
                <div className="flex items-center justify-center w-full h-full brightness-25">
                  <img 
                    className="w-auto h-full object-cover md:w-full"
                    src={item.src} 
                    alt={item.alt} 
                  />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Container className="flex items-center justify-center w-full h-full !pt-20 md:">
        <div className="relative z-10 max-w-[800px]">
          <h1 className="text-white text-5xl font-poppins mb-4 md:text-7xl md:mb-6 md:text-center"> Lorem Ipsum</h1>
          <p className="text-white font-light mb-10 md:mb-20 md:text-center"> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Praesentium accusamus, sunt itaque reiciendis tenetur molestias accusantium! 
            Facere temporibus officia commodi.
          </p>
          <Button size="md" theme="primary" className="mx-auto"> Buscar imóveis </Button>
        </div>
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

