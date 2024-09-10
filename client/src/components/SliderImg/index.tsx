import styles from "./style.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SetStateAction, useState } from "react";

export default function SlidingImages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    { banner: "samsung_banner.png", slide: "GALAXY Z FOLD6" },
    { banner: "samsung_banner.png", slide: "GALAXY Z FOLD6" },
  ];

  const banneritem = [
    { banneritems: "samsung_banner.png" },
    { banneritems: "right-banner-macbook.webp" },
    { banneritems: "samsung_banner.png" },
  ];

  const handleSlideClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.sliding}>
      <div className={styles.home}>
        <Carousel>
          <CarouselContent className={styles.wrapper}>
            {banners.map((item, index) => (
              <CarouselItem
                key={index}
                className={`${styles.imageContainer} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => handleSlideClick(index)} // Thêm sự kiện onClick ở đây
              >
                <img src={`/images/${item.banner}`} className={styles.banner} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className={styles.gallery}>
            {banners.map((item, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === activeIndex ? styles.active : ""
                }`}
                onClick={() => handleSlideClick(index)}
              >
                <span>{item.slide}</span>
              </div>
            ))}
          </div> */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className={styles.right}>
        <div className={styles.banner}>
          {banneritem.map((item, index) => (
            <a key={index} href="#" className={styles.link}>
              <img
                src={`/images/${item.banneritems}`}
                alt={item.banneritems}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
