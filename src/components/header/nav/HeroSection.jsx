import { pageData } from "../../../data/pageData";

export default function HeroSection() {
  const hero = pageData.header.hero;

  console.log(hero);

  return (
    <>
      {/* // Hero Section */}
      <div className="heroSection">
        <div className="heroContent">
          <h1>{hero.title}</h1>
          <a
            href={hero.link.href}
            target={hero.link.target}
            rel={hero.link.rel}
          >
            {hero.link.text}
          </a>
        </div>
      </div>
    </>
  );
}
