import mockups from "../assets/image-mockups.png";
import { Button } from "./reusable/Button";
import "../index.css";
export const Main = () => {
  return (
    <section className="section px-0 py-0 md:flex md:overflow-x-clip md:items-center md:flex-row-reverse md:h-screen md:pb-0">
      <figure className="picture bg-cover bg-no-repeat md:relative w-120 h-full">
        <img src={mockups} alt="" />
      </figure>

      <div className="flex flex-col px-8  md:w-3/4 md:pl-16">
        <h1 className="text-[#2D314D] text-3xl text-center mb-4 md:text-left">
          Next generation digital banking
        </h1>
        <p className="text-grayishBlue text-xs font-normal mb-6 text-justify md:text-sm md:text-left">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button />
        </div>
      </div>
    </section>
  );
};
