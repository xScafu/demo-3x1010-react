import { pageData } from "../../../data/pageData";

export default function Portfolio() {
  const portfolio = pageData.main.portfolio;
  return (
    <>
      {/* // Portfolio section */}
      <section className="portfolio">
        <h2>{portfolio.title}</h2>
        <p>{portfolio.description}</p>
        <div className="cardContainer">
          {portfolio.cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image.src} alt={card.image.alt} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <a
          className="itemButton"
          href={portfolio.link.href}
          rel={portfolio.link.rel}
          target={portfolio.link.target}
        >
          {portfolio.link.text}
        </a>
      </section>
    </>
  );
}
