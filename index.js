const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
  let result = []
  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return result;
}
writeCards(names);

function countDown() {
let i = 10;
while (i > -1)
  console.log(i--);
}