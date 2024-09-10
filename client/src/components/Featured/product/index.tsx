"use client";
import { ProductItemProps } from "@/data";
import styles from "./style.module.scss";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Link href={`/home/products/${product.id}`}>
          <div className={styles.image}>
            <Image
              src={`/images/${product.img}`}
              width={358}
              height={358}
              className={styles.img}
              alt="image"
            />
          </div>
          <div className={styles.name}>
            <h3>{product.title}</h3>
          </div>
          <div className={styles.price}>
            <span className={styles.title}></span>
            <p className={styles.show}>{product.show}đ</p>
            <p className={styles.throungh}>{product.throungh}đ</p>
            <div className={styles.percent}>
              <p className={styles.detail}>Giảm {product.detail}%</p>
            </div>
          </div>
          <div className={styles.promotion}>
            <p className={styles.coupon}>{product.coupon}</p>
          </div>
        </Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.rating}>
          <div className={`${styles.star} ${styles.active}`}>
            <Star />
          </div>
        </div>
        <div className={styles.wish}>
          <Heart />
        </div>
      </div>
      <div className={styles.tag}>{/* Các tag có thể đặt ở đây */}</div>
    </div>
  );
}
