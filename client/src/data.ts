export interface ProductItemProps {
  product: {
    id: any;
    category: any;
    img: string;
    listimg?: string[];
    title: string;
    show: string;
    throungh: string;
    detail: string;
    linked?: {
      options: {
        name: string;
      }[];
    };
    variant?: {
      options: {
        name: string;
        image: string;
        price: string;
      }[];
    };
    coupon: string;
  };
}

export const products: ProductItemProps["product"][] = [
  {
    id: 1,
    category: 2,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "tecno_spark_go_2024_-_3.webp",
      "tecno_spark_go_2024_-_121.webp",
      "tecno_spark_go_2024_-_222.webp",
    ],
    title: "Samsung Galaxy S24 Plus 12GB 256GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 2,
    category: 1,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Xiaomi POCO M6 (6GB 128GB)",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "10",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 4,
    category: 4,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "iPhone 15 Pro Max 256GB | Chính hãng VN/A",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 4,
    category: 5,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy Z Fold6",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "16",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 5,
    category: 1,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Xiaomi POCO M6 (6GB 128GB)",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "21",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 6,
    category: 2,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "iPhone 15 128GB | Chính hãng VN/A",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 7,
    category: 4,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S23 8GB 128GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "18",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 8,
    category: 1,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Xiaomi Redmi Note 13 (6GB 128GB)",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "14",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 9,
    category: 1,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus 12GB 256GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 10,
    category: 2,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus 12GB 256GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 11,
    category: 5,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus 12GB 256GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
  {
    id: 12,
    category: 1,
    img: "ss-s24-ultra-xam-222.webp",
    listimg: [
      "iphone_13_128gb_-_1_1_.webp",
      "iphone_13_128gb_-_2_1_.webp",
      "iphone_13_128gb_-_4_1_.webp",
    ],
    title: "Samsung Galaxy S24 Plus 12GB 256GB",
    show: "20.990.000",
    throungh: "20.990.000",
    detail: "20",
    linked: {
      options: [
        {
          name: "512GB",
        },
        {
          name: "256GB",
        },
        {
          name: "128GB",
        },
      ],
    },
    variant: {
      options: [
        {
          name: "Trắng",
          image: "h_ng_4.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh dương",
          image: "tr_ng_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Xanh lá",
          image: "_en_2_5.webp",
          price: "13.850.000₫",
        },
        {
          name: "Đen",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
        {
          name: "Hồng",
          image: "xnnah_kas_3.webp",
          price: "13.850.000₫",
        },
      ],
    },
    coupon:
      "Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng",
  },
];
