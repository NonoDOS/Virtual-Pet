// Pseudo Code


// Part 1.1
/*-------------------------------- Constants --------------------------------*/
// const functions = require('firebase-functions');

// const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

// const util = require('./utilities');
// const format = require('string-template');
// const Owner = require('./domain/owner');

const admin = require('./database');
const db = admin.firestore();
const ownerCollectionRef = db.collection('owners');//Audio
const DEFAULT_LIFE_SPAN = 5;
// const LEVEL_TWO = 2;
// const LEVEL_THREE = 3;
const PLAYED_BADGE_NAME = 'played badge';
const FED_BADGE_NAME = 'fed badge';
const RANDOM_FREQUENCY = 2;
const NICKNAME = 'Terry';

const {
  dialogflow,
  BasicCard,
  Image,
  Suggestions,
  Table,
  HtmlResponse,
} = require('actions-on-google');

const app = dialogflow({ debug: true });
class DatabaseError extends Error {
}
/*---------------------------- Variables (state) ----------------------------*/

 let

/*------------------------ Cached Element References ------------------------*/

const messageElement= document.getElementById('message')
const newGame= document.getElementById('newGame')
const board= document.getElementById('board')

/*----------------------------- Event Listeners -----------------------------*/ 
board.addEventListener("click",boardClick)
newGame.addEventListener("click",init)

/*-------------------------------- Functions --------------------------------*/


// 1) Choosing your Pet
// Print message “Choose the Pet of your favorite”?
prompt.window("choose the pet of your favorite")
// Available pets.            

// Types of Pet

let Pet1={
 ‘Photo’ : “.img”(egg),(imp)’baby”,(.img)adult
 ‘Name’: “user-input”
 ‘Age’ : “0”
 ‘Hungry’ : boolean
‘Happy’: boolean
 Phrases:”nomnomnom”,”yay”, “
    function(name)
    console.log(random(phrases))
}
let Pet2={
‘Photo’ : “.img”
‘Name’: “user-input”
 ‘Age’ : “0”
‘Hungry’ : boolean
‘Happy’: boolean
Phrases:”nomnomnom”,”yay”, “
    function(name)
    console.log(random(phrases))
}
let Pet3= {
‘Photo’ : “.img”
‘Name’: “user-input”
 ‘Age’ : “0”
‘Hungry’ : boolean
‘Happy’: boolean
Phrases:”nomnomnom”,”yay”, “
    function(name);
    console.log(random(phrases))
}
// Ask User's Name
app.intent('Default Welcome Intent - yes', (conv) => {
    const sound = `<audio src='https://actions.google.com/sounds/v1/foley/flipping_newspaper_pages.ogg'/>`;
    const spokenPrompt = 'That’s great, I’ll be helping you today. It’s nice to meet you. First things first, what’s your name that you’d like to put on the adoption form?';
    conv.ask(`<speak>${spokenPrompt}${sound}</speak>`);
    conv.ask(new HtmlResponse({
      data: {
        actions: ['CONFIRM_ADOPT']
      }
    }));
  });
  
  // Save User Name
  app.intent('Save name', async (conv, { name }) => {
    await registerOwner(conv, name);
    conv.ask(new HtmlResponse({
      data: {
        actions: ['SAVE_NAME']
      }
    }));
  });
  
  // Animate Stamp
  app.intent('Save name - yes', (conv) => {
  
    const pencilSound = `<audio src='https://actions.google.com/sounds/v1/foley/drawing_on_paper_with_charcoal.ogg'/>`;
  
    const petSound = `<audio src=''/>`;
  
    const spokenPrompt = 'That\'s great.  You seem qualified to continue with the adoption.  I\'m somewhat of a match maker when it comes to matching pets with the right owner, and I think I have the perfect pet for you.  They\'re cute, furry and ready to be your best friend.  Are you ready?';
    conv.ask(`<speak>${pencilSound}${spokenPrompt}${hamsterSound}</speak>`);
    conv.ask(new HtmlResponse({
      data: {
        actions: ['SHOW_STAMP']
      }
    }));
  });
  
  

// 2)Buying the Baby Egg

// 3)Naming the Pet
// Prompt message”Enter the name of your Pet”

  // Show Pet and Ask For Pet's Name
  app.intent('Save name - yes - yes', (conv) => {
    const sound = `<audio src='https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg'/>`;
    const spokenPrompt = 'The grand reveal! It\'s a `${petChoice}`, just for you.';
    const spokenPrompt2 = 'Now, this hamster needs a name.  What do you think the name should be?';
    conv.ask(`<speak>${spokenPrompt}${sound}${spokenPrompt2}</speak>`);
    conv.ask(new HtmlResponse({
      data: {
        actions: ['SHOW_HAMSTER']
      }
    }));
  });

// Part 2: Variables
// 1.move your pet pics to a variable
// 2.age=“0”
// 3.weight= “5”
// 4. hungry= true(boolean)
// 5.Happy=(boolean)
// 6.Print `hello, it’s is ${promptMessage)}`
//    Print name + ”weight” + str(weight) + “lbs”

// 7. If hungry:
//     Print “Your pet is hungry”
//     Else;
//     Print “Your pet *BURPS* loudly”

// 7. If happy:
//      Print “`${petName} is Happy”
//       Else;
//      Print “Your pet need a pat, a walk, to play”

// 8. If pet is unhappy or hungry , reduce the  lifeBar and (heath bar counter with the timer)
// fill the health level or lifeBar if it eats/  or got pats

// 9.Actions that make him happy : Likes
// 				   1) pat
// 				   2) walk
// 				   3) water
// 				   4) play
// 				   5) food\

// 10. Actions that make it unhappy , Dislike
// 				       1) no food/no play
// 				      2) Abuse(slap/kick/dirty water)
// 				      3)Neglect
// 				      4) Talk shit @#$%^&*

// 11. While loops … checking the specific condition continuously .

// Terminate = true 
//  While not terminate
// 	print “Nomnomnom”
// 	user-input = food-input(‘’)
//  If  User-input = “quit”
//            terminate=true
// Else user-input == “feed”

// Else if user-input === “stats”
// Else
// 	print”Sorry there is an error”
// Else if user-input == “play”
// 	print phrases[0]
// Else if user-input == “feed”
// 	print “nomnomnom”
// 	weight= weight + 1
// 	hungry = false
// 	.
// 	.	
//             .	
// Print “GoodBye!”

//  12. Feeding 

// Choosing the food: Two types 

// 13. Cleaning

// 14.Timer

// 15. Function to check LifeBar continuously

// 	The conditions(if statements)

// If the life bar is too low, the pet will die

// 16,  user-input related to Life Bar- for example feeding is +1, playing is +1, 

// 17. Count down — every 2 hours there would be -1 to his lifeBar(weight)

// 18. Every pet has a lifeBar interpreted as an integer 20 and the user-input has a direct relation to the lifeBar

// 19 Functions

// 	1)Function main

// 	2)Function checkStates(hungry? Happy? Tired?)

// 	3)Function counts(timer)- count -1 in life bar every 2 hours 

// 	4)Functions relating LifeBar -1 or +1 depends on  user input
	
// 	5) Functions for user inputs (more than one functions)






