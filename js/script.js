var c = document.getElementById("etoiles"); // on appelle id canvas dans son script

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

// l'affichage est mise dans une fonction
function echoMultiplicateur() {document.getElementById("mult").textContent= multiplicateur};
function echoAffichage() {document.getElementById("affichage").textContent= score + " €"};
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


if(score <= 1 )
{
	for (var iter = 1; iter <= 500; iter++)
		{
		var randomX = Math.floor(Math.random() * 850);
		var randomY = Math.floor(Math.random() * 500);
			
		randomXRec.push(randomX);
		randomYRec.push(randomY);
		
		ctx.fillStyle = "yellow";
		ctx.fillRect(randomX, randomY, 5, 5);
		}
}
else
{	
	var ry = 0;
	var flux = setInterval(star, 10);
	function star(){
	
	ctx.clearRect(0, 0, 850, 500);
			ry = ry +10;
	
	for (var iter = 1; iter <= randomXRec.length; iter++)
		{
		var findX = randomXRec[iter];
		var findY = randomYRec[iter];
			
		ctx.fillStyle = "blue";
		ctx.fillRect(findX+2, findY+ry, 3, 3);
	}
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



