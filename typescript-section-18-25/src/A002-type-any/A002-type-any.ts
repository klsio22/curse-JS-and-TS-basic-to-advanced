//Usar tipo any apenas em ultimo caso
function showMessage(msg:any) {
  return msg
}

console.log(showMessage('Hello'))
console.log(showMessage(22))
console.log(showMessage(true))
