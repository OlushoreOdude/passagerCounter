setInterval(myTimer, 1000);
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let mainCount = 0;
        let count = 0;
    let getId = document.getElementById("counter");
    let saveId = document.getElementById("save");

    function addF(){
      
      if (count === 0 && mainCount === 0){
        alert("welcome to the station, please count the passengers, don't worry if you make a mistake, just hit the decreas button");
        mainCount++;
        count++;
     getId.innerHTML = count;
      } else {
        mainCount++;
        count++;
     getId.innerHTML = count;
      }
     
    }
  
    function minusF() {
      mainCount--;
      count--;
      getId.innerHTML = count;
    }
    getId.innerHTML = count;

    function saveF() { 
    let countStr = count + " - "
    saveId.textContent += countStr
    getId.textContent = 0
    count = 0
  }
  
 


  function myTimer() {
  const d = new Date();
  let day =  weekday[d.getDay()];
  document.getElementById("demo").innerHTML = ` ${day} ${d.toLocaleTimeString()} ` ;
}

  function resetF() {
  //let stationNote = " previous entries "
  saveId.textContent = " previous entries: "
  getId.textContent = 0
  count = 0
  mainCount = 0
  alert('Please make sure The station is empty!!!');
}
