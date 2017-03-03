var previousElement = null;

function addListener() {
    var svg = document.getElementById("svg2");
    svg.addEventListener("click", function(element) {
       if (previousElement != null) {
           //previousElement.setAttribute("fill", null);
       }
       previousElement = element;
       var id = element.toElement.id;
       console.log(element);
       //console.log();
       element.toElement.style.color = "#FF0000";
       element.toElement.outerHTML.color = "FF000";
       element.toElement.outerHTML.replace("fill-opacity", "fill:#FF0000");
       //console.log(element); 
    });
}