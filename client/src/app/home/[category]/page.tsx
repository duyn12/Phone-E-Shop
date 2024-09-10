"use client";

import { products } from "@/data";
import ProductItem from "@/components/Featured/product";
import HotSale from "@/components/HotSale";
import Link from "next/link";
import Filters from "@/components/Filter";

export default function CategoryPage() {
  return (
    <div className="container">
        <HotSale />
        <Filters />
      <div className=" my-4 gap-4">
        {/* <ProductCategory /> */}
        <div className="flex w-full flex-wrap ">
          {products.map((product, index) => (
            <div key={index} className="basis-1/5">
              <Link href={`/home/products/${product.id}`}>
                <ProductItem product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
