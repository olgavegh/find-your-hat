// Project Goals
// Build an interactive terminal game.
// The scenario is that the player has lost their hat in a field full of holes,
// and they must navigate back to it without falling down one of the holes or stepping outside of the field.
// Prerequisites - https://www.codecademy.com/article/getting-user-input-in-node-js

const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(fieldArray, playerPosition) {
    this.field = fieldArray;
    this.playerPosition = { x: playerPosition.x, y: playerPosition.y };
  }

  print() {
    console.log(" "); // field padding-top
    for (let row of this.field) {
      console.log(row.join(""));
    }
    console.log(" "); // field padding-top
  }

  hasWon() {
    const { x, y } = this.playerPosition;
    return this.field[y][x] === hat;
  }

  hasLost() {
    const { x, y } = this.playerPosition;
    return this.field[y][x] === hole;
  }

  static generateField() {
    console.log(
      "Welcome board ! Let`s play ! Please decide the properties of the game field."
    );
    console.log("To exit type 'exit' or 'break'.");
    // Capture user input - format to number
    let rows = Number(prompt("Rows: "));
    let cols = Number(prompt("Columns: "));
    let numHoles = Number(prompt("Holes: "));
    let numHat = 1;
    // Initialize an empty field array:
    const newField = Array.from({ length: rows }, () =>
      Array(cols).fill(fieldCharacter)
    );
    let playerPosition;

    // Function - Place elements randomly
    const randomElements = (num, charType, fieldArray) => {
      let lastGenerated;
      for (let i = 0; i < num; i++) {
        let elementX, elementY;
        do {
          elementX = Math.floor(Math.random() * fieldArray[0].length);
          elementY = Math.floor(Math.random() * fieldArray.length);
        } while (fieldArray[elementY][elementX] !== fieldCharacter);

        fieldArray[elementY][elementX] = charType;
        lastGenerated = { x: elementX, y: elementY };
      }
      return lastGenerated;
    };

    // Place holes randomly
    randomElements(numHoles, hole, newField);
    // Place hats randomly
    randomElements(numHat, hat, newField);
    // Set player position
    // Set player position randomly
    playerPosition = randomElements(1, pathCharacter, newField);
    // Update the class's field property
    return { newField, playerPosition };
  }

  playGame() {
    while (true) {
      // ----- Update the field -----
      this.print();
      // ----- from begin field ----

      let x = this.playerPosition.x;
      let y = this.playerPosition.y;

      // user input prompt
      // Update the player's position based on the user's input.
      // Mark the visited tile with *.

      // INPUT ---------------
      let isValidInput = false;
      let direction;

      // ----- validate the input -----
      while (!isValidInput) {
        direction = prompt("Enter your move: (WASD)");
        // Convert the input to uppercase for case-insensitivity
        direction = direction.toUpperCase();

        if (["W", "S", "A", "D"].includes(direction)) {
          isValidInput = true;
        } else if (["EXIT", "BREAK"].includes(direction)) {
          return false; // Indicate that the move was unsuccessful
        } else {
          console.log("Invalid input. Please enter W, A, S or D.");
        }
      }

      // Update the player's position based on the direction
      // Check for boundary conditions to ensure the player stays within the field
      if (direction === "W" && y > 0) {
        this.playerPosition.y--;
      } else if (direction === "S" && y < this.field.length - 1) {
        this.playerPosition.y++;
      } else if (direction === "A" && x > 0) {
        this.playerPosition.x--;
      } else if (direction === "D" && x < this.field[0].length - 1) {
        this.playerPosition.x++;
      } else {
        // Handle invalid move
        console.log("Invalid move. You can't move outside the field.");
      }

      // CHECK THE GAME CONDITION ---------------
      if (this.hasWon()) {
        console.log("Congratulations! You found your hat. You win!");
        break; // End the game
      }

      if (this.hasLost()) {
        console.log("Oh no! You fell into a hole. Game over!");
        break; // End the game
      }

      // PRINT CURRENT FIELD ---------------
      // ----- Mark the visited tile with * -----
      this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
    }
  }
}

// Example usage

const { newField, playerPosition } = Field.generateField();
const myField = new Field(newField, playerPosition);
myField.playGame();
