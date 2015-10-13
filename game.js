
        var clickedTime; //time when user clicks on box
        var createdTime; // time when box is appears   
        var reactionTime; // seconds that pass between when the box is created and when it is clicked on




    function makeBox() {

        var time = Math.random(); //random value between 0 and 1
        time = time * 5000;       //changes var time to a random value between 0 and 5000

        setTimeout (function() {  //box appears after a certain amount of time
        document.getElementById("box").style.display="block"; //changing display:none to display:block makes the box appear

        createdTime = Date.now();

        ////////Make shape appear in random locations///////////////
        var top = Math.random();
        top = top * 500;
        var left = Math.random();
        left = left * 1000;
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.left = left + "px"; 
        ///////Make shape appear in random locations////////////////

        }, time); 


    }

        // function that makes the square disappear when the user clicks on it.
        document.getElementById("box").onclick=function(){
        document.getElementById("box").style.display="none";

        clickedTime = Date.now();
        reactionTime =  (clickedTime - createdTime)/1000;

        document.getElementById("yourTime").innerHTML=reactionTime; // prints the time between when the box was created and when it was clicked, by changing the innerHTML    

        
        makeBox(); // the box will reset and reappear once it is clicked.
        } 

        
        makeBox();