import { items } from "../helpers";
import "../index.css";
export const About = () => {
  return (
    <div className="bg-lightGrayishBlue">
      <section className="section">
        <div>
          <h2 className="text-3xl text-darkBlue mb-6 text-center md:text-left">
            Why choose Easybank?
          </h2>
          <p className="text-center text-xs text-grayishBlue">
            We leverage Open Banking to turn your bank account into your financial hub. Control your
            finances like never before.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 gap-8 list">
          {items.map((item, i) => (
            <div key={i}>
              <img className="block mx-auto" src={item.img} alt="" />
              <p className="text-center my-6 font-normal">{item.title}</p>
              <p className="text-center text-xs text-grayishBlue">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
