// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    let thankYouMessages = [];

    for (let i = 0; i < cards.length; i++) {
        let message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        thankYouMessages.push(message);
     debugger;
    }

    return thankYouMessages;
}
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

writeCards(["Guadalupe", "Ollie", "Aki"]);
