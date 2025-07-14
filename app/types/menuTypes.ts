export interface SubSubMenuItem {
  label: string;
  href: string;
}

export interface SubMenuItem {
  label: string;
  href?: string;
  subsubmenu?: SubSubMenuItem[];
}

export interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}
