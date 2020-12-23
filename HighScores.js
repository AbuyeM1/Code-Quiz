

// Declared variables
var highScoreEl = document.querySelector("#highScore");
var clearEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#goBack");

// Event listener to clear scores 
clearEl.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScoreEl.appendChild(createLi);

    }
}
// Event listener to move to index page
goBackEl.addEventListener("click", function () {
    window.location.replace("./index.html");
});