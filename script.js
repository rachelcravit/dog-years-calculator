
function calculateAge() {
  var humanYears = document.getElementById("humanYears").value;
    if (humanYears === "0" || humanYears === "") {
      document.getElementById("answer").innerHTML = "Please enter your age in human years.";
      return;
    }

  var dogYears=humanYears * 7;

  document.getElementById("answer").innerHTML = "That means you are " + dogYears + " in dog years!";
}

document.getElementById("calculate").onclick = function() { calculateAge(); };