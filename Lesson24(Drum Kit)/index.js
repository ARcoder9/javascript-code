var numberofDrumButtons = document.querySelectorAll(".drum").length


for(var i =0; i<=numberofDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){   // Event listner have two input1 specify what event it is listen to and input2 specify what it should do once the event get detected.   
     console.log(this)   //here (this) is the identity of the button which trigger the event listner.
     var buttonInnnerHTML = this.innerHTML;

     switch (buttonInnnerHTML) {         // using switch case statements to add audio to specific buttons
       case "w":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

       case "a":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

       case "s":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

       case "d":
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;

       case "j":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;

       case "k":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;

       case "l":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;

       default: console.log(buttonInnnerHTML)
         break;
     }
});

}


