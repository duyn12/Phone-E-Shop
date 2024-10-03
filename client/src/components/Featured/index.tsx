
import ProductItem from "@/components/Products";
import ViewAll from "../Button/ViewAll";
import styles from "./style.module.scss";
import { products } from "@/data";

export default function Featured() {
  return (
    <div>
      <div className="flex mb-2 justify-between">
        <a href="" className="text-xl font-bold">
          <h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        </a>
        <ViewAll />
      </div>
      <div className={styles.product}>
        <div className={styles.list}>
        <ProductItem product={[]}  /> 
        </div>
      </div>
    </div>
  );
}
