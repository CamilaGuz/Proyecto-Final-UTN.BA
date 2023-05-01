

let video=document.querySelector('video');
let play = document.getElementById("play");
let pause= document.getElementById("pause");


setTimeout(()=>{document.getElementById('duracion').innerHTML=` Duracion : ${video.duration.toFixed(2)}`},1000);


play.addEventListener('click',()=>{
    video.play()

   
});

pause.addEventListener('click',()=>{
    video.pause();
    flag=false;
});

