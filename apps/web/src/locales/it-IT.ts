export default {
  menu: {
    dashboard: "Dashboard",
    tools: "Strumenti",
    devTools: "Strumenti per sviluppatori",
    cssMinify: "Minificatore CSS",
    fileTreeGenerator: "Generatore Albero File",
    lightMode: "Modalità chiara",
    darkMode: "Modalità scura",
    systemMode: "Auto",
  },
  common: {
    switchLang: "Cambia lingua",
    loadExample: "Carica esempio",
    uploadFile: "Carica file",
    clear: "Pulisci",
    cleared: "Pulito",
    copy: "Copia",
    copySuccess: "Copiato negli appunti",
    copyFail: "Copia fallita",
    compress: "Comprimi",
    compressSuccess: "Compressione riuscita",
    compressFail: "Compressione fallita",
    inputEmpty: "Inserisci contenuto",
    fileLoaded: "File caricato con successo",
    fileLoadFail: "Lettura file fallita",
    dragTip: "Trascina un file qui",
    autoWrap: "A capo automatico",
    result: "Risultato",
    size: "Dimensione",
    rate: "Tasso",
  },
  tool: {
    fileTreeGenerator: {
      title: "Generatore Albero File",
      description:
        "Genera una struttura ad albero ASCII delle directory del progetto per la documentazione e la visualizzazione del codice.",
      inputTitle: "Seleziona Directory",
      outputTitle: "Risultato Generato",
      selectDirBtn: "Seleziona Directory",
      generateBtn: "Genera Albero",
      copyBtn: "Copia Risultato",
      dragTip: "Trascina qui la directory",
      ignorePatterns: "Pattern da ignorare (separati da virgola)",
      guide: {
        meaning: {
          title: "Perché Generatore Albero File?",
          desc: "Una chiara visualizzazione della struttura del progetto è fondamentale quando si scrive documentazione tecnica, README o si effettuano revisioni del codice. Gli alberi di file ASCII mostrano intuitivamente la gerarchia delle directory, aiutando gli sviluppatori a comprendere rapidamente l'architettura del progetto.",
        },
        features: {
          title: "Caratteristiche",
          dragDrop: {
            title: "Supporto Drag & Drop",
            desc: "Supporta il trascinamento delle cartelle direttamente nella pagina per analizzare automaticamente la struttura della directory.",
          },
          customIgnore: {
            title: "Ignora Personalizzato",
            desc: "Supporta file o cartelle da ignorare personalizzati (ad es. node_modules, .git) per mantenere l'output conciso.",
          },
        },
        usage: {
          title: "Guida all'uso",
          step1: {
            title: "Seleziona o Trascina Cartella",
            desc: "Clicca il pulsante per selezionare una cartella, o trascina una cartella direttamente nell'area designata.",
          },
          step2: {
            title: "Configura Ignora",
            desc: "Modifica i pattern di esclusione predefiniti se necessario per filtrare i file indesiderati.",
          },
          step3: {
            title: "Ottieni Risultato",
            desc: "L'albero generato verrà visualizzato sulla destra. Clicca su copia per usarlo.",
          },
        },
      },
    },
    cssMinify: {
      title: "Minificatore CSS",
      description:
        "Rimuovi spazi extra, commenti e nuove righe per ridurre la dimensione del file CSS per la distribuzione in produzione.",
      inputTitle: "CSS Input",
      outputTitle: "Risultato Compresso",
      uploadBtn: "Carica File CSS",
      compressBtn: "Comprimi CSS",
      copyBtn: "Copia Risultato",
      dragTip: "Trascina file CSS qui",
      guide: {
        meaning: {
          title: "Perché minificare il CSS?",
          desc: "La minificazione CSS è una parte fondamentale dell'ottimizzazione delle prestazioni web. Rimuovendo spazi bianchi, commenti e codice ridondante e ottimizzando la struttura (unione regole, accorciamento colori), la dimensione del file può essere ridotta del 20-60%, migliorando significativamente la velocità di caricamento della pagina e riducendo i costi di larghezza di banda. Questo è cruciale per la distribuzione in produzione, lo sviluppo mobile e la distribuzione CDN, influenzando direttamente l'esperienza utente e il posizionamento SEO. Il CSS minificato mantiene la piena funzionalità ed è una pratica standard nell'ingegneria frontend.",
        },
        features: {
          title: "Caratteristiche",
          editor: {
            title: "Flusso di lavoro Editor + File",
            desc: "Supporta l'incollaggio di CSS, il trascinamento di file .css o il caricamento di esempi. Lo strumento legge e visualizza automaticamente il contenuto, supportando la pulizia e la copia con un clic per un facile confronto.",
          },
          stats: {
            title: "Metriche di livello produttivo",
            desc: "Statistiche in tempo reale su dimensione originale, dimensione compressa, tasso di compressione e risparmio stimato di larghezza di banda CDN aiutano a valutare i guadagni di prestazioni e supportare le decisioni di ottimizzazione.",
          },
          lossless: {
            title: "Compressione senza perdita",
            desc: "La rimozione con un clic di spazi bianchi e commenti, l'ottimizzazione del valore zero (0px→0), l'abbreviazione del colore (#ffffff→#fff) e l'unione delle proprietà assicurano che l'output finale non cambi affatto il comportamento del CSS.",
          },
          security: {
            title: "Sicurezza livello CI/CD",
            desc: "Tutta la logica viene eseguita nel browser; nessun file di stile viene caricato. Copia o scarica style.min.css con un clic per un'integrazione sicura nei processi di build.",
          },
        },
        usage: {
          title: "Guida all'uso",
          step1: {
            title: "Raccogli stili",
            desc: "Incolla CSS, trascina file .css o carica esempi, confermando che il contenuto originale sia visualizzato nell'editor.",
          },
          step2: {
            title: "Regola impostazioni",
            desc: 'Seleziona "A capo automatico" per una visualizzazione più semplice. Tutte le regole di ottimizzazione della compressione sono abilitate per impostazione predefinita, nessuna configurazione extra necessaria.',
          },
          step3: {
            title: "Output Risultato",
            desc: 'Clicca su "Comprimi CSS", verifica il risultato e copia, scarica o sostituisci il file di progetto/rilascio in qualsiasi momento.',
          },
        },
        tech: {
          title: "Intro tecnica",
          principle: {
            title: "Principio Compressione CSS",
            desc: "La compressione CSS riduce la dimensione del file rimuovendo caratteri ridondanti (spazi, nuove righe, commenti), ottimizzando la struttura del codice (unione regole, accorciamento colori) e semplificando la sintassi (rimozione punti e virgola/virgolette non necessari). Il processo assicura che la funzionalità CSS rimanga invariata, alterando solo la rappresentazione fisica, riducendo la dimensione del file del 20-60% e aumentando la velocità di caricamento.",
          },
          optimization: {
            title: "Tecniche di Ottimizzazione",
            desc: "La compressione CSS include varie tecniche: rimozione spazi bianchi, pulizia commenti, semplificazione colori (#ffffff→#fff), ottimizzazione valore zero (0px→0), unione proprietà (margine 4 valori), deduplicazione selettori e rimozione codice morto. La compressione avanzata può anche supportare l'ordinamento delle proprietà, l'unione delle media query e l'inlining di {'@'}import.",
          },
          production: {
            title: "Applicazione in Produzione",
            desc: "La compressione CSS è fondamentale per l'ottimizzazione delle prestazioni frontend, utilizzata nei flussi di build di produzione (Webpack, Vite, Gulp), distribuzione CDN (riduzione costi trasferimento), ottimizzazione pagina (miglioramento punteggi PageSpeed) e sviluppo mobile (risparmio dati). Il CSS minificato richiede solitamente source map per il debug.",
          },
        },
      },
    },
  },
};
