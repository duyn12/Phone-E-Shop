import { ArrowRight } from "lucide-react";
import ProductItem from "./product";
import ViewAll from "../Button/ViewAll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./style.module.scss";
import { products } from "@/data";

export default function Featured() {
  return (
    <div>
      <div className="flex mb-2 justify-between">
        <a href="" className="text-xl font-bold">
          <h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        </a>
        <ViewAll />
      </div>
      <div className={styles.product}>
        <div className={styles.list}>
          <Carousel>
            <CarouselContent className="flex w-full flex-wrap p-2">
              {products.slice(0, 15).map((product, index) => (
                <CarouselItem key={index} className="basis-1/5">
                  <ProductItem product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
