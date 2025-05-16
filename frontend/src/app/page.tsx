"use client";
import { useEffect, useRef, useState } from 'react';
import { NavigationOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { faArrowAltCircleLeft, faBed, faCarSide, faChevronLeft, faChevronRight, faDoorOpen, faRuler, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import Container from "@componets/Container"
import Menu from "@componets/Menu";
import Button from '@componets/Button';
import TitleSection from '@componets/TitleSection';
import DescriptionSection from '@componets/DescriptionSection';
import Price from '@componets/Price';
import Icon from '@componets/Icon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const mockSlide = [
  {
    src: "/mock.webp",
    alt: "mock 1",
    title: "Title Card",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore optio quo vitae ea beatae aut exercitationem quisquam, fugit facere obcaecati excepturi, architecto officia modi consequuntur corporis, perspiciatis suscipit cumque!",
    price: 33000000,
    suite: 0,
    room: 4,
    garage: 2,
    area: "1000.00",
    total: "2000.00"
  },
   {
    src: "/mock.webp",
    alt: "mock 2",
    title: "Title Card",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore optio quo vitae ea beatae aut exercitationem quisquam, fugit facere obcaecati excepturi, architecto officia modi consequuntur corporis, perspiciatis suscipit cumque!",
    price: 2000000,
    suite: 2,
    room: 1,
    garage: 0,
    area: null,
    total: "2000.00"
  },
   {
    src: "/mock.webp",
    alt: "mock 3",
    title: "Title Card",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum tempore optio quo vitae ea beatae aut exercitationem quisquam, fugit facere obcaecati excepturi, architecto officia modi consequuntur corporis, perspiciatis suscipit cumque!",
    price: 0,
    suite: 2,
    room: 4,
    garage: 2,
    area: "1000.00",
    total: null
  }
];

function Header() {
    const words = ["IMÓVEIS", "CONSTRUÇÕES", "SONHO", "INVERSTIMENTO", "REALIZAÇÃO"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typingSpeed = isDeleting ? 50 : 100;
    const pause = isDeleting ? 0 : 5000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);

        if (isDeleting && currentCharIndex === 0) {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, currentCharIndex === currentWord.length && !isDeleting ? pause : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentWordIndex, words]);
  
  return (
    <header className="relative w-full h-screen xl:max-h-[800px]">
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
      <Container className="flex items-center justify-center w-full h-full !pt-[120px]">
        <div className="relative z-10 md:w-[800px]">
          <h1 className="flex text-white text-4xl font-poppins mb-4 md:text-7xl md:mb-6 uppercase">
            <span className="block mr-2">BMV </span> 
            {words[currentWordIndex].substring(0, currentCharIndex)}
             <span className="animate-blink"></span>
          </h1>
          <p className="text-white text-sm md:text-xl font-light mb-10 md:mb-20"> 
            IMÓVEIS, CONSTRUÇÃO, INVESTIMENTO e REALIZAÇÃO -- tudo começa aqui.
          </p>
          <Button size="md" theme="primary" className="mx-auto"> Buscar imóveis </Button>
        </div>
      </Container>
    </header>
  )
}

function Releases() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <section>
      <Container>
        <div className="w-full h-auto mb-6">
          <TitleSection> Nossos Destaques </TitleSection>
          <DescriptionSection> Lorem ipsum dolor sit amet consectetur adipisicing </DescriptionSection>
        </div>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              const navigation = swiper.params.navigation as NavigationOptions;
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          autoplay={{
            delay: 10000,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} default-bullet"></span>`;
            },
          }}
          slidesPerView={1}
          loop={true}
        >
          {mockSlide.map(item => {
            return (
              <SwiperSlide key={item.alt}>
                <Link 
                  href={item.alt} 
                  className="w-full h-auto overflow-hidden md:grid md:grid-cols-12 md:gap-10 md:items-center"
                >
                  <div className="group w-full h-56 object-cover rounded-md mb-4 md:mb-0 md:h-full md:col-span-6 lg:col-span-7 lg:max-h-[500px] overflow-hidden" >
                    <img
                      className="w-full h-full group-hover:scale-110 duration-500" 
                      src={item.src} 
                      alt={item.alt} 
                    />
                  </div>
                  <div className="md:col-span-6 lg:col-span-5">
                    <h4 className="text-2xl text-primary font-semibold mb-3">{item.title}</h4>
                    <p className="text-base mb-6">{item.description}</p>
                    <div className="flex gap-x-1">
                      { !!item.area && <p className="font-semibold"> Área Útil {item.area} m²</p> }
                      { !!item.total && <p className="font-semibold">{!!item.area && (<span>|</span>)} Área Total {item.total} m²</p> }
                    </div>
                    <div className="flex gap-x-1 mb-4">
                      { !!item.room && <p className="font-semibold"> Quartos {item.room}</p> }
                      { !!item.suite && <p className="font-semibold">{ !!item.room && (<span>|</span>) } Suites {item.suite}</p> }
                      { !!item.garage && <p className="font-semibold">{ (!!item.suite || !!item.room) && (<span>|</span>) } Vagas {item.garage}</p> }
                    </div>
                    <Price className="mb-6" value={item.price}/>
                    <Button className="md:max-w-96" w="full" theme="primary"> Ver imóvel </Button>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
          <div className="flex items-center justify-between mt-10">
            <div className="my-pagination" />
            <div className="flex justify-end gap-x-2">
              <button ref={prevRef} className="w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white">
                <Icon icon={faChevronLeft} />
              </button>
              <button ref={nextRef} className="w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white">
                <Icon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </Swiper>
      </Container>
    </section>
  )
}

function Construction() {
  return (
    <section>
      <Container>
        <TitleSection> Nossas Construções </TitleSection>
        <DescriptionSection> Lorem ipsum dolor sit amet consectetur adipisicing </DescriptionSection>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-900/5">
      <Menu />
      <Header />
      <Releases />
      <Construction />
    </div>
  );
}

