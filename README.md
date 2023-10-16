# Campo minato

**struttura**
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