// components/menuData.ts

export const mobileMenu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    children: [
      { label: "Certificates", href: "/about/certificates" },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Products",
        children: [
          { label: "Belts", href: "/products/belts" },
          { label: "Wallets", href: "/products/wallets" },
          { label: "Bags", href: "/products/bags" },
          { label: "Washed Leather Labels", href: "/products/washed-leather-labels" },
          { label: "Corporate Gifting", href: "/products/corporate-gifting" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];
