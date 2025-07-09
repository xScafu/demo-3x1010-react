import { pageData } from "../../../data/pageData";

export default function History() {
  const stages = pageData.main.history;
  return (
    <>
      {" "}
      {/* // History section */}
      <section className="history">
        <h2>{stages.title}</h2>
        <p>{stages.description}</p>
        <div className="stagesContainer">
          <img id="line" src="./line.svg" alt="" />
          {stages.items.map((stage) => (
            <>
              <div id={stage.id} key={stage.id} className="stage">
                <p>{stage.innerText}</p>
              </div>
              <div id={stage.textId}>
                <h5>{stage.year}</h5>
                <p>{stage.text}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
