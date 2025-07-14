// menuData.ts
export const menuData = [
  { label: "Home", href: "/" },
  {
  label: "About Us",
  href: "/about", // ✅ Main About Us link
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
          { label: "Belts", href: "/services/products/belts" },
          { label: "Wallets", href: "/services/products/wallets" },
          { label: "Bags", href: "/services/products/bags" },
          { label: "Washed Leather Labels", href: "/services/products/washed-leather-labels" },
          { label: "Corporate Gifting", href: "/services/products/corporate-gifting" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];
