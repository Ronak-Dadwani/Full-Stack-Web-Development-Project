// mouse out

const boxElement = document.getElementById("box");

//add a mouse out evenet listener to the element

boxElement.addEventListener("mouseout" , function () {
    alert("Fall Back to the Safe Zone(mouse out event working properly)")
})