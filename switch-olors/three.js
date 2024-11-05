const btn=document.getElementById("color")
const bdy=document.getElementById("abcd")
const text=document.getElementById("para")

let arr=[{clr :"blue",txt:"blue"},{clr:"red",txt:"red"},{clr:"green",txt:"green"},{clr:"light blue",txt:"light blue"},{clr:"gray",txt:"gray"},{clr:"cyan",txt:"cyan"},{clr:"black",txt:"black"},{clr:"purple",txt:"purple"},{clr:"yellow",txt:"yellow"},{clr:"navy",txt:"navy"},{clr:"gold",txt:"gold"}]
var length=arr.length
btn.addEventListener("click", function abc(){
   let x = Math.floor(Math.random()*length);
   let y = arr[x].clr
   let z = arr[x].txt
    bdy.style.backgroundColor=y
    

   text.innerHTML=z
   text.style.fontSize="x-large"
   

});