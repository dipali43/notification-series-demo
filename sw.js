// let cacheData = 'appV1';    
// this.addEventListener('install',(event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 '/static/js/main.chunk.js',
//                 '/static/js/0.chunk.js',
//                 '/static/js/bundle.js',
//                 '/index.html','/'
//             ])
//         })
//     )
// }) 
this.addEventListener("fetch",(event)=>{
    event.waitUntil(this.registration.showNotification('hello',{
        body: "hello from notification...dipali....2"
    }))
   
    if (!navigator.onLine){
        event.respondWith(
            catches.match(event.request).then((resp)=>{
                if(resp){
                    return resp;                
                }
                let requestUrl =event.request.clone();
                fetch(requestUrl);
            })
        )  
    }

})