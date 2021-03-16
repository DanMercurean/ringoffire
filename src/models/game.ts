export class Game {
    public players: string[] = ['Hans', 'Freddy','Peter'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    /**
     * 
     * shuffle the array before game start
     * 
     */
    constructor() {
        for (let i = 1; i < 14; i++) {
            // this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }
        shuffle(this.stack);
    }
}


 /* 
 *  Shuffle card stack
 *
 * @param array: array = stack
 *  
 * @returns shuffle card stack
 * 
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }