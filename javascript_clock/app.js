let Name = prompt("Name : ");
let myName= document.querySelector("#name")
myName.innerHTML = `${Name.toUpperCase()}`


const update=(t)=>{
    if (t < 10) {
        return "0" + t;
      }
      else {
        return t;
      }
}
const clock=()=>{
    var date= new Date()
    var hour=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()

    hour=update(hour)
    min=update(min)
    sec=update(sec)
    
    document.querySelector("#clock").innerHTML= hour + ' : ' + min + ' : ' + sec

}

setInterval(clock, 1000); 
