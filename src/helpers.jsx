import budgeting from "../src/assets/icon-budgeting.svg";
import online from "../src/assets/icon-online.svg";
import onboarding from "../src/assets/icon-onboarding.svg";
import api from "../src/assets/icon-api.svg";
import currency from "../src/assets/image-currency.jpg";
import restaurant from "../src/assets/image-restaurant.jpg";
import plane from "../src/assets/image-plane.jpg";
import confetti from "../src/assets/image-confetti.jpg";

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

export const articles = [
  {
    img: currency,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: restaurant,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: plane,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: confetti,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];
