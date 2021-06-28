// variables
let pet, sadpet, happyPet,database;
let foodObj,foodS, foodStock;
let fedTime,lastTime,addFood;

addfoodBtn.addEventListener('click', () => {
	// Set winTime to the current value of seconds
	// Display a message in winMsg with min/sec of the win button press
})


feedBtn.addEventListener('click', ()=> {
	// Start a new timer
	// Reset winMsg HTML element 
})

// Start the timer when the page loads
startTimer()

function  preload()
    pet =
    sadPet = loadImage();
    happyPet = loadImage();
}

function setup(){
    database =firebase.database()
    createCanvas(1000,400);

    foodObj = new food();

    foodStock = database.ref('food');
    foodStock.on("value", readstock);

    pet = createsprite(800,200,150,150);
    pet.addImage(sadDog);
    pet.scale = 0.15;

    food = createButton("Feed the pet");
    feed.position(700,95);
    feed.mousePressed(feedPet);
    feed.mousePressed(feedPet);

    addFood = createButton ("Add Food");
    addFood.position(800,95);
    addFood.ousePressed(addFoods);
}
function draw(){
    background(46,130,87);
    foodObj.display();
    fedTime.database.ref('feedTime');
    fedTime.on("value", function(data){
        lastFed = dta.val();
    })

    Fill(255,255,254);
    textSize(15);
   
        if(lastFed >=12){
        text("Last feed:12am",350,30);
    }
    else if (lastFed == 0){
        text("last feed: 12am", 350,30)
    }
    else{
        text("Last Feed:  " + lastFed + "AM" ,350, 30);

    }

    drawSprites();

}
//function writestock
function writeStock(x){
    if(x<=0){
      x = 0;
    }
    else{
      x = x-1;
    }
    database.ref("/").update({
      Food:x
    });
  }
 //function to read stock
 function readStock(data){
     foodS = data.val();
     foodObj.updateFoodStock(foodS)
 }

 //function to update food stock and last fed time
 function feedPet(){
     pet.addImage(happyPet)

    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
    database.ref('/').update({
        food: foodObj.getFoodStock(),
        FeedTime : hour()
    })
 }

 //function to add food in stock
 function addFoods(){
     food++;
     database.ref('/').update({
         Food: foodS
     })
 }

 