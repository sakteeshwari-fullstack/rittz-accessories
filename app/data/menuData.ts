// menuData.ts
export const menuData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    submenu: [
      { label: "Certificates", href: "/about/certificates" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Products",
        subsubmenu: [
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
