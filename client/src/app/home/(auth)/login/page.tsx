import LoginForm from "@/app/home/(auth)/login/login-form";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a id="login">
          <LogIn /> <span>Đăng nhập</span>
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đăng nhập</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <LoginForm />
        </div>
        <DialogFooter>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-center">
            Bạn chưa có tài khoản?{" "}
            <DialogClose asChild>
              <Link
                href="/home/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Đăng kí ngay
              </Link>
            </DialogClose>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
