let myDiv = document.getElementById('myDiv')
myDiv.innerHTML = "My Text"

document.getElementById('hideMe').onclick = function() {
    document.getElementById("myImage").style.display = "none";
}

function showImage() {
    document.getElementById("myImage").style.display = "block";
}