let s="    aashutosh kumar  "
console.log(s)
console.log(s.length)
let s2=s.trim()
console.log(s2)
console.log(s2.length)
console.log(s2.indexOf('a'))
console.log(s2.indexOf('k'))
console.log(s2.lastIndexOf('a'))
console.log(s2.charAt(5))
console.log(s2.charAt(2))
console.log(s2[3])
console.log(s2.slice(2))
console.log(s2.slice(2,8))
//convet simple into array
s="hii i am aashutosh kumar"
arr=s.split('  ')  //2 space de dena
console.log(arr)
for(const ele of arr){
    console.log(ele)
}



