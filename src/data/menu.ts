
export type LocalizedText = {
  he: string;
  ar: string;
};

export type Pizza = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  prices: {
    small: number;
    family: number;
    giant: number;
  };
};

export type Topping = {
  id: string;
  name: LocalizedText;
  image: string;
  extraPrice: number | null;
};

export const pizzas: Pizza[] = [
  {
    id: "classic",
    name: {
      he: "פיצה נאפולי קלאסית",
      ar: "بيتزا نابولي الكلاسيكية",
    },
    description: {
      he: "פיצה קלאסית עם רוטב עגבניות וגבינת מוצרלה.",
      ar: "بيتزا كلاسيكية مع صلصة البندورة وجبنة الموزاريلا.",
    },
    image: "/images/classic.jpg",
    prices: { small: 35, family: 60, giant: 100 },
  },
  {
    id: "stuffed",
    name: {
      he: "פיצה עם שוליים ממולאים",
      ar: "بيتزا بأطراف محشية",
    },
    description: {
      he: "פיצה עם שוליים ממולאים בגבינה נמסה.",
      ar: "بيتزا بأطراف محشية بالجبنة الذائبة.",
    },
    image: "/images/stuffed.jpg",
    prices: { small: 40, family: 80, giant: 120 },
  },
  {
    id: "fish",
    name: {
      he: "פיצה הדג",
      ar: "بيتزا السمك",
    },
    description: {
      he: "פיצה מיוחדת בסגנון הבית .",
      ar: "بيتزا مميزة على طريقة المطعم .",
    },
    image: "/images/fish.jpg",
    prices: { small: 50, family: 70, giant: 90 },
  },
];

export const toppings: Topping[] = [
  { id: "olives", name: { he: "זיתים", ar: "زيتون" }, image: "/images/olives.jpg", extraPrice: 0 },
  { id: "mushrooms", name: { he: "פטריות", ar: "فطر" }, image: "/images/mushrooms.jpg", extraPrice: 0 },
  { id: "corn", name: { he: "תירס", ar: "ذرة" }, image: "/images/corn.jpg", extraPrice: 0 },
  { id: "onion", name: { he: "בצל", ar: "بصل" }, image: "/images/onion.jpg", extraPrice: 5 },
  { id: "pepper", name: { he: "גמבה", ar: "فلفل حلو" }, image: "/images/pepper.jpg", extraPrice: 5 },
  { id: "tomato", name: { he: "עגבנייה", ar: "بندورة" }, image: "/images/tomato.jpg", extraPrice: 5 },
  { id: "jalapeno", name: { he: "חלפיניו (חריף)", ar: "هالبينو (حار)" }, image: "/images/jalapeno.jpg", extraPrice: 5 },
  { id: "pepperoni", name: { he: "פפרוני", ar: "بيبروني" }, image: "/images/pepperoni.jpg", extraPrice: 10 },
  { id: "tuna", name: { he: "טונה", ar: "تونة" }, image: "/images/tuna.jpg", extraPrice: 10 },
];

export const drinks = [
  { id: "cola", name: { he: "קולה", ar: "كولا" }, image: "/images/cola.jpg", price: 7 },
  { id: "zero", name: { he: "קולה זירו", ar: "كولا زيرو" }, image: "/images/zero.jpg", price: 7 },
  { id: "sprite", name: { he: "ספרייט", ar: "سبرايت" }, image: "/images/sprite.jpg", price: 7 },
  { id: "xl", name: { he: "XL", ar: "XL" }, image: "/images/xl.jpg", price: 7 },
  { id: "water", name: { he: "מים", ar: "مياه" }, image: "/images/water.jpg", price: 7 },
];
