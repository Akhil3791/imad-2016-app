console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="this is from javascript";

var image=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    image.style.marginLeft=marginLeft +'px';
}
image.onclick=function(){
    var interval=setInterval(moveRight,50);
    
    
};

//button response
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
  
  counter=counter + 1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};