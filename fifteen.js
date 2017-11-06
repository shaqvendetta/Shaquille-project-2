
var zeroT= '300px';
var zeroL='300px';


window.onload = function(){
  //var startTime = new Date();
 var shuf = document.getElementById("shufflebutton");
   shuf.addEventListener("click",rand);




          //Start the clock!
   // window.onbeforeunload = function()        //When the user leaves the page(closes the window/tab, clicks a link)...
    //{
     //   var endTime = new Date();        //Get the current time.
      //  var timeSpent=(endTime - startTime);        //Find out how long it's been.
        //alert(timeSpent);        //Pop up a window with the time spent in microseconds.
    //}



 var my = document.getElementById("puzzlearea");
 var tail = 300;
 var limb = 300;
 var up;
 var down;
 var block = my.children;
 var ttop = 0;
 var p = 0;
 var lol = 0;
 var brb = 0;
 
 
 for(var i=0; i < block.length; i++){
  
   block[i].setAttribute('class','puzzlepiece');
  block[i].style.top = ttop + "px";
  block[i].style.left = p + "px";
  block[i].style.backgroundPosition = lol + "px " + brb + "px";
  block[i].onclick= move;
  block[i].onmouseover= rightMove;

  if(p < 300){
   p = p + 100;
   lol = lol - 100;
  }
  else{
   p = 0;
   lol = 0;
   ttop = ttop + 100;
   brb = brb - 100;
  } 
 }
 function myStyle(top, left){
  for(var i =0; i < block.length; i++){
   if(block[i].style.top==top && block[i].style.left==left){
   var Shaq = block[i];  
    return Shaq;
   }
  }
 }

 function move(){
  
  up = parseInt(this.style.top);
  down = parseInt(this.style.left);
  if (up == tail && down == (limb-100) || up == tail && down == (limb+100) || up == (tail-100) && down == limb || up == (tail+100) && down == limb){
  
  
   this.style.top = tail + "px";
   this.style.left = limb + "px";
   tail = up;
   limb= down;
  }
  
 



 }
function rand () {
    var look = document.querySelectorAll("div#puzzlearea div");
    for ( var a = 0; a < 15; a++) {
        var y = Math.floor(Math.random() * 14 + 1  );
        var hightop = look[y].style.top;
        var currentleft = look[y].style.left;
       look[y].style.top = zeroT;
       look[y].style.left = zeroL;
        zeroT = hightop;
        zeroL = currentleft;
    }
}
 

 function rightMove(){
  up = parseInt(this.style.top);
  down = parseInt(this.style.left);
  if (up == tail && down == (limb-100) || up == tail && down == (limb+100) || up == (tail-100) && down == limb || up == (tail+100) && down == limb){
   $(this).addClass('movablepiece'); 
  }
  else{
   $(this).removeClass("movablepiece");
  }
 }

 document.getElementById("controls").onclick = rand; 

}
