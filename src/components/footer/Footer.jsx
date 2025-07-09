import { useEffect } from "react";
import Contacts from "./contacts/Contacts";

export default function Footer() {
  return (
    <>
      <footer>
        <Contacts />
        <div class="info">
          <p>
            3×1010 s.r.l. - c/o OGR Tech – Corso Castelfidardo, 22 - 10138
            Torino CF/P.IVA: 02407220900 - Codice SDI: SUBM70N
          </p>
        </div>
      </footer>
    </>
  );
}
