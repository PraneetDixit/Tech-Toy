let angles = document.getElementsByClassName("ind");
let measures = [-35, -17.5, 0, 17.5, 35];
let expanation;

document.getElementById("togButton").addEventListener("click", function(e){
    if(e.target.checked){
        document.getElementById("doll").style.backgroundImage = "url('Img/ObjectEx2.png')";
        document.getElementById("rules").style.display = "flex";
        document.getElementById("action").style.paddingTop = "25rem";
        expanation = true;
    }else{
        document.getElementById("doll").style.backgroundImage = "url('Img/Object.png')";
        document.getElementById("rules").style.display = "none";
        document.getElementById("action").style.paddingTop = "40rem";
        expanation = false;
    }
})

const squeez = new Audio("Sound/squeeze-toy-1.mp3");

for(let i = 4; i>-1; i--){
    angles[i].addEventListener("click", function(e){
        if(!expanation){
            if(i !== 2){
                squeez.play();
            }
            document.getElementById("toRotate").style.transform = `rotate(${measures[i]}deg)`;
            setTimeout(function(){
                document.getElementById("toRotate").style.transform = `rotate(0deg)`;
            },900);
            console.log(measures[i]);
        }else{
            document.getElementById("toRotate").style.transform = `rotate(${measures[i]}deg)`;
            document.getElementById("doll").style.backgroundImage = `url('Img/ObjectEx${i}.png')`;
            setTimeout(function(){
                document.getElementById("toRotate").style.transform = `rotate(0deg)`;
                document.getElementById("doll").style.backgroundImage = `url('Img/ObjectEx2.png')`;
            },3000);
        }
    });
}