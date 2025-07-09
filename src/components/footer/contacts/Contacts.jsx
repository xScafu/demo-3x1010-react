import { pageData } from "../../../data/pageData";
import { useEffect } from "react";

export default function Contacts() {
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

  const contacts = pageData.footer.contacts;

  return (
    <>
      {/* <!-- Contacts section --> */}
      <section>
        <div class="contacts">
          <h2>{contacts.title}</h2>
          <p>{contacts.description}</p>
          <form action="" method="">
            {contacts.form.map((form) => (
              <div id={form.id} className="form-group">
                {console.log(form)}
                <label htmlFor={form.label.htmlFor}>{form.label.text}</label>
                {form.input ? (
                  <input
                    type={form.input.type}
                    id={form.input.id}
                    name={form.input.name}
                    placeholder={form.input.placeholder}
                    required
                  />
                ) : (
                  <textarea
                    id={form.textarea.id}
                    name={form.textarea.name}
                    placeholder={form.textarea.placeholder}
                    rows={form.textarea.rows}
                    required
                  ></textarea>
                )}
              </div>
            ))}
            <button type={contacts.button.type}>{contacts.button.text}</button>
          </form>
        </div>
      </section>
    </>
  );
}
