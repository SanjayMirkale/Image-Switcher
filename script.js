const nextbtn=document.getElementById("next");
const prevbtn=document.getElementById("previous");
const image=document.querySelector("img");

const images=[
    "images/images.jpeg",
    "images/images (1).jpeg",
    "images/images (2).jpeg",
    "images/images (3).jpeg",
    "images/image(4).jpg",
    "images/image(5).jpeg"
]

let index=0;
nextbtn.addEventListener("click",()=>{
    index++;
    if(index==6){
        index=0;
    }
    image.src=images[index];
});

prevbtn.addEventListener("click",()=>{
    index--;
    if(index<0){
        index=images.length-1;
    }
    image.src=images[index];
});

