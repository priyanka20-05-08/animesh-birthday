let current = 1;

function next(n){
document.getElementById("screen"+current).classList.remove("active");
current = n;
document.getElementById("screen"+current).classList.add("active");
}

setTimeout(()=>{
next(2);
},2000);
