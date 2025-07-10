import { pageData } from "../../../data/pageData";

export default function Info() {
  const info = pageData.footer.info;

  return (
    <>
      <div className="info">
        <p>{info.text}</p>
      </div>
    </>
  );
}
