"use client";
import { products } from "@/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  // Convert params.id (which is a string) to a number
  const productId = Number(id);

  // Find the product by ID (now both productId and product.id are numbers)
  const product = products.find((product) => product.id === productId);

  // If no product is found, show a 404 or not found page
  if (!product) {
    return notFound();
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <div>
      <div className="container">
        <div className="py-2 border-b-2 border-slate-200 my-2">
          <h2 className="font-bold text-xl">{product.title}</h2>
        </div>
        <div className="flex">
          {/* Render product details */}
          <div className="w-[60%] max-h-[400px] ">
            <Carousel className="border border-slate-300 hover:border-slate-300 rounded-lg">
              <CarouselContent>
                {product.listimg?.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`/images/${image}`}
                      width={850}
                      height={400}
                      className="max-h-[400px] rounded-lg"
                      alt="image"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="lg:ml-6 lg:p-4 w-[40%]">
            <div className="flex flex-wrap content-end space-y-3">
              <div className="flex flex-wrap w-full">
                {product.linked?.options?.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => handleClick(index)} // Set active button
                    className={`flex w-calc mr-2 border px-10 py-4 rounded-lg ${activeButton === index ? "active" : ""}`}
                  >
                    <h3 className="text-xs font-semibold">{link.name}</h3>
                  </Button>
                ))}
              </div>

              <h3 className="text-xl font-bold">Chọn màu</h3>
              <div className="flex flex-wrap ">
                {product.variant?.options?.map((option, index) => (
                  <Button
                    key={index}
                    className="flex w-calc mr-2 mb-2 border rounded-lg "
                  >
                    <Image
                      src={`/images/${option.image}`}
                      width={40} 
                      height={40}
                      alt={option.name}
                      className="w-8 h-8 mr-2 object-cover rounded"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xs font-semibold">{option.name}</h3>
                      <p className="text-gray-600 text-xs">{option.price}</p>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="flex ">
                <p className="line-through text-slate-400 mr-4">
                  {product.throungh}
                </p>
                <p className="text-xl font-bold mr-4">{product.show}</p>
                <div className="bg-red-600 p-2 rounded-lg">
                  <p className="text-xs font-bold">Giảm {product.detail}%</p>
                </div>
              </div>

              <div className="flex">
                <Link href={`/home/`}>
                  <Button variant="secondary" className="flex mr-6">
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Thêm vào giỏ hàng
                  </Button>
                </Link>
                <Link href={`/home/checkout/${product.id}`}>
                  <Button variant="destructive" className="flex ml-auto w-32">
                    Mua ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
