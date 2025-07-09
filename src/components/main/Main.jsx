import History from "./history/History";
import Portfolio from "./porfolio/Portfolio";
import Services from "./services/Services";

export default function Main() {
  return (
    <>
      <main>
        <Services />
        <Portfolio />
        <History />
      </main>
    </>
  );
}
