 # Find Your Hat
 
 ![image](https://github.com/olgavegh/find-your-hat/assets/147725647/9e0178cb-d2c6-44aa-a8ed-d045099f837a)
![image](https://github.com/olgavegh/find-your-hat/assets/147725647/1d9cbd2f-0631-4e06-bb02-5825fcc59e04)




Welcome to Find Your Hat, an interactive terminal game where the
player has lost their hat in a field full of holes. Your goal is to
navigate back to your hat without falling into a hole or stepping
outside of the field.

## Project Overview

In this project, you'll be building a console-based game using
JavaScript, with a focus on creating a Field class to represent the
game field. The player's path is represented by '*' as they navigate
through the field filled with holes ('O'), a hat ('^'), and a
neutral background ('░').

## Setup Instructions

- Clone this repository to your local machine.
- Open the project folder in your preferred text editor.
- Make sure you have Node.js installed on your machine.

## How to Play

1. Run the game by executing the `main.js` file with Node.js.    `node main.js`    

2.  You will be prompted to set the properties of the game field, including the number of rows, columns, and holes. Follow the
instructions and decide the game's characteristics.
    
3.  Use the WASD keys to move the player through the field:
    
    -   'W' for up
    -   'A' for left
    -   'S' for down
    -   'D' for right
4.  The game will display the current state of the field after each move, marking the visited tiles with '*'.
    
5.  The game continues until one of the following conditions is met:
    
    -   You find your hat ('^') and win.
    -   You fall into a hole ('O') and lose.
    -   You type "exit" or "break".
6.  The game will display a message indicating whether you won or lost, and it will end.
    

## Project Structure

-   `main.js`: The main script to run the game.
-   `Field.js`: The Field class, responsible for representing and managing the game field.

Happy hat-finding!
