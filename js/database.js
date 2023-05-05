window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
    if(!localStorage.getItem("personebank")){
        var persone = {
            login:"Ortega",
            mdp:"Ortega@123",
        }
        localStorage.setItem("connexion","1") // 1 => non | 2 => oui
        localStorage.setItem("personebank",JSON.stringify(persone))
    }else{
      var persone = {
        login:"Ortega",
        mdp:"Ortega@123",
    }
      localStorage.setItem("personebank",JSON.stringify(persone))
    }
  });

  if(localStorage.getItem("connexion")=== "2"){
    window.location.replace("./tableau-de-bord.html")
  }

  function connexion(){
    var pers = JSON.parse(localStorage.getItem("personebank"))
    var login = $('#login').val()
    var mdp = $('#mdp').val()
    if(pers.login === login && pers.mdp === mdp){
        console.log("connecté");
        localStorage.setItem("connexion","2") // 1 => non | 2 => oui
        window.location.replace("./tableau-de-bord.html")
    }else{
      Swal.fire({
        title: 'Échec!',
        text: "Nom d'utilisateur ou mot de passe incorrecte",
        icon: 'error',
        confirmButtonText: 'Quitter'
        })
        console.log("non");
    }
    console.log(pers);
  }
