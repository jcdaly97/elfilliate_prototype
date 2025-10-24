export const posts = [
  {
    id: 1,
    user: {
      id: 101,
      name: "Melissa Jones",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/10/25",
    },
    content:
      "✨ My go-to makeup obsession? e.l.f. Cosmetics, hands down. From their lightweight foundation to the must-have Camo Concealer and those dreamy bite-size eyeshadow palettes — every product just works. Affordable, cruelty-free, and always on point. 💄💕",
    hashtags: ["#elfcosmetics", "#makeuplover", "#beautyroutine"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-1.jpg"),
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
    id: 4,
    user: {
      id: 104,
      name: "Jordan Weir",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/01/25",
    },
    content:
      "Quick natural look with my current e.l.f. faves — super easy and fresh.",
    hashtags: ["#quickmakeup", "#elffavorites", "#naturallook"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-4.jpg"),
    },
    products: [
      {
        id: 4001,
        name: "Putty Primer",
        image: require("../../assets/placeholder-product.png"),
      },
      {
        id: 4002,
        name: "Wow Brow Gel",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 2104,
      likes: 132,
      shares: 22,
      comments: 14,
    },
  },
  {
    id: 5,
    user: {
      id: 104,
      name: "Jordan Weir",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "08/27/25",
    },
    content:
      "Weekend glow routine with e.l.f. — lightweight, dewy, and long‑lasting.",
    hashtags: ["#glow", "#elfskin", "#weekend"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-5.jpg"),
    },
    products: [
      {
        id: 5001,
        name: "Halo Glow Filter",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 1843,
      likes: 121,
      shares: 18,
      comments: 11,
    },
  },
  {
    id: 6,
    user: {
      id: 106,
      name: "Charlotte Thompson",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/02/25",
    },
    content:
      "Soft blush + glossy lip = instant confidence. Love these e.l.f. staples!",
    hashtags: ["#softglam", "#elfblush", "#glossy"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-2.jpg"),
    },
    products: [
      {
        id: 6001,
        name: "Putty Blush",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 2654,
      likes: 167,
      shares: 27,
      comments: 16,
    },
  },
  {
    id: 7,
    user: {
      id: 106,
      name: "Charlotte Thompson",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "08/25/25",
    },
    content:
      "Trying a new routine with e.l.f. — affordable and looks great on camera!",
    hashtags: ["#creatorlife", "#affordablebeauty", "#elf"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-1.jpg"),
    },
    products: [
      {
        id: 7001,
        name: "Liquid Foundation",
        image: require("../../assets/placeholder-product.png"),
      },
    ],
    engagement: {
      views: 1988,
      likes: 119,
      shares: 17,
      comments: 9,
    },
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Melissa Ray",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "09/05/25",
    },
    content:
      "Just tried the new e.l.f. Halo Glow Filter and I'm OBSESSED! 🌟 Perfect for that dewy summer look without feeling heavy. Paired it with their Power Grip Primer and my makeup lasted all day through the heat. #SummerMakeupWin",
    hashtags: ["#elfhaloglow", "#summermakeup", "#dewyskin"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-2.jpg"),
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
      name: "Melissa Jones",
      avatar: require("../../assets/placeholder-avatar.png"),
      date: "08/28/25",
    },
    content:
      "My everyday essentials from e.l.f. that I can't live without! 💯 Their Hydrating Camo Concealer is perfect for my dry under-eyes, and the Putty Blush gives the most natural flush. All these products for under $30 total - that's why I love e.l.f.!",
    hashtags: ["#elfessentials", "#budgetbeauty", "#makeupmusthaves"],
    media: {
      type: "image" as const,
      url: require("../../assets/images/social-3.jpg"),
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
