# Struttura del proggetto

Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

Strutturiamo il global state in modo tale da tener ben definite le varie arree dove il codice andra inserito,al di la degli elementi base dati dallo scaffolding dell'inizializzazione di vite.
Al primo livello della cartella src e' presente il main.js che al suo interno conterra i vari import di tutti gli altri elementi della pagina ossia, createApp che stabilizza le basi per vue, App.vue che rappresenta l'estenzione di createApp e che al suo interno conterra tutti gli import dei componenti dedicati alla pagina, la cartella dei componets che divisi singolarmente permettono una suddivisione del codice piu' precisa e la cartella assets che conterra tutti i file dedicati al scss e contiene anche la cartella immagini che saranno compresse una volta caricato il sito.
Teniamo conto anche delle immaigni che non dovranno essere compresse e ci creaimo una cartella public che al suo interno conterra queste immagini

Predisponendo gli elementi del proggetto rispetto ai componenti futuri ci creaiamo due componenti AppHeader e AppMain che andreamo ad importare in App.

Inoltre creiamo un file Store.js per eventuali passaggi di dati tra i componenti padre e figlio.


