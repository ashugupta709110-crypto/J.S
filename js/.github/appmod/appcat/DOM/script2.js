 x = document.getElementById("ele1");
x.addEventListener("click", function(){
  x.style.color = "yellow";
  x.style.backgroundColor="red"
});
y=document.getElementById("ele2")
y.addEventListener("mousemove",function(){
    y.style.backgroundColor="green"
})
z=document.getElementById("ele3")
z.addEventListener("mouseleave",function(){
    z.style.color="skyblue"
})
y.addEventListener("mouseenter",function(){
    z.style.backgroundColor="green"
})