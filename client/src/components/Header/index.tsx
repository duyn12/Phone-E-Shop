/* eslint-disable @next/next/no-img-element */
'use client';

import styles from './style.module.scss';
import Image from 'next/image';
import { Filter, LogIn, Search, ShoppingBasket, UserPlus, UserRound } from 'lucide-react';


export default function Header() {
    const menuItems = [
        { name: 'Trang chủ', logo: 'home.png' },
        { name: 'Apple', logo: 'apple-logo.svg' },
        { name: 'Samsung', logo: 'samsung_icon.png' },
        { name: 'xiaomi', logo: 'xiaomi.png' },
        { name: 'oppo', logo: 'logo_oppo.png' },
        { name: 'Nokia', logo: 'nokia-logos.png' },
        { name: 'vivo', logo: 'vivo-logo.png' },
        { name: 'realmi', logo: 'realme-mobile-logo-icon.webp' },
    ];
    return (
        <>
        <div  className={styles.header}>
            <div className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <ul className={styles.list}>
                            <li><a href=""><i className="fa-regular fa-phone"></i> 0902087247 (miễn phí)</a></li>
                            <li><a href=""><i className="fa-light fa-location-dot"></i> Xem vị trí cửa hàng</a></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <ul className={styles.list}>
                            <li><a href="">Giới thiệu</a></li>
                            <li><a href="">Cửa hàng</a></li>
                            <li><a href="">Chính sách</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className="header-logo">
                            <a href="">
                                {/* <img src="./assets/img/vy-food.png" alt="" className="header-logo-img" /> */}
                                Logo
                            </a>
                        </div>
                    </div>
                    <div className={styles.center}>
                        <form action=""  className={styles.search}>
                            <Search className={styles.btn} />
                            <input type="text" className="form-search-input" placeholder="Bạn cần tìm gì?" />
                            <button className={styles.filterbtn}><Filter /><span>Lọc</span></button>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <ul className={styles.list}>
                            <li className={`${styles.item} ${styles.dnone} open`} >
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
                                    <span className={styles.tk}>Tài khoản <i className="fa-sharp fa-solid fa-caret-down"></i></span>
                                </div>
                                <ul className={styles.menu} >
                                    <li><a id="login" href="javascript:;"><LogIn /> <span>Đăng nhập</span></a></li>
                                    <li><a id="signup" href="javascript:;"><UserPlus /> <span>Đăng ký</span></a></li>
                                </ul>
                            </li>
                            <li  className={`${styles.item} open`} >
                                <div className={styles.cartIconMenu}>
                                    <ShoppingBasket />
                                    <span className="count-product-cart">0</span>
                                </div>
                                <span>Giỏ hàng</span>
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
                            <a href="#" className={styles.link}>
                            <img src={`/images/${item.logo}`} alt={item.name} className={styles.logo} />
                            <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                    </ul>
                </div >
            </div >
        </div>
        </>
    )
}