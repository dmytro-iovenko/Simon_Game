const buttonColors = ['red', 'blue', 'green', 'yellow'];

const gamePattern = [];

const nextSequence = () => {
    // generate a new random number between 0 and 3
    let randomNumber = Math.round(Math.random() * 3);
    // select a random color from the buttonColors array
    let randomChosenColor = buttonColors[randomNumber];
    // add the new randomChosenColor to the gamePattern
    gamePattern.push(randomChosenColor);
}