import { ShoppingCart, User, Heart } from "lucide-react";

export const menuData = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Certificates", href: "/about/certificates" },
    ],
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Belts",
        href: "/services/products/belts",
        image: "/productbelts.jpg",
      },
      {
        label: "Wallets",
        href: "/services/products/wallets",
        image: "/productwallets.jpg",
      },
      {
        label: "Bags",
        href: "/services/products/bags",
        image: "/productbags.jpg",
      },
      {
        label: "Washed Leather Labels",
        href: "/services/products/washed-leather-labels",
        image: "/productwashing-labels.jpg",
      },
      {
        label: "Corporate Gifting",
        href: "/services/products/corporate-gifting",
        image: "/productcorporate-gifting.jpg",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },

  // 🔽 Added Icon-based Links
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: "Heart",
  },
  {
    label: "Cart",
    href: "/cart",
    icon: "ShoppingCart",
  },
  {
    label: "Login",
    href: "/login",
    icon: "User",
  },
];
