"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Carousel from "./Carousel";
import { Arrow } from "./Icons";

export default function CarouselContainer({ carousels }: { carousels: { normal: string; hover?: string; name?: string; price?: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]);

  return (
    <div className="max-w-full m-auto flex items-center">
      <button
        onClick={() => {
          emblaApi?.scrollPrev();
        }}
        aria-label="Pervious button, click to see the other features"
        className={`w-8 h-8 flex justify-center items-center text-lg bg-neutral-50 hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-6 lg:left-16 z-30`}
      >
        <Arrow />
      </button>
      <button
        onClick={() => {
          emblaApi?.scrollNext();
        }}
        aria-label="Next button, click to see the other features"
        className={`w-8 h-8 flex justify-center items-center text-lg bg-neutral-50 hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-6 lg:right-16 z-30`}
      >
        <Arrow className="rotate-180" />
      </button>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="ml-[-1rem] md:ml-[-2.5rem] flex touch-pan-y touch-pinch-zoom">
          {carousels.map((carousel, i) => (
            <Carousel key={i} imgUrl={carousel.normal} hoverUrl={carousel.hover} name={carousel.name} price={carousel.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
