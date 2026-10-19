x=document.getElementById("ele1")
x.addEventListener("mouseenter",function(){
     r=Math.floor(Math.random()*100)
    x.innerHTML=`<h1>${r}</h1>`
})
x.addEventListener("mouseleave",function(){
    x.innerHTML="<h1>1</h1>"
})

y=document.getElementById("ele2")
clr="green"
y.addEventListener('mouseenter',function(){
  
  if(clr=="green"){
    y.style.backgroundColor="green"
    clr="red"
  }
  else{
    y.style.backgroundColor="red"
    clr="green"
  }
})
y.addEventListener('mouseleave',function(){
    y.style.backgroundColor="white"
})

z=document.getElementById("ele3")
z.addEventListener("mouseenter",function(){
    p=Math.random()*250
    q=Math.random()*250
   r=Math.random()*250
z.style.backgroundColor=`rgb(${p} ${q} ${r})`
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor="white"
})

c=document.getElementById("ele4")
c.addEventListener("click",function(){
    j=Math.random()*250
      j1=Math.random()*250
        j2=Math.random()*250
        t=Math.random()*250
      t1=Math.random()*250
        t2=Math.random()*250
           u=Math.random()*250
      u1=Math.random()*250
        u2=Math.random()*250
    x.style.backgroundColor=`rgb(${j} ${j1} ${j2})`
    y.style.backgroundColor=`rgb(${t} ${t1} ${t2})`
    z.style.backgroundColor=`rgb(${u} ${u1} ${u2})`
})
c.addEventListener("mouseleave",function(){
      x.style.backgroundColor="white"
    y.style.backgroundColor="white"
    z.style.backgroundColor="white"
})
