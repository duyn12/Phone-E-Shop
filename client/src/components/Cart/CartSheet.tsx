import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Cart } from "../Header/NavigationBar/Cart";

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="none" size="none">
          <Cart />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <li className={"flex items-center justify-between gap-6 py-2"}>
          <div className="flex h-[115px] w-[90px] shrink-0 items-center bg-neutral-100">
            <Image
              src={"/default-product-image.svg"}
              width={115}
              height={90}
              sizes="100px"
              alt={""}
            />
          </div>
        </li>
      </SheetContent>
    </Sheet>
  );
}

function CartEmptyState() {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2 text-[21px] font-normal text-black">
      <svg
        className="mb-6 size-24 fill-none"
        width="21"
        height="26"
        viewBox="0 0 21 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 7.48649C5.75 7.48649 5.22222 1 10.5 1C15.7778 1 15.25 7.48649 15.25 7.48649M1 23.7027L2.00081 6.48252C2.03155 5.95366 2.46938 5.54054 2.99912 5.54054H18.0051C18.5331 5.54054 18.97 5.94786 19.0028 6.47487C19.3684 12.3442 20 22.7195 20 23.7027C20 24.7405 19.2963 25 18.9444 25C13.6667 25 2.9 25 2.05556 25C1.21111 25 1 24.1351 1 23.7027Z"
          stroke="black"
          strokeLinecap="round"
        />
      </svg>
      <p>Your cart is empty</p>
    </div>
  );
}
