const button = document.querySelector('#button');
// const form = document.querySelector('#inputForm');
// let formField = document.querySelector('#formField');
const showCard = document.querySelector('#showCard');
let fullUri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

// inputField.addEventListener('change', function(){
//     inputField = this.value;
//     console.log(this.value);
//     fullUri = `https://www.swapi.tech/api/people/?name=${this.value}`;
//     console.log(fullUri);
// })

// form['formField'].addEventListener('change', function () {
//     formField = this.value;
//     console.log(this.value);
//     fullUri = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
//     console.log(fullUri);
// })




// form['formButton'].addEventListener('click', getApi);

button.addEventListener('click', getApi);

function getApi() {
    /*Skriv din kod här*/
    // textArea.innerHTML = ('...Computing...')


    fetch(fullUri)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            const dataArray = data.cards;
            const cardImage = dataArray[0].image;

            console.log(cardImage);
            showCard.innerHTML = (`<img src="${cardImage}" alt="">`)

            

        })
        .catch(err => console.log(err))
}

