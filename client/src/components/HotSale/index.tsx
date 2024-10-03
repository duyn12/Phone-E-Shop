/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import styles from "./style.module.scss";
import ProductItem from "../Products";

export default function HotSale() {
  return (
    <div className={styles.boxsale}>
      <div className={styles.title}>
        <div className={styles.imgage}>
          <img
            src="https://cdn2.cellphones.com.vn/x/media/catalog/product/h/o/hot-sale-cuoi-tuan-20-03-2024.gif"
            alt="title"
          />
        </div>
        <div className={styles.countdown}>
          <p className={styles.title}>Bắt đầu sau: </p>
          <ul className={styles.time}>
            <li>
              <p className={styles.time}>00</p>{" "}
              <p className={styles.separate}>:</p>
            </li>{" "}
            <li>
              <p className={styles.time}>06</p>{" "}
              <p className={styles.separate}>:</p>
            </li>{" "}
            <li>
              <p className={styles.time}>31</p>{" "}
              <p className={styles.separate}>:</p>
            </li>{" "}
            <li>
              <p className={styles.time}>24</p>{" "}
              <p className={styles.separate}></p>
            </li>
          </ul>
        </div>
      </div>
      {/* Sản phẩm Sale */}
      <div className={styles.productsale}>
        <ProductItem product={[]}  />
      </div>
    </div>
  );
}
