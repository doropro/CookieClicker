(function() {

  var affichage = document.getElementById("affichage").value;
  var clic = document.getElementById("clic").value;
  var score = 0;
  var multiplicateur = 1;
  var boost = 50;
  var autoclick;
  function echoMultiplicateur() {document.getElementById("mult").textContent= multiplicateur};
  function echoAffichage() {document.getElementById("affichage").textContent= score};


  document.getElementById("clic").addEventListener("click", function() {
      var y = score + multiplicateur;
      score = y;
      echoAffichage();
      echoMultiplicateur();
      if(score >= 200){
        setInterval(autoClick, 1000);
        var i = 0;
        function autoClick() {
          i++;
          alert("Hello!" + i);
        }
      };



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



})();
