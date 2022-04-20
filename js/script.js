var elSelect = document.querySelector(".select");
var elInput = document.querySelector(".in-number");
var elButton = document.querySelector(".button");
var elOutput = document.querySelector(".output");
var Refresh = document.querySelector(".refreshBtn");
var elHeading = document.querySelector(".heading");

var universitys = ["Valiutani tanlang !!!","SUM", "Ruble", "AQSh dollor"];


for (university of universitys) {
  var newOption = document.createElement("option")
  newOption.textContent = university;
  elSelect.appendChild(newOption)
}

elInput.style.fontSize = "24px";
elInput.style.width = "180px";
elInput.style.marginLeft = "100px";
elInput.style.marginTop = "50px";

elSelect.style.fontSize = "24px";
elSelect.style.width = "320px";
elSelect.style.marginLeft = "50px";

elButton.style.fontSize = "24px";
elButton.style.marginLeft = "50px";

Refresh.style.fontSize = "24px";
Refresh.style.marginLeft = "200px";

elOutput.style.display = "block";
elOutput.style.marginTop = "100px";
elOutput.style.marginLeft = "100px";
elOutput.style.fontSize = "50px";
elOutput.style.color = "blue";

elHeading.style.textAlign = "center";
elHeading.style.fontSize = "60px";



elButton.addEventListener("click", function(e){
  e.preventDefault();

  var amount = elInput.value.trim();
  var convertDirectory = elSelect.value;
  var Bilet = 5;
  var kursUsd = 11320;
  var kusrRub = 137;



  if (amount == ""){
    return
  }

  amount = Number(amount);
  if (isNaN(amount)){
    return
  }


  switch (convertDirectory) {
    case "SUM":
      if (Bilet < (amount / kursUsd)) {
        elOutput.textContent = "Sayohatga boramiz !!!";
      } else {
        elOutput.textContent = "Mablag' yetarli emas !!!";
      }
      break;

      case "Ruble":
      if (Bilet < ((amount * kusrRub) / kursUsd)){
        elOutput.textContent = "Sayohatga boramiz !!!";
      } else {
        elOutput.textContent = "Mablag' yetarli emas !!!";
      }
      break;

      case "AQSh dollor":
      if (Bilet < amount) {
        elOutput.textContent = "Sayohatga boramiz !!!";
      } else {
        elOutput.textContent = "Mablag' yetarli emas !!!";
      }
      break;
  
    default:
      break;
  }
  
  
})