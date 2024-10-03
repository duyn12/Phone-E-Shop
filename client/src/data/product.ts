export interface ProductItemProps {
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
    reviews?: Review[];
  };
}
export interface Review {
  title: string;
  body: string;
  rating: number;
}

interface Product {
  reviews?: Review[];
}

export const products: ProductItemProps["product"][] = [
  {
    id: 1,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "tecno_spark_go_2024_-_3.webp",
      "tecno_spark_go_2024_-_121.webp",
      "tecno_spark_go_2024_-_222.webp",
    ],
    title: "iPhone 15 Pro Max",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
    reviews: [
      {
        title: "Great watch",
        body: "I love this watch, it's sleek and stylish. The only downside is that the battery life is not as long as I would like.",
        rating: 2,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 4,
      },
    ],
  },
  {
    id: 2,
    category: {
      id: 1,
      title: "Samsung",
    },
    listimg: ["ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Xiaomi POCO M6",
    detail: "10",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
    reviews: [
      {
        title: "Great watch",
        body: "I love this watch, it's sleek and stylish. The only downside is that the battery life is not as long as I would like.",
        rating: 5,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 4,
      },
    ],
  },
  {
    id: 3,
    category: {
      id: 1,
      title: "Samsung",
    },
    listimg: ["ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "iPhone 15 Pro Max",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
    reviews: [
      {
        title: "Great watch",
        body: "I love this watch, it's sleek and stylish. The only downside is that the battery life is not as long as I would like.",
        rating: 1,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 4,
      },
    ],
  },
  {
    id: 4,
    category: {
      id: 1,
      title: "Samsung",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy Z Fold6",
    detail: "16",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
    reviews: [
      {
        title: "Great watch",
        body: "I love this watch, it's sleek and stylish. The only downside is that the battery life is not as long as I would like.",
        rating: 5,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 5,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 5,
      },
      {
        title: "Very stylish",
        body: "I love the design of this watch, it's very stylish and goes with everything. The only downside is that the strap is a bit uncomfortable.",
        rating: 5,
      },
    ],
  },
  {
    id: 5,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "iPhone 15 Pro Max",
    detail: "21",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 6,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "iPhone 15 ",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 7,
    category: {
      id: 1,
      title: "Samsung",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S23",
    detail: "18",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 8,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Xiaomi Redmi Note 13",
    detail: "14",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 9,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 10,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 11,
    category: {
      id: 2,
      title: "Apple",
    },
    listimg: [
      "ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 12,
    category: {
      id: 1,
      title: "Samsung",
    },
    listimg: ["ss-s24-ultra-xam-222.webp",
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus",
    detail: "20",
    variant: {
      options: [
        {
          sku: "SKU123",
          memory: "256GB",
          color: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 10,
        },
        {
          sku: "SKU124",
          memory: "256GB",
          color: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 5,
        },
        {
          sku: "SKU125",
          memory: "256GB",
          color: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 3,
        },
        {
          sku: "SKU126",
          memory: "256GB",
          color: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 8,
        },
        {
          sku: "SKU127",
          memory: "256GB",
          color: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
          compareAtPrice: "15.000.000₫",
          quantity: 6,
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
];
