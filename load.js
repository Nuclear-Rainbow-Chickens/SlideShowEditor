var xmlstring = "";

function parseXML() {
    var load = document.getElementById("loadform");
    var reader = new FileReader();
    var file = load.files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
        xmlstring = reader.result;
        console.log(xmlstring);
    }

    if (file) {
    reader.readAsText(file);
    } 
    else {
        xmlstring = "";
    } 
}

