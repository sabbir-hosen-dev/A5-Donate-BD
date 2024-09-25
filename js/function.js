

function sectionShow(value) {
  if (value) {
    document.getElementById("donate-wrap").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
    document.getElementById("donateBtn").classList.remove("btn-active");
    document.getElementById("donateBtn").classList.add("btn-normal")
    document.getElementById("historyBtn").classList.add("btn-active")
    document.getElementById("historyBtn").classList.remove("btn-normal")

    document.getElementById("history").classList.remove("hidden")
  } else {
    document.getElementById("donate-wrap").classList.remove("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donateBtn").classList.add("btn-normal")
    document.getElementById("historyBtn").classList.remove("btn-normal")
    document.getElementById("donateBtn").classList.remove("btn-normal")
    document.getElementById("historyBtn").classList.add("btn-normal")

    document.getElementById("history").classList.add("hidden")
  }
}

const currentDateTime = new Date();
const time = 'Date: '+ currentDateTime.toString();

function historyAdd (donate,selection){
  const createCard = `
    <div class="mb-5 border-2 border-gray p-4 rounded-lg">
      <p class="font-semibold mb-2">${donate} Taka is Donate for ${selection}</p>
      <p class="bg-[#1111110d] rounded-md p-1">${time} </p>
    </div>
  `
  const container = document.createElement('div');
  container.innerHTML = createCard;

  document.getElementById('history').appendChild(container.firstElementChild);

}



const donation = document.getElementById("donateBtn");
const history = document.getElementById("historyBtn");

donation.addEventListener("click", function(){
  sectionShow(false)
} )
history.addEventListener("click", function(){
  sectionShow(true) 
})

