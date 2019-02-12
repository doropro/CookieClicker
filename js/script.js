var c = document.getElementById("etoiles"); // on appelle l'id canvas dans son script

var ctx = c.getContext("2d"); //on defini 2d ou 3d
			
		
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
var valueChrono=11;

// l'affichage est mis dans une fonction
function echoMultiplicateur() {document.getElementById("mult").textContent= multiplicateur};
function echoAffichage() {document.getElementById("affichage").textContent= "Score : " + score};
function chrono() {document.getElementById("echo_chrono").textContent= valueChrono};


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

/*
var flow = setInterval(loopflow, 100);

function loopflow() //loop global de la chute des étoiles
{ 
	var randomX = Math.floor(Math.random() * 845, 1); // création randomisée de coordonnées de l'axe X
	var randomY = Math.floor(Math.random() * 495, 1); // création randomisée de coordonnées de l'axe Y
	var speed = Math.floor(Math.random() * 70, 50); // création randomisée de la vitesse de chute du flocon	
	
	var velocity =0; //point initial du debut de la chute
	
	var flux = setInterval(star, speed);
	
	function star()
	{
		ctx.clearRect(0, 0, 850, 500); //efface la zone CANVAS
			
		velocity += 10; //intervalle entre 2 di
		
		var findY = randomY+velocity;		
			
			
		ctx.fillStyle = "white";
		ctx.fillRect(randomX, findY, 1, 20);
		
		
		if(findY >= 500)
		{
			clearInterval(flux);
		}
		
		console.log(findY);
	}

}
*/



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
var turbo = 4000 - score;




var speed = score;
if(speed >= 10){starLength = 10;}

var starLength = 2;
starLength += score;
if(starLength >= 30){starLength = 30;}

var starWidth;
if(starWidth <= 0){starWidth = 1;}



var flow = setInterval(loopflow, turbo );

function loopflow() //loop global de la chute des étoiles
{ 
	
		var randomX = Math.floor(Math.random() * 845, 1); // création randomisée de coordonnées de l'axe X
			var randomY = Math.floor(Math.random() * 495, 1); // création randomisée de coordonnées de l'axe Y
		
		var velocity =0; //point initial du debut de la chute
		
		var flux = setInterval(star, 150); // Ne pas toucher
		
		function star()
		{
			
		
			ctx.clearRect(0, 0, 850, 500); //efface la zone CANVAS
				
			velocity += 1; //intervalle entre 2 di
			
			var findY = randomY+velocity;		
				
				
			ctx.fillStyle = "white";
			ctx.fillRect(randomX, findY, 2, starLength);
			
			
			if(findY >= 500)
			{
				clearInterval(flux);
			}
			
			console.log(findY);
		}
}


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
		document.getElementById("autoclic").textContent= "Auto Click engaged for you 500€";
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
				document.getElementById("echo_chrono").style.fontSize = "70px"; // augmente la taille du chrono
				document.getElementById("bonus").style.backgroundColor = "grey"; // Changement couleur de fond 
				chrono(); // 

				
					if(valueChrono == 0)
					{

					multiplicateur -= tempMulti;
					
					
					clearInterval(x);
					document.getElementById("echo_chrono").style.fontSize = "20px"; // Rétablier taille initial des caratère 
					document.getElementById("bonus").style.backgroundColor = "#993333"; // revenir couleur d'origine 
					document.getElementById("echo_chrono").textContent= "200% 5000€";
					valueChrono = 11;
					bonnusStarted = false
			        }
		        }
			bonnusStarted = true;
			}
		}	
 	});

})();



