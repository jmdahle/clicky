## Clicky Game

### About
Clicky is a memory game written using React components.  The Clicky game board has a number of image cards.  The player's goal is to click on each image card one time.  A point is awarded for the first time any image card is clicked.  But when an image card is clicked a second time, the game ends.  The game also ends if the player clicks all image cards (achieves the maximum score).  Before each turn, the game board is shuffled, significantly increasing the difficulty of winning the game!

### Installation
The Clicky app relies on Node.js to provide the web server, React to provide the renderer (React-DOM) and component architechture (React), and scripts to run, build, and test the React app.  See the Technical Notes section for information about the create-react-app package used to initialize this project. 

1. [Download](https://nodejs.org/en/download/) and install Node.js
2. Use the Node.js package manager - npm - to install the required Node.js packages.  Running ```npm install``` from the command line will install the following Node.js packages:
    * [react](https://www.npmjs.com/package/react)
    * [react-dom](https://www.npmjs.com/package/react-dom)
    * [react-scripts](https://www.npmjs.com/package/react-scripts)

### Usage
1. Run the server in development mode - in a terminal window at the project directory run ```npm start```
2. Open [http://localhost:3000](http://localhost:3000) in the browser to begin play.
3. Read the game instructions and click "Exit Instructions."  You can return to the instructions by selecting the "Instructions" link in the upper-left corner.
4. Your goal is to click each image card one time only.  The game ends if either you click an image card a second time or if you achieve the maximum score by clicking all image cards once.  To give your memory a workout, the image cards are shuffled after each click.
5. After the game ends, the hi-score is updated (if you exceeded it, of course) and you can start over.

### Technical Notes
1. The GameBoard component is the highest level parent compnent of the game (it is a child of App).  The game state is maintained in the GameBoard and passed to the child compnents through propeties passed to the (using props)
2. The GameBoard maintains the state of the game, including the image card array, player score, high score, and flags about the game state.
3. Conditions handles by Clicky:
    * Suspends the game (cannot click image cards) while a dialog is open
    * Immediate ends game when player hits the max score
    * GameOverDialog handles both win and lose conditions (passed details from GameBoard)
4. IMPORANT - the `master` branch on github is the COMPILED verison of the code (requirement to push to githubpages);  the `rawcode` branch is the3 ORIGNAL CODE.
    * Changes to code should be made in `rawcode` first and added/committed/pushed
        * In branch `rawcode`:
        * _`> git add -A`_
        * _`> git commit -a -m 'memo - ready to deploy'`_
        * _`> git push origin rawcode`_
    * Changes are copied into master using `git merge rawcode`
        * _`> git checkout master`_
        * _`> git merge rawcode`
    * Changes are compiled and deployed by running `npm run deploy` (from the master branch)
        * _`> npm run deploy`

### Resources
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts
In the project directory, you can run:
```bash
npm start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```bash
npm run build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

#### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

