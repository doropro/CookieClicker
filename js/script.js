(function() {

  var affichage = document.getElementById("affichage").value;
  var clic = document.getElementById("clic").value;
  var score = 0;
  var multiplicateur = 1;
  var boost = 50;
  var autoclick;
  var autoclickStarted=false;

  function echoMultiplicateur() {document.getElementById("mult").textContent= multiplicateur};
  function echoAffichage() {document.getElementById("affichage").textContent= score};


  document.getElementById("clic").addEventListener("click", function() {
      score = score + multiplicateur;
      
             
      echoAffichage();
      echoMultiplicateur();
      
/*-----Auto-click gratuit à 200-----
      if(autoclickStarted==false){
      if(score >= 200){
        setInterval(autoClick, 1000);
        function autoClick() {
        score = score +1;
        echoAffichage();        
        
        }
        autoclickStarted=true;
      }
      }
*/
	  


  });


  document.getElementById("multiplicateur").addEventListener("click", function augmenterMultiplicateur() {
  if(score >= boost){
    multiplicateur = multiplicateur + 1;
    score = score - boost;
    boost = boost * 2;
    echoAffichage();
    echoMultiplicateur();
    document.getElementById("boostCost").textContent= boost;


  }
  });
  
  document.getElementById("autoclic").addEventListener("click", function() {
  
  echoAffichage();
      if(autoclickStarted==false){
      if(score >= 10){
	    score = score - 10;
        setInterval(autoClick, 1000);
        function autoClick() {
        score = score +1;
        echoAffichage();        
        
        }
        autoclickStarted=true;
      }
      }

 });
document.getElementById("bonus").addEventListener("click", function() {
  
  		echoAffichage();
     if (score >= 50){
	     score = score - 50;
	     
     }
     
     

 });


})();