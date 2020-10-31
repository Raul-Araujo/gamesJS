
    const cardArray = [
        {
            name: 'kirk',
            img: 'images/kirk.jpg'
        },
        {
            name: 'kirk',
            img: 'images/kirk.jpg'
        },
        {
            name: 'enterprise',
            img: 'images/enterprise.jpg'
        },
        {
            name: 'enterprise',
            img: 'images/enterprise.jpg'
        },
        {
            name: 'piccard',
            img: 'images/piccard.jpg'
        },
        {
            name: 'piccard',
            img: 'images/piccard.jpg'
        },
        {
            name: 'spokAndKirk',
            img: 'images/spokAndKirk.jpg'
        },
        {
            name: 'spokAndKirk',
            img: 'images/spokAndKirk.jpg'
        },
        {
            name: 'starTrek',
            img: 'images/starTrek.jpg'
        },
        {
            name: 'starTrek',
            img: 'images/starTrek.jpg'
        },
        {
            name: 'starTrekBeyond',
            img: 'images/starTrekBeyond.jpg'
        },
        {
            name: 'starTrekBeyond',
            img: 'images/starTrekBeyond.jpg'
        }
    ]



// the board

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//creating the board
function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'images/cover.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard());
        grid.appendChild(card)
    }
}

//Random Selection
cardArray.sort(() => 0.5 - Math.random())


function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosenId[0] === cardsChosenId[1]){
        alert('You are damn right!')
        cards[optionOneId].setAttribute('src', 'images/coverBlank.png')
        cards[optionTwoId].setAttribute('src', 'images/coverBlank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cover.jpg')
        alert('Wrrrooooong!!!! Try Again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congrats! you have gotten all them!';
    }
}








function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkForMatch(), 500)
    }

}