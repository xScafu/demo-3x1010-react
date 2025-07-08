export default function Main() {
  return (
    <>
      <main>
        {/* Services section */}
        <section class="services">
          <h2>Services</h2>
          <div class="serviceContainer">
            {/* // Ogni service ha struttura ripetitiva, valutare un ciclo se
            generato da JS */}
            <div class="service">
              <h3>Creative Website Development</h3>
              <p>
                Sviluppiamo siti web creativi e originali lasciando massima
                libertà alla creatività dei vostri designer. Il limite tecnico è
                per noi una sfida sempre emozionante da superare.
              </p>
              <button class="itemButton" type="button">
                Menu item
              </button>
            </div>
            <div class="service">
              <h3>Enterprise Custom Development</h3>
              <p>
                Progettiamo e sviluppiamo soluzioni enterprise ad alta
                complessità per rendere possibile ogni dettaglio del tuo
                business.
              </p>
              <button class="itemButton" type="button">
                Menu item
              </button>
            </div>
            <div class="service">
              <h3>Full Stack Design & Development</h3>
              <p>
                Possiamo progettare tutto quanto ti serve, dalla fase di design
                grafico, alla produzione dei contenuti e de ilayout,
                finalizzando lo sviluppo per fornire una soluzione chiavi in
                mano.
              </p>
              <button class="itemButton" type="button">
                Menu item
              </button>
            </div>
          </div>
        </section>
        {/* // Portfolio section */}
        <section class="portfolio">
          <h2>Portfolio</h2>
          <p>
            Esplora una selezione dei nostri lavori più esemplificativi del
            nostro metodo e della qualità.
          </p>
          <div class="cardContainer">
            {/* // Struttura delle card ripetitiva, vedi nota sopra */}
            <div class="card">
              <img src="./img/placeholder_1.png" alt="" />
              <h3>Xerjoff Duran Duran</h3>
              <p>Progettazione visiva. Sviluppo frontend.</p>
            </div>
            <div class="card">
              <img src="./img/placeholder_2.png" alt="" />
              <h3>SIME Museo Egizio</h3>
              <p>
                Progettazione del sistema di archiviazione. Sviluppo enterprise.
              </p>
            </div>
            <div class="card">
              <img src="./img/placeholder_3.png" alt="" />
              <h3>Full Stack Design & Development</h3>
              <p>
                Ingegnerizzazione, Sviluppo backend, Raccolta dati, System
                Integration, AI
              </p>
            </div>
            <div class="card">
              <img src="./img/placeholder_2.png" alt="" />
              <h3>SIME Museo Egizio</h3>
              <p>
                Progettazione del sistema di archiviazione. Sviluppo enterprise.
              </p>
            </div>
            <div class="card">
              <img src="./img/placeholder_3.png" alt="" />
              <h3>Full Stack Design & Development</h3>
              <p>
                Ingegnerizzazione, Sviluppo backend, Raccolta dati, System
                Integration, AI
              </p>
            </div>
            <div class="card">
              <img src="./img/placeholder_1.png" alt="" />
              <h3>Xerjoff Duran Duran</h3>
              <p>Progettazione visiva. Sviluppo frontend.</p>
            </div>
          </div>
          <button class="itemButton" type="button">
            Scopri tutti i progetti
          </button>
        </section>
        {/* // History section */}
        <section class="history">
          <h2>Storia</h2>
          <p>I passi fondamentali del nostro percorso professionale.</p>
          <div class="stagesContainer">
            // Struttura stage e stageText ripetitiva, vedi nota sopra
            <img id="line" src="./line.svg" alt="" />
            <div id="stage1" class="stage"></div>
            <div id="stageText1">
              <h5>2011</h5>
              <p>Fondiamo 3×1010 per fornire servizi informatici e creativi.</p>
            </div>
            <div id="stage2" class="stage"></div>
            <div id="stageText2">
              <h5>2015</h5>
              <p>
                Realizziamo avanzati sistemi di gestione asset aziendali per
                clienti internazionali come Heineken.
              </p>
            </div>
            <div id="stage3" class="stage"></div>
            <div id="stageText3">
              <h5>2018</h5>
              <p>
                Iniziamo la collaborazione con Compagnia dei Caraibi per
                progettare e sviluppare la loro intera transizione digitale.
              </p>
            </div>
            <div id="stage4" class="stage"></div>
            <div id="stageText4">
              <h5>2024</h5>
              <p>
                Progettiamo e realizziamo diversi siti creativi per famosi brand
                e personaggi internazionali nei settori del lusso, della moda e
                della musica.
              </p>
            </div>
            <div id="stage5" class="stage">
              <p>Eccoci qui. Chiamaci!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
