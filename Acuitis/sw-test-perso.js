console.log("Service worker activé !")

self.addEventListener("install : ", event1 =>{
  console.log("Cycle de vie : installation", event1)
})

self.addEventListener("activate : ", event2 =>{
  console.log("Cycle de vie : activation", event2)
})

self.addEventListener("fetch", event3 =>{
  if(!navigator.online){
    const header = {header : {"content-type" : "text/html"}};
    event3.respondWith(new Response("<h1>Vous n'étes plus connecté a internet</h1>", header))
    console.log("Recuperation des requetes", event3.request.url)
  }
})