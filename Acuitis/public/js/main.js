

/* //Creation du service worker 
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js")
                            .then(
                              function(registration){
                                console.log("enregistrement bien réussi ! scope : " + registration.scope)
                              },
                              function(err){
                                console.log("Détail de l\'erreur : " + err)
                              }
                            )
  }
*/