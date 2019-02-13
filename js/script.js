var c = document.getElementById("etoiles"); // on appelle l'id canvas dans son script
var ctx = c.getContext("2d"); //on defini 2d ou 3d

var fusee = c.getContext("2d"); //on defini 2d ou 3d

var terre = c.getContext("2d"); //on defini 2d ou 3d

			
		
(function()
{

var affichage = document.getElementById("affichage").value;
var clic = document.getElementById("clic").value;
var score = 0;
var multiplicateur = 1;
var boost = 50;
var autoclick;
var autoclickStarted=false;
var bonnusStarted=false;
var valueChrono=31;

// l'affichage est mis dans une fonction
function echoMultiplicateur() {document.getElementById("mult").textContent= multiplicateur};
function echoAffichage() {document.getElementById("affichage").textContent= "Score : " + score};
function chrono() {document.getElementById("echo_chrono").textContent= valueChrono};




function rocket(){
fusee.fillStyle = "white";
fusee.fillRect(410, 325, 10, 55);
fusee.fillRect(420, 300, 10, 70);
fusee.fillRect(430, 325, 10, 55);
fusee.fillStyle = "red";
fusee.fillRect(410, 380, 10, 10);
fusee.fillRect(420, 370, 10, 10);
fusee.fillRect(430, 380, 10, 10);
fusee.fillStyle = "white";
fusee.fillRect(410, 390, 10, 55);
fusee.fillRect(420, 380, 10, 80);
fusee.fillRect(430, 390, 10, 55);
fusee.fillStyle = "red";
fusee.fillRect(400, 420, 10, 40);
fusee.fillRect(390, 440, 10, 20);
fusee.fillRect(440, 420, 10, 40);
fusee.fillRect(450, 440, 10, 20);
fusee.fillStyle = "white";
fusee.fillRect(400, 390, 10, 35);
fusee.fillRect(390, 410, 10, 35);
fusee.fillRect(380, 420, 10, 35);
fusee.fillRect(370, 430, 10, 35);
fusee.fillRect(360, 400, 10, 65);

fusee.fillRect(440, 390, 10, 35);
fusee.fillRect(450, 410, 10, 35);
fusee.fillRect(460, 420, 10, 35);
fusee.fillRect(470, 430, 10, 35);
fusee.fillRect(480, 400, 10, 65);

fusee.fillStyle = "red";
fusee.fillRect(480, 400, 10, 10);
fusee.fillRect(360, 400, 10, 10);

fusee.fillStyle = "blue";
fusee.fillRect(450, 400, 10, 10);
fusee.fillRect(390, 400, 10, 10);
};

function image(){
	var img = new Image();
	img.src = 'img/terre.png';
	img.onload = function(){
	terre.drawImage(img, 60,600,750,250);
	}
};

/*
var ry = 0;


var flux = setInterval(star, 100);
	function star(){
	
	ctx.clearRect(0, 0, 850, 500);
			ry = ry +4;

		var randomX = Math.floor(Math.random() * 4, 1);

		ctx.fillStyle = "yellow";
		ctx.fillRect(100+randomX, 200+ry, 3, 3);
				console.log(ry);


}
*/

	
	
	
	
	
	
	
	
	
	
	
var randomXRec = [];
var randomYRec = [];


// Augmentation de 1€ à chaque click
document.getElementById("clic").addEventListener("click", function()
{
      score = score + multiplicateur;   
      echoAffichage();
      echoMultiplicateur();
      
      
/*-----Auto-click gratuit à 200€-----
	
      if(autoclickStarted==false)
      {
	      if(score >= 200)
	      {
	      setInterval(autoClick, 1000);
		      
		      function autoClick()
		      {
		      score = score +1;
		      echoAffichage();     
		      }
		      
	      autoclickStarted=true;
	      
	      }
      }
*/
	ctx.clearRect(0, 0, 850, 1000);

for (var iter = 1; iter <= 100; iter++)
	{
	var randomX = Math.floor(Math.random() * 850, 1);
	var randomY = Math.floor(Math.random() * 1000, 1);
	var randomSizeStar = Math.floor(Math.random() * 5, 1);

	randomXRec.push(randomX);
	randomYRec.push(randomY);
	
	ctx.fillStyle = "white";
	ctx.fillRect(randomX, randomY, randomSizeStar, randomSizeStar);
	}
	
	
image();

rocket();
});
// Augmentation du multiplicateur (booster)

document.getElementById("multiplicateur").addEventListener("click", function augmenterMultiplicateur()
{
	if(score >= boost)
	{
	multiplicateur = multiplicateur + 1;
	score = score - boost;
	boost = boost * 2;
	echoAffichage();
	echoMultiplicateur();
	document.getElementById("boostCost").textContent = boost;
	
	}
});

// lancement de l'auto click de 1€ par seconde pour un montant de ....
 document.getElementById("autoclic").addEventListener("click", function()
 	{
    if(autoclickStarted==false)
    {
	    if(score >= 10)
	    {
		score = score - 10;
		setInterval(autoClick, 1000);
		document.getElementById("autoclic").style.backgroundColor = "grey"; // Changement couleur de fond pour indiquer que l'autoClick a été enclanché
		document.getElementById("autoclic").textContent= "Auto Click \"ON\"";
		    function autoClick()
		    {
		    score = score +1;
		    echoAffichage();            
		    }
		    
		    autoclickStarted = true;
	    }
    }
    
	echoAffichage();
	
	});
	
// lancement du bonnus, pendant 30 seconde à chaque click le multiplicateur est multiplié par 2 donc 200%
document.getElementById("bonus").addEventListener("click", function()
	{
	    if(bonnusStarted==false)
		{
	       if(score >= 50)
	     	{
	     	 score = score - 50; // Le prix du bonnus est soustré du montant total
	     	 echoAffichage(); // Affiche le score moins le coût du bonus

		 	 var x = setInterval(bonus, 1000);
				
				var tempMulti = multiplicateur;
				multiplicateur *= 2; // le multiplicatuer est multiplié par deux pour avoir 200% 
		        
		        echoMultiplicateur();
		        function bonus()
		        {
				valueChrono = valueChrono-1;
				document.getElementById("echo_chrono").style.fontSize = "40px"; // augmente la taille du chrono
				chrono(); // 

				
					if(valueChrono == 0)
					{

					multiplicateur -= tempMulti;
					
					
					clearInterval(x);
					document.getElementById("echo_chrono").style.fontSize = "20px"; // Rétablier taille initial des caratère 
					document.getElementById("echo_chrono").textContent= "200% 5000";
					valueChrono = 31;
					bonnusStarted = false
			        }
		        }
			bonnusStarted = true;
			}
		}	
 	});
image();

})();



