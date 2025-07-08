import { useEffect } from "react";

export default function Footer() {
  // Validazione form: aggiunge un asterisco ai label dei campi richiesti e vuoti
  useEffect(() => {
    const form = document.querySelector("form");
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.addEventListener("click", function (event) {
      // Rimuove tutti gli asterischi precedenti dai label
      form.querySelectorAll("label .required").forEach((span) => span.remove());
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene l'invio del form per la validazione
        if (valid) {
          form.reset(); // Resetta i valori del form
          alert("Grazie per averci contattati!"); // Mostra un messaggio di successo
        }
      });
      let valid = true;

      // Controlla tutti i campi richiesti (input e textarea)
      form
        .querySelectorAll("input[required], textarea[required]")
        .forEach((field) => {
          if (!field.value.trim()) {
            valid = false;
            const label = form.querySelector(`label[for="${field.id}"]`);
            if (label) {
              // Aggiunge l'asterisco solo se non già presente
              if (!label.querySelector(".required")) {
                const star = document.createElement("span");
                star.textContent = " *";
                star.className = "required";
                label.appendChild(star);
              }
            }
          }
        });

      // Blocca l'invio del form se ci sono campi vuoti richiesti
      if (!valid) event.preventDefault();
    });
  });
  return (
    <>
      <footer>
        {/* <!-- Contacts section --> */}
        <section>
          <div class="contacts">
            <h2>Contattaci</h2>
            <p>Per fare qualcosa insieme dobbiamo prima conoscerci un po’.</p>
            <form action="" method="">
              {/* <!--Name--> */}
              <div id="nameInput" class="form-group">
                <label for="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Come ti chiamiamo"
                  required
                />
              </div>
              {/* <!--Email--> */}
              <div id="emailInput" class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  placeholder="Dove vuoi che ti scriviamo"
                  required
                />
              </div>
              {/* <!--Telephone--> */}
              <div id="telephoneInput" class="form-group">
                <label for="telephone">Telefono</label>
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  placeholder="Se preferisci ti telefoniamo"
                />
              </div>
              {/* <!--Message--> */}
              <div id="textarea" class="form-group">
                <label for="message">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Facci sapere cosa ti piacerebbe fare insieme a noi. O anche un saluto."
                  required
                ></textarea>
              </div>
              <button type="submit">Invia</button>
            </form>
          </div>
        </section>

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
