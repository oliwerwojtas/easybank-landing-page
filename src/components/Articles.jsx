import { articles } from "../helpers";

export const Articles = () => {
  return (
    <section className="section">
      <div className="">
        <h2 className="text-2xl text-darkBlue mb-6 text-center md:text-left">Latest Articles</h2>
      </div>
      <div className="flex flex-wrap gap-8">
        {articles.map((article, i) => (
          <article className="w-full rounded-lg bg-white overflow-hidden" key={i}>
            <img className="w-full h-52 object-cover" src={article.img} alt="" />
            <div className="pt-5 pr-6 pb-8 pl-6">
              <span className="text-xs block text-grayishBlue">{article.author}</span>
              <p className="cursor-pointer py-3 hover:text-limeGreen">{article.title}</p>
              <p className="text-xs block text-grayishBlue">{article.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
