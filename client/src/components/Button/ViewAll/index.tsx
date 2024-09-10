import { ArrowRight } from "lucide-react";

export default function ViewAll() {
  return (
    <button className="cta flex">
      <span className="hover-underline-animation"> Xem tất cả </span>
      <ArrowRight />
    </button>
  );
}
