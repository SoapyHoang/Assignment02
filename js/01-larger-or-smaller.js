document.write('<h3>Larger or Smaller</h3>')

let num1 = parseFloat(prompt('Enter your first integer'))
let num2 = parseFloat(prompt('Enter your second integer'))
document.write('First Integer: ', num1, '<br>', 'Second Integer: ', num2, '<br>')

if (num1 > num2) {
    document.write('<br>', num1, ' is greater.')
}

if (num1 < num2) {
    document.write('<br>', num2, ' is greater.')
}

if (num1 == num2) { 
    document.write('<br> Your integers were equal')
} 

