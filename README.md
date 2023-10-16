# Campo minato

**Struttura**
- richiamiamo dal DOM  l'elemnto padre GRID
che poi useremo in seguito dentro il pulsante (btn-play)

- richiamiamo nel DOM l'elemento BUTTON PLAY 

- aggiungo l'evento click del pulsante play

- IMPORTANTE con questo elemento rimuoviamo la griglia ogni volta che che premeremo il pulsante
" gridDomeElement.innerHTML = ''; "

 - IMPORTANTE con questa raga di codice andremo a rimuovere le classi oggni volta che cambiamo la sezione delle difficoltà " gridDomeElement.classList.remove('easy', 'medium', 'hard'); "

- richiamo dal DOM la la selezione delle difficoltà
 - inizializiamo una variabile per prenderci i valori delle difficoltà

- il nostro gioco avrà tre difficoltà:
    - SE è easy avrà:
        - 100 celle
        - lo sfondo sarà verde 
    - ALTRIMENTI SE è medium:
        - avrà 81 celle
        - colore sfondo blu 
    - ALTRIMENTI hard:
        - 41 celle
        - colore sfondo rosso

- Ogni cella quando verrà premuta dovrà cambiare il suo sfondo in un altro colore

**Funzionamento**
- per ogni livello di difficoltà ci saranno 16 bombe:
    - nella difficoltà 1 (easy) ce ne saranno 16 su 100
    - nella difficoltà 2 (medium) ce ne saranno 16 su 81
    - nella difficoltà 1 (hard) ce ne saranno 16 su 49

- le bombe dovranno essere posizionate in celle numerate in modo casuale,quindi faremo una funzione:
    - la funzione la chiameremo  getArrayOfRandomIntBetween, che parte del nome sta ad indicare una funzione già esistente per generare numeri randon con  un numero minimo e uno massimo (getRandomInt(min,max)) e la parte più importante un array che conterrà i 16 numeri casuali (bombe)
    - gli argomenti saranno 3:
        - minRange dove indicheremo il numero minimo della cella (1)
        - maxRange dove indicheremo il massimo della cella (100)
        - number dove indicheremo il numero delle caselle bomba

- inizialliziamo una varaibile array vuota chiamata bombsArray = []
- con un ciclo while riempiremo il nostro array 
    - inizializziamo una const n = che genererà un numero random da rangeMin a RangeMax 
    - dobbiamo togliere i numeri doppi dentro il nostro array,quindi:
        - SE il nostro array(includes)  contiene dei numeri doppi === false
        oppure si può usare (!bombArray.includes(n))
            - allora tutti i numeri diversi verranno inseriti nel nostro array
        - ALTRIMENTI se ci sono dei numeri doppi, verranno toltli e si ripeterà il ciclo per trovare numeri differenti

- SE il numero della casella è presente nell'array di bombe 
    - aggiungialo la classe bg-red
    - game over
- ALTRIMENTI
	- incrementiamo il punteggio
	- aggiungo la classe bg-blue
		- SE utente ha vinto
		- stampiamo hai vinto con il punteggio

