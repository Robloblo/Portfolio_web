window.addEventListener("load", function() {
    //Math.floor(Math.random() * 10) Utile pour faire un random entier entre 0 et 10      
});

let carteHtml = document.querySelector(".skillHtml");

carteHtml.addEventListener("mousemove", function(event){
  
  var rect = carteHtml.getBoundingClientRect();
  var maSourisX = Math.round((event.clientX - rect.left) / carteHtml.clientWidth * 100) ;
  var maSourisY = Math.round((event.clientY - rect.top) / carteHtml.clientHeight * 100) ;

  let boulle = carteHtml.querySelector("div");

  let calculX = -2.5 - (1*(100-maSourisX)/100);
  let calculY = -5.5 + (1*(100-maSourisY)/100);
  
  boulle.style.left= calculX + "em";
  boulle.style.bottom= calculY + "em";
})


let carteCss = document.querySelector(".skillCss");

carteCss.addEventListener("mousemove", function(event){
  
  var rect = carteCss.getBoundingClientRect();
  var maSourisX = Math.round((event.clientX - rect.left) / carteCss.clientWidth * 100) ;
  var maSourisY = Math.round((event.clientY - rect.top) / carteCss.clientHeight * 100) ;

  let boulle = carteCss.querySelector("div");
  
  let calculX = 1 + (1*(100-maSourisX)/100);
  let calculY = -5.5 + (1*(100-maSourisY)/100);
  
  boulle.style.right= calculX + "em";
  boulle.style.bottom= calculY + "em";
})


let carteJavaScript = document.querySelector(".skillJavascript");

carteJavaScript.addEventListener("mousemove", function(event){
  
  var rect = carteJavaScript.getBoundingClientRect();
  var maSourisX = Math.round((event.clientX - rect.left) / carteJavaScript.clientWidth * 100) ;
  var maSourisY = Math.round((event.clientY - rect.top) / carteJavaScript.clientHeight * 100) ;

  let boulle = carteJavaScript.querySelector("div");
  
  let calculX = -3.5 + (1*(100-maSourisX)/100);
  let calculY = -5.5 + (1*(100-maSourisY)/100);
  
  boulle.style.right= calculX + "em";
  boulle.style.bottom= calculY + "em";
})