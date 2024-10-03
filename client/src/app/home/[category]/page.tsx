"use client";
import ProductItem from "@/components/Products";
import HotSale from "@/components/HotSale";
import Filters from "@/components/Filter";

export default function CategoryPage() {
  return (
    <div className="container">
      <HotSale />
      <Filters />
      <div className=" my-4 gap-4">
        {/* <ProductCategory /> */}
        <div className="flex w-full flex-wrap ">
          <ProductItem product={[]}  />
        </div>
      </div>
    </div>
  );
}
