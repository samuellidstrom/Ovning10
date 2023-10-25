const button = document.querySelector('#button');
const showCard = document.querySelector('#showCard');
let fullUri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

button.addEventListener('click', getApi);

function getApi() {
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            const dataArray = data.cards;
            const cardImage = dataArray[0].image;

            console.log(cardImage);

            let drawnCard = document.createElement('drawnCard')
            drawnCard.id = 'drawnCard';
            drawnCard.innerHTML = `<img src="${cardImage}" alt="">`

            showCard.innerHTML = ('');
            showCard.appendChild(drawnCard);

        })
        .catch(err => console.log(err))
}

