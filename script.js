const words=[
"Software Engineer",
"Web Developer",
"AI Enthusiast",
"Android Developer",
"Robotics Developer",
"Problem Solver"
];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").innerHTML=current.substring(0,j--);

}else{

document.getElementById("typing").innerHTML=current.substring(0,j++);

}

if(!isDeleting && j===current.length+1){

isDeleting=true;

setTimeout(type,1000);

return;

}

if(isDeleting && j===0){

isDeleting=false;

i++;

if(i===words.length){

i=0;

}

}

setTimeout(type,isDeleting?50:120);

}

type();

function scrollToSection(){

document.getElementById("about").scrollIntoView({
behavior:"smooth"
});

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

observer.observe(sec);

});