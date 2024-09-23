function idToNumberConvert(id) {
  const item = document.getElementById(id).innerText;
  return parseFloat(item);
}

function sectionShow(value) {
  if (value) {
    document.getElementById("donate-wrap").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
    document.getElementById("donateBtn").classList.remove("btn-active");
    document.getElementById("donateBtn").classList.add("btn-normal")
    document.getElementById("historyBtn").classList.add("btn-active")
    document.getElementById("historyBtn").classList.remove("btn-normal")
  } else {
    document.getElementById("donate-wrap").classList.remove("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donateBtn").classList.add("btn-normal")
    document.getElementById("historyBtn").classList.remove("btn-normal")
    document.getElementById("donateBtn").classList.remove("btn-normal")
    document.getElementById("historyBtn").classList.add("btn-normal")
  }
}


function historyAdd (){
  
}



