
    
    const cardArray = [
        {
            name: 'kirk',
            img: 'assets/images/kirk.jpg'
        },
        {
            name: 'kirk',
            img: 'assets/images/kirk.jpg'
        },
        {
            name: 'enterprise',
            img: 'assets/images/enterprise.jpg'
        },
        {
            name: 'enterprise',
            img: 'assets/images/enterprise.jpg'
        },
        {
            name: 'piccard',
            img: 'assets/images/piccard.jpg'
        },
        {
            name: 'piccard',
            img: 'assets/images/piccard.jpg'
        },
        {
            name: 'spokAndKirk',
            img: 'assets/images/spokAndKirk.jpg'
        },
        {
            name: 'spokAndKirk',
            img: 'assets/images/spokAndKirk.jpg'
        },
        {
            name: 'starTrek',
            img: 'assets/images/starTrek.jpg'
        },
        {
            name: 'starTrek',
            img: 'assets/images/starTrek.jpg'
        },
        {
            name: 'starTrekBeyond',
            img: 'assets/images/starTrekBeyond.jpg'
        },
        {
            name: 'starTrekBeyond',
            img: 'assets/images/starTrekBeyond.jpg'
        }
    ]

 
    cardArray.sort(() => 0.5 - Math.random())

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
        card.setAttribute('src', 'assets/images/cover.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card)
    }
}

    
    
    
    
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'assets/images/coverBlank.png')
        cards[optionTwoId].setAttribute('src', 'assets/images/coverBlank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'assets/images/cover.jpg')
        cards[optionTwoId].setAttribute('src', 'assets/images/cover.jpg')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congrats! you have gotten all of them!';
    }
}






//flipping card function

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 1500)
    }

}



createBoard()


