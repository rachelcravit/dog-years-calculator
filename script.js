
function calculateAge() {
  var humanYears = document.getElementById("humanYears").value;
  if (humanYears === 0 || "") {
    window.alert("Please enter your age.");
    return;
  }

  var dogYears=humanYears * 7;

  document.getElementById("answer").innerHTML = dogYears;
}

document.getElementById("calculate").onclick = function() { calculateAge(); };