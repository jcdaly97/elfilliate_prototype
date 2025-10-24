export const posts = [
  {
    id: 1,
    user: {
      id: 101,
      name: "Jane",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/10/25",
    },
    content:
      "✨ My go-to makeup obsession? e.l.f. Cosmetics, hands down. From their lightweight foundation to the must-have Camo Concealer and those dreamy bite-size eyeshadow palettes — every product just works. Affordable, cruelty-free, and always on point. 💄💕",
    hashtags: ["#elfcosmetics", "#makeuplover", "#beautyroutine"],
    media: {
      type: "image" as const,
      url: require("../../assets/placeholder-post.png"),
    },
    products: [
      {
        id: 1001,
        name: "Camo Concealer",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 1002,
        name: "Bite-Size Eyeshadow",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 1003,
        name: "Liquid Foundation",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 1004,
        name: "Putty Primer",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 3245,
      likes: 187,
      shares: 42,
      comments: 23,
    },
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Alex",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/05/25",
    },
    content:
      "Just tried the new e.l.f. Halo Glow Filter and I'm OBSESSED! 🌟 Perfect for that dewy summer look without feeling heavy. Paired it with their Power Grip Primer and my makeup lasted all day through the heat. #SummerMakeupWin",
    hashtags: ["#elfhaloglow", "#summermakeup", "#dewyskin"],
    media: {
      type: "image" as const,
      url: require("../../assets/placeholder-post.png"),
    },
    products: [
      {
        id: 2001,
        name: "Halo Glow Filter",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 2002,
        name: "Power Grip Primer",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 2876,
      likes: 156,
      shares: 31,
      comments: 18,
    },
  },
  {
    id: 3,
    user: {
      id: 103,
      name: "Taylor",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "08/28/25",
    },
    content:
      "My everyday essentials from e.l.f. that I can't live without! 💯 Their Hydrating Camo Concealer is perfect for my dry under-eyes, and the Putty Blush gives the most natural flush. All these products for under $30 total - that's why I love e.l.f.!",
    hashtags: ["#elfessentials", "#budgetbeauty", "#makeupmusthaves"],
    media: {
      type: "image" as const,
      url: require("../../assets/placeholder-post.png"),
    },
    products: [
      {
        id: 3001,
        name: "Hydrating Camo Concealer",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 3002,
        name: "Putty Blush",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 3003,
        name: "Wow Brow Gel",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 3102,
      likes: 203,
      shares: 47,
      comments: 29,
    },
  },
];
