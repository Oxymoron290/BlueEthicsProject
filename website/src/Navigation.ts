import { NavLink } from './types/navLink';

export const rightNavLinks: NavLink[] = [
  {
    name: "Main",
    type: "link",
    url: "/main"
  },
  {
    name: "Admin",
    type: "link",
    url: "/admin",
  },
  // {
  //   name: "Demo Pages1",
  //   type: "dropdown",
  //   items: [
  //     {
  //       sectionName: "Admin Layout",
  //       items: [
  //         {
  //           name: "Dashboard",
  //           url: "./admin/dashboard.html"
  //         },
  //         {
  //           name: "Settings",
  //           url: "./admin/settings.html"
  //         },
  //         {
  //           name: "Tables",
  //           url: "./admin/tables.html"
  //         },
  //         {
  //           name: "Maps",
  //           url: "./admin/maps.html"
  //         }
  //       ]
  //     },
  //     {
  //       sectionName: "Auth Layout",
  //       items: [
  //         {
  //           name: "Login",
  //           url: "./auth/login.html"
  //         },
  //         {
  //           name: "Register",
  //           url: "./auth/register.html"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   name: "Demo Pages2",
  //   type: "dropdown",
  //   items: [
  //     {
  //       sectionName: "No Layout",
  //       items: [
  //         {
  //           name: "Landing",
  //           url: "./landing.html"
  //         },
  //         {
  //           name: "Profile",
  //           url: "./profile.html"
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    name: "Facebook",
    icon: "fab fa-facebook",
    type: "iconButton",
    url: "https://facebook.com/"
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    type: "iconButton",
    url: "https://github.com/"
  },
  {
    name: "Twitter",
    icon: "fab fa-x-twitter",
    type: "iconButton",
    url: "https://x.com/"
  },
  {
    name: "Download",
    icon: "fas fa-arrow-alt-circle-down",
    type: "button",
    url: ""
  }
];

export const leftNavLinks: NavLink[] = [{ name: "Docs", icon: "far fa-file-alt", type: "icon", url: "#" }];
