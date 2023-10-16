// console.log('ciao')

// richiamiamo l'elemento grid dal dom 
const gridDomeElement = document.querySelector('.grid');
// console.log(gridDomeElement);


//richaimo l'elemento button play dal DOM
const btnPlayDomElement = document.getElementById('btn-play');

// aggiungo l'evento click del pulsante play
btnPlayDomElement.addEventListener('click', function () {
    // console.log('click')

    // cancello le celle precedenti
    gridDomeElement.innerHTML = '';

    // rimuovo le classi precedenti ,al grid delle cell LUNGHEZZA
    gridDomeElement.classList.remove('easy', 'medium', 'hard');

    
    // richiamo dal dom il body
    const bodyDomElement = document.querySelector('body')
    console.log(bodyDomElement)

    // rimuovo le classi precedenti ,al body delle cell BG COLOR
    bodyDomElement.classList.remove('bg-green','bg-blue','bg-red')

    //richiamo dal DOM la la selezione delle difficoltà
    const difficultyDomElement = document.getElementById('difficulty');
    // console.log(difficultyDomElement)
    let difficultyValue = difficultyDomElement.options[difficultyDomElement.selectedIndex].value;
    console.log(difficultyValue);

    // inizializiamo una varabile che co servirà per il conteggio delle cell
    let numberCell = -1

    // tramite la selezione del ciclo cambierà la difficoltà
    // ogni sezione delle difficoltà avrà numero di celle differenti
    if (difficultyValue == 0) {
        // nella difficoltà EASY ne avrò 100 con una width: calc(100% /10)
        numberCell = 100;
        gridDomeElement.classList.add('easy');
        bodyDomElement.classList.add('bg-green')
    } else if (difficultyValue == 1) {
        // nella difficoltà MEDIUM ne avrò 81 con una width: calc(100% /9)
        numberCell = 81
        gridDomeElement.classList.add('medium');
        bodyDomElement.classList.add('bg-blue')
    } else {
        // nella difficoltà HARD ne avrò 49 con una width: calc(100% /7)
        numberCell = 49
        gridDomeElement.classList.add('hard');
        bodyDomElement.classList.add('bg-red')
    }

    // usiamo il ciclo for per ricavare i numeri da 1 a 100
    // che metteremo nelle celle
    for (let i = 0; i < numberCell; i++) {
        const n = i + 1;
        // console.log(n)

        // inizializziamo una costante dove creeremo dei div nel DOM(html)
        const htmlcell = `<div class="cell">${n}</div>`
        // console.log(htmlcell);

        // importiamo i div creati nel dom
        gridDomeElement.innerHTML += htmlcell;

    }

    // recupero tutte celle create
    const cellDomElements = document.querySelectorAll('.cell');
    // console.log(cellDomElements);

    // creo un arrei con gli elementi delle cell
    for (let i = 0; i < cellDomElements.length; i++) {
        const currentCellElement = cellDomElements[i];
        // console.log(currentCellElement);

        // ogni elemento avrà l'evento click
        currentCellElement.addEventListener('click', function () {
            currentCellElement.classList.add('bg-light-blue');
        })

    }


})