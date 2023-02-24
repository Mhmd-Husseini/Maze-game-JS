document.addEventListener("DOMContentLoaded", function(event)
{
   const jboundary = document.getElementsByClassName('boundary')
   var jstatus = document.getElementById('status')
   var jstart = document.getElementById('start')
   var jend = document.getElementById('end')
   var jmaze = document.getElementById('game')
   var score=0
   g=0
   function lose(){
      if (g==1){
      for (i = 0; i < (jboundary.length-1); i++) {
         jboundary[i].classList.toggle('youlose')} 
      jstatus.innerHTML = "You Lose"
      score = score- 10
      jboundary[5].innerHTML = score
      g=0
   }}
   function win(){
      if (g==1){
      jstatus.innerHTML = "You Won"
      score = score+ 5
      jboundary[5].innerHTML = score
      g=0
   }}
   function reset(){
       score=0
       jboundary[5].innerHTML =0
       jstatus.innerHTML = "Begin by moving your mouse over the 'S'."
   }
   function play(){
      jstatus.innerHTML = "You Started!"
      for (i = 0; i < (jboundary.length-1); i++) {
         jboundary[i].classList.remove('youlose')}
         g=1
  }
  
   jmaze.addEventListener('mouseleave', function(){
         g=0
    })   
   for (i = 0; i < (jboundary.length-1); i++) {
      jboundary[i].addEventListener("mouseover", lose)}
   jend.addEventListener('mouseover', win)
   jstart.addEventListener('click', reset)
   jstart.addEventListener('mouseover', play)


        
   






})



