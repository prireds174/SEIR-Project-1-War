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



Tracking:
-Number of cards each player has in possession
    -Loss of game is determined by complete lack of cards
-Which Player deals the higher card value
    -Set hierarchy of cards



*/
var suits = ["♠", "❤", "♣", "♦"]
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var playerDeck = []
var computerDeck = []

class Deck {
    constructor(cards = startingDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
    splitDeck (){
        for (let i = 0; i < 52; i++ ) {
            if (i % 2 == 0) {
                playerDeck.push(this.cards.pop())
            }else {
                computerDeck.push(this.cards.pop())
            }
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
    
    get color() {
        return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red'
    }
}
    

/*getDesign() {
    const holderDiv = document.createElement('div')
    holderDiv.innerText = this.suite
    holderDiv.classList.add("card", this.color)
    holderDiv.dataset.value = '${this.value} ${this.suit}'
    return holderDiv
    }*/



const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

deck.splitDeck()
console.log(playerDeck)
console.log(computerDeck)


