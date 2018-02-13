console.log('Hello World!')

//event listener
//document object model

let myBlock = document.getElementById ('myBlock')
console.log(myBlock)

//i take the docuument element which is tored in the 'myBlock' variable.
//i can efine the value of a variable as x function
myBlock.onclick = () => {
  console.log ('i clicked on the block')
}
