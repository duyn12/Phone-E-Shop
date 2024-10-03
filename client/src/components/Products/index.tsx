"use client";
import styles from "./style.module.scss";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products, ProductItemProps  } from "@/data/product";
import { StarRating } from "./StarRating";

export default function ProductItem({ product }: ProductItemProps) {
  const reviews = product.reviews ?? [];

  // Tính rating trung bình từ reviews
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) /
    (reviews.length || 1);

  return (
    <Carousel>
      <CarouselContent className="flex w-full flex-wrap p-2">
        {products.map((product, index) => {
          const reviews = product.reviews ?? [];
          const averageRating =
            reviews.reduce((acc, review) => acc + review.rating, 0) /
            (reviews.length || 1);

          return (
            <CarouselItem key={index} className="basis-1/5">
              <div className={styles.container}>
                <div className={styles.info}>
                  <Link href={`/home/products/${product.title}`}>
                    <div className={styles.image}>
                      <Image
                        src={`/images/${product.listimg[0]}`}
                        width={358}
                        height={358}
                        className={styles.img}
                        alt="image"
                      />
                    </div>
                    <div className={styles.name}>
                      <h3>
                        {product.title} {product.variant?.options[0].memory}
                      </h3>
                    </div>
                    <div className={styles.price}>
                      <span className={styles.title}></span>
                      <p className={styles.show}>
                        {product.variant?.options[0].price}đ
                      </p>
                      <p className={styles.throungh}>
                        {product.variant?.options[0].compareAtPrice}đ
                      </p>

                      {product.detail && (
                        <div className={styles.percent}>
                          <p className={styles.detail}>
                            Giảm {product.detail}%
                          </p>
                        </div>
                      )}
                    </div>
                    <div className={styles.promotion}>
                      <p className={styles.coupon}>{product.coupon}</p>
                    </div>
                  </Link>
                </div>
                <div className={styles.bottom}>
                  <StarRating rating={averageRating} />
                  <p className="mr-8 text-xs">
                    ({reviews.length}{" "}
                    {reviews.length === 1 ? "review" : "reviews"})
                  </p>
                  <div className={styles.wish}>
                    <Heart />
                  </div>
                </div>
                <div className={styles.tag}>
                  {/* Các tag có thể đặt ở đây */}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
