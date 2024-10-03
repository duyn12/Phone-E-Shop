import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ViewAll() {
  return (
    <button className="cta flex">
      <Link href={"/home/products"}>
        <span className="hover-underline-animation"> Xem tất cả </span>
        <ArrowRight />{" "}
      </Link>
    </button>
  );
}
