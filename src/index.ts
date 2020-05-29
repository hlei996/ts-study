type Deck = NormalCard[]
type Color = "♥" | "♠" | "♦" | "♣"

type NormalCard = {
  color: Color
  mark: number
}

function createDeck():Deck {
  const deck:Deck = []
  for (let index = 1; index < 13; index++) {
    deck.push({
      mark: index,
      color: "♠"
    })
    deck.push({
      mark: index,
      color: "♣"
    })
    deck.push({
      mark: index,
      color: "♥"
    })
    deck.push({
      mark: index,
      color: "♦"
    })
  }
  return deck
}

function printDeck(deck:Deck) {
  let result = "\n"
  deck.forEach((card, index) => {
    let str = card.color;
    if(card.mark <= 10) {
      str+=card.mark
    } else if(card.mark === 11) {
      str += 'J'
    } else if(card.mark === 12) {
      str += 'Q'
    } else {
      str += 'K'
    }
    result += str + '\t'
    if((index + 1) % 6 === 0) {
      result += "\n"
    }
  })
  console.log(result)
}
