class food{
    constructor(){
        this.foodstock = 0;
        this.image = loadImage("images/food.jpg")
        this.lastFed;
    }

    updatedfoodStock(foodStock){
        this.foodstock = foodStock
    }

    getFedTime(lastFed){
        this.lastFed = lastFed;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display(){
        let x=80, y=100;
        ImageBitmapRenderingContext(Center);
        this.image(this.image,720,220,70,70);

        if(this.foodStock !=0){
            for(let i=0;i<this.foodStock; i++){
                if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50):
            x=x+30;
        }
    }
}