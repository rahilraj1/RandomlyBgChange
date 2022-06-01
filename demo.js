const btn=document.querySelector(".main button");
const current=document.querySelector(".current");

const body=document.body;

function randomColor()
{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.floor(Math.random()*256));
    const color= `rgb(${red},${green},${blue})`;
    return color;
}
function clicked()
{
    console.log("Helloi")
     const random=randomColor();
     body.style.backgroundColor=random;
     current.textContent=randomColor();
}

btn.addEventListener("click",clicked);

