let text=document.getElementById("input");
let btn=document.getElementById("draw");
let canvas=document.getElementById("can");

btn.addEventListener('click',()=>{
     
    var numberOfSides = (Number)(text.value);
    var size = 70;
    var Xcenter = 150;
    var Ycenter = 75;
    var cxt=canvas.getContext('2d');
    
    cxt.beginPath();
    cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
    
    for (var i = 1; i <= numberOfSides;i += 1) {
    cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }
    
    cxt.strokeStyle = "#000000";
    cxt.lineWidth = 1;
    cxt.stroke();

})










