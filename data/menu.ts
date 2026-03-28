export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  price: number;
  tag?: "popular" | "new" | "chef";
  emoji: string;
  /** Path under `public/`, e.g. `/menu/tea.jpg` — optional real product photo */
  image?: string;
}

export interface MenuCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  icon: string;
  items: MenuItem[];
  /** Path under `public/`, e.g. `/menu/drinks-hero.jpg` — optional category banner / reel */
  image?: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hummus",
    nameAr: "حمص",
    nameEn: "Hummus",
    icon: "🫙",
    image: "/menu/images/hummus.webp",
    items: [
      {
        id: "h1",
        nameAr: "حمص حب",
        nameEn: "Hummus with Seeds",
        descAr: "حمص حب مع زيت الزيتون",
        descEn: "Fresh hummus with olive oil",
        price: 4.5,
        tag: "popular",
        image: "/menu/images/hommoshab.webp",
        emoji: "🫙",
      },
      {
        id: "h2",
        nameAr: "حمص باللحمة",
        nameEn: "Hummus with Meat",
        descAr: "حمص مع لحمة مفرومة وصنوبر محمص",
        descEn: "Hummus topped with minced meat and roasted pine nuts",
        price: 7.5,
        tag: "popular",
        image: "/menu/images/hummuslahme.webp",
        emoji: "🥩",
      },
      {
        id: "h3",
        nameAr: "حمص مطحون",
        nameEn: "Hummus with Oil",
        descAr: "حمص مطحون مع زيت الزيتون",
        descEn: "Hummus drizzled with olive oil",
        price: 5.0,
        image: "/menu/images/hummusMATHHUN.webp",
        emoji: "🫒",
      },
      {
        id: "h4",
        nameAr: "حمص بالفول",
        nameEn: "Hummus with Foul",
        descAr: "مزيج حمص وفول بالطحينة والليمون",
        descEn: "Blend of hummus and fava beans with tahini and lemon",
        price: 6.0,
        tag: "chef",
        image: "/menu/images/foulwhomos.webp",
        emoji: "🫘",
      },
    ],
  },

  {
    id: "Manakish",
    nameAr: "مناقيش",
    nameEn: "Manakish",
    icon: "🍞",
    image: "/menu/images/manakish.jpg",
    items: [
      {
        id: "b2",
        nameAr: "مناقيش زعتر",
        nameEn: "Za'atar Manakish",
        descAr: "مناقيش بالزعتر وزيت الزيتون من الفرن",
        descEn: "Thyme and olive oil flatbread from the oven",
        price: 3.0,
        tag: "popular",
        image: "/menu/images/zaatarMANAKISH.jpg",
        emoji: "🌿",
      },
      {
        id: "b3",
        nameAr: "مناقيش جبنة",
        nameEn: "Cheese Manakish",
        descAr: "مناقيش بالجبنة العكاوية الطازجة",
        descEn: "Manakish with fresh Akkawi cheese",
        price: 3.5,
        tag: "new",
        image: "/menu/images/cheeseMANAKISH.webp",
        emoji: "🧀",
      },
      {
        id: "b4",
        nameAr: "مناقيش زعتر وجبنة",
        nameEn: "Za'atar & Cheese",
        descAr: "مزيج رائع من الزعتر والجبنة العكاوية",
        descEn: "Perfect blend of thyme and Akkawi cheese",
        price: 4.0,
        tag: "chef",
        image: "/menu/images/zaatarandcheeseMANAKISH.webp",
        emoji: "✨",
      },
      {
        id: "b5",
        nameAr: "فطير بالسمنة",
        nameEn: "Butter Flatbread",
        descAr: "فطير محلى بالسمنة البلدية والعسل",
        descEn: "Sweet flatbread with country butter and honey",
        price: 3.5,
        image: "/menu/images/fatayer.jpg",
        emoji: "🍯",
      },
    ],
  },
  {
    id: "sides",
    nameAr: "مقبلات",
    nameEn: "Starters",
    image: "/menu/images/hawader.webp",
    icon: "🥗",
    items: [
      {
        id: "s1",
        nameAr: "لبنة بالزيت",
        nameEn: "Labneh with Oil",
        descAr: "لبنة كريمية مع زيت زيتون وزعتر",
        descEn: "Creamy labneh with olive oil and thyme",
        price: 3.5,
        tag: "popular",
        image: "/menu/images/labneh.webp",
        emoji: "🥛",
      },
      {
        id: "s2",
        nameAr: "جبنة حلوم",
        nameEn: "Halloumi Cheese",
        descAr: "جبنة حلوم مشوية مع زيت الزيتون",
        descEn: "Grilled halloumi cheese with olive oil",
        price: 3.0,
        image: "/menu/images/halloum.webp",
        emoji: "🫒",
      },
      {
        id: "s4",
        nameAr: "بيض ",
        nameEn: "Eggs",
        descAr: "بيض طازج",
        descEn: "Fresh eggs",
        price: 4.5,
        image: "/menu/images/eggs.webp",
        emoji: "🍳",
      },
    ],
  },
  {
    id: "drinks",
    nameAr: "مشروبات ساخنة",
    nameEn: "Hot Drinks",
    icon: "☕",
    image: "/menu/images/hotdrinks.webp",
    items: [
      {
        id: "d1",
        nameAr: "شاي",
        nameEn: "Tea",
        descAr: "شاي أسود مع نعناع طازج",
        descEn: "Black tea with fresh mint",
        price: 2.0,
        tag: "popular",
        emoji: "🫖",
        image: "/menu/images/tea.webp",
      },
      {
        id: "d2",
        nameAr: "قهوة عربية",
        nameEn: "Arabic Coffee",
        descAr: "قهوة عربية أصيلة بالهيل",
        descEn: "Authentic Arabic coffee with cardamom",
        price: 2.5,
        image: "/menu/images/arabiccoffee.webp",
        emoji: "☕",
      },
      {
        id: "d3",
        nameAr: "كابتشينو",
        nameEn: "Cappuccino",
        descAr: "كابتشينو",
        descEn: "Cappuccino",
        price: 2.5,
        emoji: "☕",
        image: "/menu/images/cappuccino.webp",
      },
      {
        id: "d4",
        nameAr: "لاتيه",
        nameEn: "Latte",
        descAr: "لاتيه",
        descEn: "Latte",
        price: 2.5,
        emoji: "☕",
        image: "/menu/images/latte.webp",
      },
      {
        id: "d5",
        nameAr: "اسبريسو",
        nameEn: "Espresso",
        descAr: "اسبريسو",
        descEn: "Espresso",
        price: 2.5,
        emoji: "☕",
        image: "/menu/images/espresso.webp",
      },
    ],
  },
  {
    id: "colddrinks",
    nameAr: "مشروبات باردة",
    nameEn: "Cold Drinks",
    icon: "☕",
    image: "/menu/images/colddrinks.webp",
    items: [
      {
        id: "d1",
        nameAr: "ليمون عصير",
        nameEn: "Lemon juice",
        descAr: "ليمون طازج",
        descEn: "Fresh lemon",
        price: 2.0,
        tag: "popular",
        emoji: "🍋",
        image: "/menu/images/lemon.webp",
      },
      {
        id: "d2",
        nameAr: "عصير جزر",
        nameEn: "carrot",
        descAr: "عصير جزر",
        descEn: "carrot juice",
        price: 2.5,
        emoji: "🥕",
        image: "/menu/images/carrot.webp",
      },
      {
        id: "d3",
        nameAr: "ليموناضا",
        nameEn: "Lemonade",
        descAr: "ليموناضا",
        descEn: "Lemonade",
        price: 2.5,
        emoji: "🍋",
        image: "/menu/images/lemonade.webp",
      },
      {
        id: "d4",
        nameAr: "مشروبات غازية",
        nameEn: "soft drinks",
        descAr: "مشروبات غازية",
        descEn: "soft drinks",
        price: 2.5,
        image: "/menu/images/softdrinks.webp",
        emoji: "☕",
      },

    ],
  }
];
