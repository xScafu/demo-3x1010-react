import HeroSection from "./hero/HeroSection";
import Nav from "./nav/Nav";
import NavMobile from "./nav/NavMobile";

export default function Header() {
  return (
    <>
      <header>
        <Nav />
        <NavMobile />
        <HeroSection />
      </header>
    </>
  );
}
