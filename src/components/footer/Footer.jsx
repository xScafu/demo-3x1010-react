import { useEffect } from "react";
import Contacts from "./contacts/Contacts";
import Info from "./info/Info";

export default function Footer() {
  return (
    <>
      <footer>
        <Contacts />
        <Info />
      </footer>
    </>
  );
}
