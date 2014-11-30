var xmlstring = "";
var xmlDoc;
var filelist;
var slideArray = [];

function parseXML() {
    var load = document.getElementById("loadform");
    var reader = new FileReader();
    
    filelist = load.files;
    console.log(filelist);
    var file;
    for (var i = 0; i < filelist.length; i++) {
        if(filelist[i].name == "properties.xml") {
            file = filelist[i];
            break;
        }
    }
    console.log(file);
    
    if (file) {
        reader.readAsText(file);
    }
    else {
        xmlstring = "";
    }
    
    reader.onloadend = function () {
        xmlstring = reader.result;
        if(xmlstring !== "") {
            xmlDoc = jQuery.parseXML(xmlstring);
            console.log(xmlDoc);
            loadFirst()
        }
        else {
            console.log("XML ERROR");
        }
    };
   
}
function findFile(s) {
    for (var i = 0; i < filelist.length; i++) {
        if(filelist[i].name == s) {
            return filelist[i];
        }
    }
    return -1;
}
function loadFirst() {
    var reader = new FileReader();
    var firstName = xmlDoc.getElementsByTagName("first")[0].textContent;
    console.log(firstName);
    reader.readAsText(findFile(firstName));

    reader.onloadend = function () {
        var mainFrame = document.getElementById("frame");
        mainFrame.srcdoc = reader.result;
        slideArray[0] = mainFrame.srcdoc;
        
        var frame = document.createElement("iframe");
        frame.className = "timelineslide";
        frame.srcdoc = reader.result;
        document.getElementById("timeline").appendChild(frame);
        
        loadOthers()
    }
}

function loadOthers() {
    var currentDom;
    var reader = new FileReader();
    
    for(var i = 0; i < filelist.length - 2; i++) {
        currentDom = jQuery.parseXML(slideArray[i]);
        console.log("Checking This DOM: "+currentDom);
        var fileName = currentDom.getElementsByTagName("next-slide")[0].getAttribute("src");
        console.log(fileName);
        reader.readAsText(findFile(fileName));
        
        reader.onloadend = function () {
            var frame = document.createElement("iframe");
            frame.className = "timelineslide";
            frame.srcdoc = reader.result;
            slideArray[i+1] = frame.srcdoc;
            document.getElementById("timeline").appendChild(frame);
        }
    }
    
}