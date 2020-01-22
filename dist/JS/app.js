// ============================================== FUNCTIONS ==============================================
const changeColours = (colour) => {
    squares.forEach((currentSquare) => {
        currentSquare.style.backgroundColor = colour;
    });
}

const pickRandomColour = () => {
    let random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

const generateRandomColours = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColour());
    }
    return arr;
}

const randomColour = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const reset = () => {
    colours = generateRandomColours(numSquares);
    chosenColour = pickRandomColour();
    colourDisplay.textContent = chosenColour;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colours";
    squares.forEach((currentSquare, index) => {
        if (colours[index]) { 
            currentSquare.style.display = "block";
            currentSquare.style.backgroundColor = colours[index];
        }
        else {
            currentSquare.style.display = "none";
        } 
    });
    h1.style.backgroundColor = "steelblue";
}

const setupModeButtons = () => {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", (event) => {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            event.currentTarget.classList.add("selected");
            event.currentTarget.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

const setupSquares = () => {
    squares.forEach((currentSquare) => {
        currentSquare.addEventListener("click", (event) => {            
            let clickedSquareColour = event.currentTarget.style.backgroundColor;            
            if (clickedSquareColour === chosenColour) {
                messageDisplay.textContent = "CORREQUE";
                changeColours(clickedSquareColour);
                h1.style.backgroundColor = clickedSquareColour;
                resetButton.textContent = "Play Again";
            }
            else {
                event.currentTarget.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN"
            }
        });
    });
}
// ======================================================================================================

// ============================================== VARIABLES ==============================================
let numSquares = 6; 
let colours = []; 
let chosenColour;

const squares = document.querySelectorAll(".square");
const colourDisplay = document.querySelector("#colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
// ======================================================================================================


const init = () => {
    setupModeButtons();
    setupSquares();
    reset(); 
}

init();

resetButton.addEventListener("click", () => {
    reset();
});



