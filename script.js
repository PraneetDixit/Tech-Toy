document.body.onload = function(){
    if(window.devicePixelRatio> 1){
        document.body.classList.add("mob");
        document.getElementById("attribution").innerHTML = `
                                                                <span>Balancing Doll</span> by 
                                                                <a href="https://praneetdixit.me">
                                                                    Praneet Dixit
                                                                </a> <br> 
                                                                Click anywhere on the screen to make the doll dance
                                                            `;
    }
}

let angles = document.getElementsByClassName("ind");
let measures = [-35, -17.5, 0, 17.5, 35];
let expanation;

document.getElementById("togButton").addEventListener("click", function(e){
    if(e.target.checked){
        document.getElementById("doll").style.backgroundImage = "url('Img/ObjectEx2.png')";
        document.getElementById("rules").style.display = "flex";
        document.getElementById("action").style.paddingTop = window.devicePixelRatio>1 ? "50rem" : "25rem";
        document.getElementsByTagName("button")[0].style.display = "inline";
        document.getElementsByTagName("button")[1].style.display = "inline";
        expanation = true;
    }else{
        document.getElementById("doll").style.backgroundImage = "url('Img/Object.png')";
        document.getElementById("rules").style.display = "none";
        document.getElementById("action").style.paddingTop = window.devicePixelRatio>1 ? "60rem" : "30rem";
        document.getElementsByTagName("button")[0].style.display = "none";
        document.getElementsByTagName("button")[1].style.display = "none";
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
            document.getElementById("doll").style.backgroundImage = `url('Img/Object.png')`;
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
            },4000);
        }
    });
}
