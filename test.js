const beats = document.querySelectorAll(".beat");
const sounds = document.querySelectorAll(".sound");
console.log(sounds);
const animationdiv = document.querySelector(".animation");
let colors =[ "blueviolet","burlywood","chocolate","crimson","cyan","green"];
console.log(colors);

//produce sound
beats.forEach((beat,index) =>{
    beat.addEventListener("click",()=>{
            sounds[index].currentTime = 0;
            sounds[index].play();
            createanimation(index);
    })
})



const createanimation = (index) =>{
    const div = document.createElement("div");
    div.classList.add("animationchild")
    animationdiv.appendChild(div);
    div.style.backgroundColor = colors[index];
    div.style.animation = `animate 1.1s ease-in-out`
    div.addEventListener("animationend",()=>{
        animationdiv.removeChild(div);
    })

}