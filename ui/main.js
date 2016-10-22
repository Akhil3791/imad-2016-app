// console.log('Loaded!');
// var element = document.getElementById('main-text');
// element.innerHTML="this is from javascript";

// var image=document.getElementById('madi');
// var marginLeft=0;
// function moveRight(){
//     marginLeft = marginLeft+1;
//     image.style.marginLeft=marginLeft +'px';
// }
// image.onclick=function(){
//     var interval=setInterval(moveRight,50);
    
    
// };

//button response
var button=document.getElementById('counter');

button.onclick=function(){
  
  var request = new XMLHttpRequest();
  request.onreadystatechange=function(){
      
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
      }
  };
  
 request.open('GET','http://akhil3791.imad.hasura-app.io/counter',true);
 request.send(null);
  
};