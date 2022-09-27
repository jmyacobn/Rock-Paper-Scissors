
# Rock-Paper-Scissors: Elements of Nature

### Abstract:
Using HTML, CSS, and JavaScript, I built a fully playable web-based Rock, Paper, Scissors game from scratch! I built the game so that one person can play against the computer, and I built it to reset after seven rounds. You can play the classic version with three fighter choices, or the deluxe game, which includes five fighter choices, and even toggle between the class and deluxe. Instead of rock, paper, scissors, I chose an Elements of Nature theme that includes earth, water, fire, wind, and my adorable cat, Otis!

### Installation Instructions:
- Clone [this repo](https://github.com/jmyacobn/Rock-Paper-Scissors) to your local computer.
- Open in your text editor.
- Read the `README.md`.
- In the terminal, run the command `open index.html` for initial deployment and interaction with app.

### Preview of App:
[Video preview of app!](https://www.loom.com/share/e1233ac894af477c9a630d529159a9a8)

You can play Rock, Paper, Scissors: Elements of Nature [here]().

### Context:
Rock-Paper-Scissors was completed during our fifth week at Turing and served as the final capstone project for Mod 1. We were given a full week to complete this project while balancing classes, professional development, other assignments, and our final assessment. The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo-v2.html).

### Contributors:
Jennifer Yacoubian ([GitHub](https://github.com/jmyacobn), [LinkedIn](https://www.linkedin.com/in/jennifer-yacoubian/))

### Learning Goals:
- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Technology Used
- Atom
- HTML
- CSS
- Chrome Dev Tools
- JavaScript
- Github

### Wins and Challenges:
My greatest win was building a game that was completely playable in the console prior to updating the DOM! All of the game logic exists exclusively in the data model. Throughout this inning, I have grappled with the concept of the data model vs. the DOM, and with each project, I progressed in my understanding, but this one really solidified for me what it means to have DOM manipulation rely on the data model. Event propagtion is another concept with which I have been grappling during this inning, and this project helped me to solidify my understanding as I worked independently to make sense of it and recognize when I need to use it.

My greatest challenge was adding the extension of the game reset after one player reaches seven wins. I thought it would be as easy as adding in a simple conditional. While that was the case, what I did not anticipate was having to change some of my other pieces of code and breaking up some of my other funcitons and event handlers into two smaller ones. I also had to make some adjustments to styling. Another challenge that I encountered was how to display the selected fighters on the DOM without many lines of code. I eventually accomplished this by ensuring the file name matched the name of the fighter choices and id name for the images, so I was able to create dynamic code for this in lines 90-92 of my main.js; however, I would like to see others' apporaches this.

### Future Features:
- Add local storage so that both player and computer wins are stored locally and persist upon page refresh
- Add a celebration page with a final scoreboard when a player reaches seven wins before the game resets
- Create a way for the player to choose their own icon or token instead of the default
