
var tID; //we will use this variable to clear the setInterval()


function stopAnimate() {

clearInterval(tID);
//document.getElementById("image").style.visibility = `hidden`;

} //end of stopAnimate()

function animateScript() {

var    position = 138; //start position for the image slicer
const  interval = 50; //40 ms of interval for the setInterval()

tID = setInterval ( () => {

//document.getElementById("image").style.visibility = `visible`;
document.getElementById("image").style.backgroundPosition =
`-${position}px 0px`;

if (position < 414)
{ position = position + 138;}
//we increment the position by 138 each time
else
{ position = 138; }
//reset the position to 256px, once position exceeds 1536px

}
, interval ); //end of setInterval

} //end of animateScript()
