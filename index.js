function getPeriod(date) {
    let hour= date.getHours();
    let sortPeriod = "";

    console.log(hour);

    if(hour > 20 || hour <= 4){
        sortPeriod = "Night Sort";
    } else if (hour > 4 && hour <=11) {
        sortPeriod = "Sunrise Sort";
    } else {
        sortPeriod = "Day Sort";
    }

    return sortPeriod;

}

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();  
      

     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss;

    let sortPeriod = getPeriod(date);
    document.getElementById("sortPeriod").innerText=sortPeriod;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
    return time;
  
  }

  function getZuluDate() {
    var date = new Date(); 
    // var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    // date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    let hh = date.getUTCHours();
    let mm = date.getUTCMinutes();
    let ss = date.getUTCSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss;

    document.getElementById("zuluClock").innerText = time; 
    var t = setTimeout(function(){ getZuluDate() }, 1000); 

    return time;
  }
  
  currentTime();
  getZuluDate();