import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

interface BreadcrumbsProps {
  product: {
    id: any;
    category: {
      id: any;
      title: string;
    };
    listimg: string[];
    title: string;
    detail?: string;
    variant?: {
      options: {
        sku: string;
        memory: string;
        color: string;
        image: string;
        price: string;
        compareAtPrice: string;
        quantity: number;
      }[];
    };
    coupon: string;
  };
}

export function Breadcrumbs({ product }: BreadcrumbsProps) {
  // Kiểm tra sự tồn tại của category và variant từ product
  const category = product.category;
  const variant = product.variant;

  return (
    <Breadcrumb className="pt-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/home">Trang chủ</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {category && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/home/products/`}>{category.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{product.title} {product.variant?.options[0].memory}</BreadcrumbPage>
        </BreadcrumbItem>
        {variant && variant.options.length > 0 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbPage> - {variant.options[0].color}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
