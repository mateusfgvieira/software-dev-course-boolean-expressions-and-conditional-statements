/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasAmulet = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

//mountains
if (choice === "mountains" && hasTorch) { //has torch
  console.log("You safely navigate through the dark mountains.");
  console.log("As you navigate the mountains, you come across an abandoned shack.");
  const investigateShack = readline.question("Will you investigate the shack? ").toLowerCase();

  if (investigateShack === 'yes' || investigateShack === 'y' || investigateShack === 'investigate') { //investigate shack
    console.log('You decide to investigate the shack.');
    console.log(`The contents of the shack seem largely unremakable, but you poke around relentlessly.
Brushing away the dusty cobwebs, you spot something shiny tucked away in the corner--a sword! 
You grasp the sword in your hands. It's noticably fragile--good for maybe one solid swing.
Sword in hand, you continue up the mountain.`);
      hasSword = true;
  }

  console.log(`Your feet grow tired from climbing the jagged terrain.
You spot a rather comfortable looking rock and decide to rest your legs briefly before continuing...
As you rest, you spot movement out of the corner of your eye. A mountain lion!`);
  attackLion = readline.question('Attack the lion? ').toLowerCase();
    if (attackLion === 'y' || attackLion === 'yes' || attackLion === 'attack'){ //attack lion
      if (hasSword) {
        console.log(`You draw your sword, ready to strike the fearsome beast.
Summoning all your strength, you take a mighty swing and... miss!
The lion effortlessly dodges your clumsy attack, and your sword shatters against the rocky ground below. Oops!`);
        hasSword = false;
      } else {
        console.log(`You square up against the fearsome predator before you.
Do you really think you can take a lion in a fistfight? The lion certainly doesn't.`);
      }
      console.log(`The lion seems to scoff at your sad excuse to defend yourself.
With a look that can only be described as disappointment, he turns around and walks away.
A win is a win, I guess?`);
    } else { //don't attack lion
      console.log(`Pick your battles they say--preferably not against lions.
You stare cautiously at the lion, planning your escape when you notice it's carrying something in its mouth.
The lion drops the red shiny stone in front of you and walks away.
You pick up the strange amulet.`);
      hasAmulet = true;
    }
  

  console.log(`You continue your trek up the winding mountain, its peak slowly creeping into view.
Wow! What a beautiful view!
You take in the sights and begin your way back down the mountain.`);
  if (hasAmulet && hasSword){
    console.log(`As you arrive back at the base of the mountain, you inspect your newfound spoils.
You observe a small slot in the hilt of your sword just big enough for the mysterious amulet.
Finessing it into the slot, your sword begins to glow. Fancy! What a cool souvenir!`);
  } else if (hasAmulet && !hasSword){
    console.log(`As you arrive at the base of the mountain, you toss the amulet in your hands.
I bet this thing will sell for a pretty penny! Neat!`);
}


} else if (choice === "mountains" && !hasTorch) { //no torch
  console.log("It's too dark to proceed. You decide to turn back.");

//village
} else if (choice === "village" || hasMap) { //has map
  console.log("You find your way to the village.");
  const approachFigure = readline.question("The village air is musky and stale. In the distance, you see a figure. Approach? ").toLowerCase();
  if (approachFigure === 'y' || approachFigure === 'yes' || approachFigure === 'approach') {
    console.log(`Tentatively, you approach the figure.
A kind looking old lady turns to look at you.
Politely, she welcomes you to the village and offers to take you back to her house to discuss the its history.
Brimming with curiosity, you follow her back, but as you approach the worn down shack she calls home, a pit wells in your stomach.`);
  }
  console.log(`You've seen enough horror movies to know how this turns out.
You turn back and leave the ominous village before it's too late.`);
  } else {
  console.log("You get lost and wander aimlessly.");
  } //no map

