console.log('BOOM!!')
//Pseudocode
/* Objects
-Cards
-New Game Button
-Reset Button
-Game Title Header
-Player Turn Indicator
-Winner
-Card in Hand Counter



Actions(functions)
-The shuffling of cards.
    -Shuffling happens in both the beginning and also when readmitting cards to pile
-The dealing of cards 
-Have cards set up to respond to click action >>> flipping over to reveal 
-Action of declaring war when similar cards are choosen
    -Three Cards are placed face-down, then the 4th card is placed face-up.



Tracking:
-Number of cards each player has in possession
    -Loss of game is determined by complete lack of cards
-Which Player deals the higher card value
    -Set hierarchy of cards



*/


/*function clickEvent(){
    console.log("Close, yet very far");
}*/

const suits = ["♠", "❤", "♣", "♦"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", 
"9", "10", "J", "Q", "K"]

/* const because it variables cannot be reassigned, but variable should be used for older browsers*/

class Deck {
  constructor(cards = startingDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}


class Card {
    constructor(suit, value) {
      this.suit = suit
      this.value = value
    }
  
    get color() {
      return this.suit === "♣" || this.suit === "♠" ? "black" : "gold"
    }
  
    getCard() {
      const cardDiv = document.createElement("div")
      cardDiv.innerText = this.suit
      cardDiv.classList.add("card-selected", this.color)
      cardDiv.dataset.value = `${this.value} ${this.suit}`
      return cardDiv
    }
  }

function startingDeck () {
    return suits.flatMap (suit => {
        return values.map (value => {
            return new Card (suit, value)
        })
    })
}

const cardValues = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
}


//Computer Elements
const computerCardSlot = document.querySelector('.computer-card-slot')

const computerDeckFill = document.querySelector('.computer-deck')

//Player Elements
const playerCardSlot = document.querySelector('.player-card-slot')

const playerDeckFill = document.querySelector('.player-deck')

//Misc. Elements
const winLoseText = document.querySelector('.win-lose-text')

let computerDeck, playerDeck, inGame, stop

document.getElementById("startGame").addEventListener("click", () => {
  if (stop) {
    startGame()
    return
  }

  if (inGame) {
    cleanBeforeRound()
  } else {
    flipCards()
  }
})


startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inGame = false
  stop = false

  cleanBeforeRound()

}

function cleanBeforeRound() {
  inGame = false
  computerCardSlot.innerHTML = ""
  playerCardSlot.innerHTML = ""
  winLoseText.innerText = ""

  updateDeckCount()
}

function flipCards() {
  inGame = true

  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  playerCardSlot.appendChild(playerCard.getCard())
  computerCardSlot.appendChild(computerCard.getCard())

  updateDeckCount()

  if (isRoundWinner(playerCard, computerCard)) {
    winLoseText.innerText = "Win"
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
  } else if (isRoundWinner(computerCard, playerCard)) {
    winLoseText.innerText = "Lose"
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)
  } else {
    winLoseText.innerText = "Draw"
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }

  if (isGameOver(playerDeck)) {
    winLoseText.innerText = "You Lose!!"
    stop = true
  } else if (isGameOver(computerDeck)) {
    winLoseText.innerText = "You Win!!"
    stop = true
  }
}

function updateDeckCount() {
  computerDeckFill.innerText = computerDeck.numberOfCards
  playerDeckFill.innerText = playerDeck.numberOfCards
}

function isRoundWinner(cardOne, cardTwo) {
  return cardValues[cardOne.value] > cardValues[cardTwo.value]
}

function isGameOver(deck) {
  return deck.numberOfCards === 0
}


/* Things I learned
The Math.ceil() function always rounds a number up to the next largest integer. so if there was a number such as 21.6, it would round it up to 22. 
The slice() method returns a copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array. unless you state where you want to grab information from. For example my two decks grab info from the 0 point on the array to the midpoint for the first deck and for the second deck it grabs from the midpoint to the last card in the given deck.
Shift will remove the first element. pop removes the last element in the array.*/


    /*const deck = new Deck()
    deck.shuffle()
    console.log(deck.cards)*/






/*deck.splitDeck()
console.log(playerDeck)
console.log(computerDeck)*/
 
//setting an element to the slot

//





/*function startGame() {*/
    
    /*deck.splitDeck()
    console.log(playerDeck)
    console.log(computerDeck)
    
    /*beforeRound()*/

    










