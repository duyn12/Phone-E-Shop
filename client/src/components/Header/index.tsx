/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./style.module.scss";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Filter,
  LogIn,
  MapPin,
  Phone,
  Search,
  UserPlus,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { Cart } from "./NavigationBar/Cart";
import { CartSheet } from "../Cart/CartSheet";
import LoginPage from "@/app/home/(auth)/login/page";

export default function Header() {
  const menuItems = [
    { name: "Trang chủ", logo: "home.png", href: "/home/" },
    { name: "Apple", logo: "apple-logo.svg", href: "/home/apple" },
    { name: "Samsung", logo: "samsung_icon.png", href: "/home/samsung" },
    { name: "xiaomi", logo: "xiaomi.png", href: "/home/xiaomi" },
    { name: "oppo", logo: "logo_oppo.png", href: "/home/oppo" },
    { name: "Nokia", logo: "nokia-logos.png", href: "/home/nokia" },
    { name: "vivo", logo: "vivo-logo.png", href: "/home/vivo" },
    {
      name: "realmi",
      logo: "realme-mobile-logo-icon.webp",
      href: "/home/realme",
    },
  ];
  return (
    <>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.container}>
            <div className={styles.left}>
              <ul className={styles.list}>
                <li>
                  <a href="">
                    <Phone size={18} /> 0902087247 (miễn phí)
                  </a>
                </li>
                <li>
                  <a href="">
                    <MapPin size={18} /> Xem vị trí cửa hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <ul className={styles.list}>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li>
                  <a href="">Cửa hàng</a>
                </li>
                <li>
                  <a href="">Chính sách</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className="header-logo">
                <a
                  href="/home"
                  className="bg-clip-text text-transparent bg-gradient-to-l from-[#B5292F] to-[#27272A] text-3xl font-bold"
                >
                  MobiTech
                </a>
              </div>
            </div>
            <div className={styles.center}>
              <form action="" className={styles.search}>
                <Search className={styles.btn} />
                <input
                  type="text"
                  className="form-search-input"
                  placeholder="Bạn cần tìm gì?"
                />
                <button className={styles.filterbtn}>
                  <Filter />
                  <span>Lọc</span>
                </button>
              </form>
            </div>
            <div className={styles.right}>
              <ul className={styles.list}>
                <li className={`${styles.item} ${styles.dnone} open`}>
                  <div className="cart-icon-menu">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </div>
                </li>
                <li className={`${styles.item} ${styles.close}`}>
                  <div className="cart-icon-menu">
                    <i className="fa-light fa-circle-xmark"></i>
                  </div>
                </li>
                <li className={`${styles.item} dropdown open`}>
                  <UserRound />
                  <div className={styles.authcontainer}>
                    <span className={styles.dndk}>Đăng nhập / Đăng ký</span>
                    <span className={styles.tk}>
                      Tài khoản{" "}
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                  <ul className={styles.menu}>
                    <li>
                      <LoginPage />
                    </li>
                    <li>
                      <a id="signup" href="javascript:;">
                        <UserPlus /> <span>Đăng ký</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={`${styles.item}`}>
                  <CartSheet />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.container}>
            <ul className={styles.list}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <Link href={item.href} className={styles.link}>
                    <img
                      src={`/images/${item.logo}`}
                      alt={item.name}
                      className={styles.logo}
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
