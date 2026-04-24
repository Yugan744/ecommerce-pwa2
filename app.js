function buyItem(product){
  alert(product + " added to cart!");
}

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js")
  .then(() => {
    console.log("Service Worker Registered");
  });
}