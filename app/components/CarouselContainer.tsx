"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Carousel from "./Carousel";
import { Arrow } from "./Icons";

export default function CarouselContainer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]);

  return (
    <div className="max-w-full m-auto flex items-center">
      <button
        onClick={() => {
          emblaApi?.scrollPrev();
        }}
        aria-label="Pervious button, click to see the other features"
        className={`w-8 h-8 flex justify-center items-center text-lg bg-neutral-50 hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute left-16 z-40`}
      >
        <Arrow />
      </button>
      <button
        onClick={() => {
          emblaApi?.scrollNext();
        }}
        aria-label="Next button, click to see the other features"
        className={`w-8 h-8 flex justify-center items-center text-lg bg-neutral-50 hover:bg-opacity-75 hover:bg-light-grey transition-all rounded-full absolute right-16 z-40`}
      >
        <Arrow className="rotate-180" />
      </button>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="ml-[-1rem] md:ml-[-2.5rem] flex touch-pan-y touch-pinch-zoom">
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1903,c_limit/59a78130-6d08-4bb7-ad13-0d4f8d03e620/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/15f840ee-ecb2-4d30-af30-6ac8893947ce/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/f1c1e89f-6b14-41e0-80a6-a1332bf01ccc/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/4150ed95-006a-4e59-9fec-6503c0b1f752/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/548ccaf6-1b5f-421c-8234-ef0b56b6aa1b/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/f42ab353-78a0-4162-85f7-9c6d9cad5afe/nike-just-do-it.png" />
          <Carousel imgUrl="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1556,c_limit/c8263ba6-42f3-47c8-9580-c362736367ba/nike-just-do-it.png" />
        </div>
      </div>
    </div>
  );
}
