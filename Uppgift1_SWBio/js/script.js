const formButton = document.querySelector('#formButton');
const form = document.querySelector('#inputForm');
let formField = document.querySelector('#formField');
const textArea = document.querySelector('#textArea');
let fullUri;

// inputField.addEventListener('change', function(){
//     inputField = this.value;
//     console.log(this.value);
//     fullUri = `https://www.swapi.tech/api/people/?name=${this.value}`;
//     console.log(fullUri);
// })

form['formField'].addEventListener('change', function () {
    formField = this.value;
    console.log(this.value);
    fullUri = `https://www.swapi.tech/api/people/?name=${this.value}`;
    console.log(fullUri);
})




form['formButton'].addEventListener('click', getApi);

function getApi() {
    /*Skriv din kod här*/
    textArea.innerHTML = ('...Computing...')

    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const dataArray = data.result;
            const name = dataArray[0].properties.name
            const height = dataArray[0].properties.height
            const mass = dataArray[0].properties.mass
            const gender = dataArray[0].properties.gender
            const hairColor = dataArray[0].properties.hair_color

            console.log('------------------');
            console.log(name);
            console.log(height);
            console.log(mass);
            console.log(gender);
            console.log(hairColor);


            textArea.innerHTML = `Name: ${name}
Height: ${height} cm
Mass: ${mass} kg
Gender: ${gender}
Hair Color: ${hairColor}`

        })
        .catch(err => console.log(err))
}