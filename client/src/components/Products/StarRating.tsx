
import { Star } from "lucide-react";
import styles from "./style.module.scss";

export const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={styles.rating}>
      {stars.map((star) => (
        <Star
          key={star}
          className={`size-4 ${
            star <= rating
              ? "fill-yellow-400 stroke-yellow-500"
              : "stroke-yellow-500"
          }`}
        />
      ))}
    </div>
  );
};