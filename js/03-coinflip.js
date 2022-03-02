document.write('<h3>Coin Flip</h3>')

let randomNum = Math.round(Math.random() * 100);
let coinFlip = randomNum
console.log(randomNum)

let choice = prompt('Please select "Heads" or "Tails"')

if (choice != null) {
    if (randomNum <= 50) {
        console.log('Heads')
            if (choice.toLowerCase() == 'heads') {
                alert('The flip was heads and you chose heads...you win!')
            } else if (choice.toLowerCase() == 'tails') {
                alert('The flip was heads but you chose tails...you lose!')
            }
    }
    
    if (randomNum > 50) {
        console.log('Tails')
            if (choice.toLowerCase() == 'heads') {
                alert('The flip was tails but you chose heads...you lose!')
            } else if (choice.toLowerCase() == 'tails') {
                alert('The flip was tails and you chose tails...you win!')
            }
    }
}
