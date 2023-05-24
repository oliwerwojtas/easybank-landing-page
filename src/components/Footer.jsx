import { socials } from "../helpers";
import footer from "../assets/footer.svg";
import { Button } from "./reusable/Button";

export const Footer = () => {
  return (
    <div className="bg-darkBlue">
      <footer className="relative text-center lg:flex lg:justify-between">
        <div className="flex flex-col justify-center items-center">
          <img src={footer} alt="" className="w-28 mb-6" />
          <div className="flex gap-2 mb-4">
            {socials.map((social, i) => (
              <a key={i} href={social.path}>
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-lg lg:flex lg:gap-16 lg:text-left lg:mr-12 xl:mr-48">
          <ul className="">
            <li className="li">
              <a className="block" href="#">
                About Us
              </a>
            </li>
            <li className="li">
              <a className="block" href="#">
                Contact
              </a>
            </li>
            <li className="li">
              <a className="block" href="#">
                Blog
              </a>
            </li>
          </ul>
          <ul>
            <li className="li">
              <a href="#">Careers</a>
            </li>
            <li className="li">
              <a href="#">Support</a>
            </li>
            <li className="li">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 lg:flex flex-col lg:justify-center lg:items-center lg:mt-0">
          <div className="mb-4">
            <Button className="text-xs" />
          </div>
          <p className="text-grayishBlue text-sm">&copy; Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};
