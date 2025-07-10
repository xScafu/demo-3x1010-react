import { pageData } from "../../../data/pageData";
import { useState, useEffect } from "react";

export default function History() {
  const stages = pageData.main.history;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup per evitare memory leak
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section className="history">
      <h2>{stages.title}</h2>
      <p>{stages.description}</p>
      <div className="stagesContainer">
        <svg className="line" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="1000"
            x2="0"
            y2="0"
            stroke="#8C919A"
            strokeWidth="2"
          />
        </svg>

        {stages.items.map((stage) => {
          const isOdd = stage.id % 2 !== 0;

          // Determina la classe del testo se non siamo su mobile
          const textClass = isMobile
            ? stage.textClass
            : isOdd
            ? "stageTextEnd"
            : "stageTextStart";

          return (
            <div key={stage.id} className={stage.className}>
              {isMobile ? (
                <>
                  <div className="stage">
                    <p>{stage.innerText}</p>
                  </div>
                  <div className={textClass}>
                    <h5>{stage.year}</h5>
                    <p>{stage.text}</p>
                  </div>
                </>
              ) : isOdd ? (
                <>
                  <div className={textClass}>
                    <h5>{stage.year}</h5>
                    <p>{stage.text}</p>
                  </div>
                  <div className="stage">
                    <p>{stage.innerText}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="stage">
                    <p>{stage.innerText}</p>
                  </div>
                  <div className={textClass}>
                    <h5>{stage.year}</h5>
                    <p>{stage.text}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
