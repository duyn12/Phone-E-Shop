/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./style.module.scss";

export default function SlidingImages() {
  const banners = [
    { banner: "samsung_banner.png", slide: "GALAXY Z FOLD6" },
    { banner: "samsung_banner.png", slide: "GALAXY Z FOLD6" },
  ];
  const banneritem = [{ banneritems: "samsung_banner.png" },
    { banneritems: "right-banner-macbook.webp" },
    { banneritems: "samsung_banner.png" }
  ];
  return (
    <div className={styles.sliding}>
      <div className={styles.home}>
        <div className={styles.wrapper}>
            {banners.map((item, index) => (
            <div key={index} className={styles.imageContainer}>
                <img src={`/images/${item.banner}`} className={styles.banner} />
            </div>
            ))}
        </div>
        <div className={styles.gallery}>
        {banners.map((item, index) => (
          <div key={index} className={styles.slide}>
            {/* <img src={`/images/${item.banner}`} className={styles.slide} /> */}
            <span>{item.slide}</span>
          </div>
        ))}
        </div>
        
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
