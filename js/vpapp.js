(function() {
    "use strict";
        
     document.addEventListener('DOMContentLoaded',function(){
         
         //Variables
             //Pet's stats are life, happiness, and hunger
         var ctMaxLife =       30,
             ctMaxHappiness =  30,
             ctMaxHunger =     30,
             
             ctCurLife =        ctMaxLife,
             ctCurHappiness =   ctMaxHappiness,
             ctCurHunger =      ctMaxHunger,
             
             intervalLife =    2000,
             intervalHappiness =   5000,
             intervalHunger =   3000,
             
                 //When vitamins fall below threshold, pet starts losing health(life)
             threshold =    ctMaxLife * 0.6,
             points =       2,
             widther =      4,
             
                 //When conditions are dangerous, affected stat bars will be hilited in red
             alive =		    true,
             dangerLife =       false,
             dangerHappiness =  false,
             dangerHunger =     false,
             
                 //Get meters to change width and border color
             getMtrLife =      document.getElementById('meterLife'),
             getMtrHappiness = document.getElementById('meterHappiness'),
             getMtrHunger=     document.getElementById('meterHunger'),
             
             getStyleLife =     getMtrLife.style,
             getStyleHappiness= getMtrHappiness.style,
             getStyleHunger =   getMtrHunger.style,
             bdrStart =		"1px solid ",
             
                 //Colors for meter borders
             clrDfltLife =  "#0b420b",  //green
             clrDfltHappiness =    "#ec8804",  //orange
             clrDfltHunger =    "#216ed3",  //blue
                 
             clrCurLife =       clrDflLife,
             clrCurHappiness =  clrDfltHappiness,
             clrCurHunger =     clrDfltHunger,
             
             clrWarn =      "#FF0040", //red
         
                 //Get buttons for click events
             getBtnPLay =  document.getElementById('btnPlay'),
             getBtnFeed =  document.getElementById('btnFeed'),
             
            //      Get eyes to express status
            //  getEyes =		document.getElementById('petEyes'),
            //  eyesOK =		"o....o",
            //  eyesSick = 	"@....@",
            //  eyesDead =		"x....x",
         
                 //Get style for the feedback div
              getStyleFb = 	document.getElementById('feedback').style;
             
        
         getStyleFb.display = 'none';
         meterWidth();
         
         //At set intervals, Happiness decreases.
         setInterval(function(){
             if(alive == true){
                    loseHappiness();
                    checkDangerHappiness();
             }
         },intervalHappiness);
         
         //At set intervals, Hunger decreases.
         setInterval(function(){
             if(alive == true){
                    loseHunger();
                    checkDangerHunger();
             }
         },intervalHunger);
         
         /*
         What happens in this nest:
         Health starts to drop if Happiness and Hunger are too low.
         Meter graphics are adjusted as applicable.
         If the pet is dead, then the ending events trigger.
         */
         setInterval(function(){
             
             meterWidth();
             checkDangerLife();
    
             //Adjust graphics
             if(dangerLife == true)
                 {
                    warnLife();
                    loseLife();  
                 }
             else
                 {
                    okLife();
                }
             
             if(dangerHappiness== true)
                 {
                     warnHappiness();      
                 }
             else
                 {
                     okHappiness();
                 }
         
             if(dangerHunger == true)
                 {
                     warnHunger();      
                 }
             else
                 {
                     okHunger();
                 }
         
         //When your pet runs out of health, it will be a gonner.
         if(ctCurLife< 0){
             alive = false;
         }
             
         if(alive == false)
            {
                ending();
            }
             
         },intervalLife);
    
    
         //Clicking on a "Play" button will restore Happiness and health to your pet.
         getBtnPlay.addEventListener("click",function(){
             if(alive == true){
                 if(ctCurHappiness + points <= ctMaxHappiness)
                     {
                        ctCurHappiness = ctCurHappiness + points;
                     
                        if(ctCurLife + points < ctMaxLife)
                            {
                                ctCurLife = ctCurLife + points;
                            }
                     
                        meterWidth();
                     
                        //Check conditions and adjust graphics as appropriate.
                        checkDangerLife();
                        checkDangerHappiness();
                        checkDangerHunger();
                     
                        if(dangerLife == false)
                        {okLife();}
                        if(dangerHappiness == false)
                        {okHappiness();}
                        if(dangerHunger == false)
                        {okHunger();}
                 }
             }
         });
         
         getBtnFeed.addEventListener("click",function(){
             if(alive == true){
                 if(ctCurHunger + points <= ctMaxHunger)
                    {
                        ctCurHunger = ctCurHunger + points;
                     
                        if(ctCurLife + points < ctMaxLife)
                            {
                                ctCurLife = ctCurLife + points;
                            }
                     
                        meterWidth();
                     
                        //Check conditions and adjust graphics as appropriate.
                        checkDangerLife();
                        checkDangerHappiness();
                        checkDangerHunger();
                     
                        if(dangerLife == false)
                            {okH();}
                        if(dangerHappiness == false)
                            {okVM();}
                        if(dangerHunger == false)
                            {okVR();}
                 }
             }
         });
         
         
         //Functions
         
         function meterWidth(){
             //This updates the width of the meters.
                getStyleLife.width = ctCurLife * widther + "px";	 
                 getStyleHappiness.width = ctCurHappiness * widther + "px";	 
                 getStyleHunger.width = ctCurHappiness * widther + "px";	 
         }
         
         function checkDangerHappiness(){
                     if(ctCurHappiness < threshold)
                        {
                            dangerHappiness = true;
                        }
                     else
                        {
                            dangerHappiness = false;	
                        }
         }
         
         function checkDangerHunger(){
                     if(ctCurHunger < threshold)
                        {
                            dangerHunger = true;
                        }
                     else
                        {
                            dangerHunger = false;	
                        }
         }
         
         function checkDangerLife(){
             if((ctCurHappiness < threshold || ctCurHunger< threshold)  && alive == true)
                 {
                     dangerLife = true;
                 }
             else
                 {
                     dangerLife = false;
                 }
         }
        
         function loseHappiness(){
             ctCurHappiness = ctCurHappiness - points;
         }
         
         function loseHunger(){
             ctCurHunger = ctCurHunger - points;
         }
         
         function loseLife(){
              ctCurH = ctCurH - points;        
         }
         
         function warnHappinesse(){
             getEyes.innerHTML = eyesSick;
             getStyleHunger.border = bdrStart + clrWarn;
         }
         
         function warnHunger(){
             getEyes.innerHTML = eyesSick;
             getStyleHunger.border = bdrStart + clrWarn;
         }
         
         function warnLife(){
             getEyes.innerHTML = eyesSick;
             getStyleLife.border = bdrStart + clrWarn;
         }
         
         function okHappiness(){
             getStyleHappiness.border = bdrStart + clrDfltVM;
         }
         
         function okHunger(){
             getStyleHunger.border = bdrStart + clrDfltHunger;
         }
         
         function okLife(){
             getEyes.innerHTML = eyesOK;
             getStyleLife.border = bdrStart + clrDfltLife;
         }
         
         function ending(){
             getEyes.innerHTML = eyesDead;
             getStyleFb.display = 'block';
         }
         
        });
        
    })();