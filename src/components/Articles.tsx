/* eslint-disable @typescript-eslint/no-explicit-any */
import Img1 from "../assets/images/image-confetti.jpg";
import Img2 from "../assets/images/image-plane.jpg";
import Img3 from "../assets/images/image-restaurant.jpg";
import Img4 from "../assets/images/image-currency.jpg";

const Articles = () => {
  interface IArticle {
    img: any;
    author: string;
    title: string;
    desc: string;
  }
  const articles: IArticle[] = [
    {
      img: Img1,

      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      img: Img2,
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      img: Img3,
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      desc: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
    },
    {
      img: Img4,
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    },
  ];
  return (
    <div className="articles-section">
      <h3 className="title">Latest Articles</h3>
      <div className="articles-div">
        {articles.map((article: IArticle) => (
          <div className="article-item" key={article.title}>
            <div>
              <img className="article-img" src={article.img} alt="title" />
            </div>
            <div className="text-section">
              <div className="article-author">By {article.author}</div>
              <div className="article-title">{article.title}</div>
              <div className="article-desc">{article.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
