import budgeting from "../src/assets/icon-budgeting.svg";
import online from "../src/assets/icon-online.svg";
import onboarding from "../src/assets/icon-onboarding.svg";
import api from "../src/assets/icon-api.svg";

export const navLinks = [
  { path: "#", name: "Home" },
  { path: "#", name: "About" },
  { path: "#", name: "Contact" },
  { path: "#", name: "Blog" },
  { path: "#", name: "Careers" },
];

export const items = [
  {
    img: online,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: budgeting,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    img: onboarding,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: api,
    title: "Fast Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
