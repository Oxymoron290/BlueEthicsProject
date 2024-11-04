
export type NavLink =
  | DropdownNavLink
  | IconButtonNavLink
  | IconNavLink
  | ButtonNavLink
  | LinkNavLink;

export interface DropdownNavLink {
  name: string;
  type: "dropdown";
  items: Section[];
}

export interface Section {
  sectionName: string;
  items: LinkItem[];
}

export interface LinkItem {
  name: string;
  url: string;
  target?: string;
}

export interface IconButtonNavLink {
  name: string;
  type: "iconButton";
  icon: string;
  iconDark?: string;
  url: string;
  target?: string;
}

export interface IconNavLink {
  name: string;
  type: "icon";
  icon: string;
  iconDark?: string;
  url: string;
  target?: string;
}

export interface ButtonNavLink {
  name: string;
  type: "button";
  icon: string;
  iconDark?: string;
  url: string;
  target?: string;
}

export interface LinkNavLink {
  name: string;
  type: "link";
  url: string;
  target?: string;
}

export interface SocialProfile {
  network: string;
  username: string;
  url?: string;
}
