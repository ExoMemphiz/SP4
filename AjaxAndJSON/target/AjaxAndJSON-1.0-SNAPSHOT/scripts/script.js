
function test() {
    var svg = document.getElementById("svg2");
    svg.addEventListener("click", function(element) {
        var id = element.target.parentNode.id;
        if (id != null && id != "") {
            console.log(id);
        }
    });
}

function printText(text) {
    console.log(text);
}