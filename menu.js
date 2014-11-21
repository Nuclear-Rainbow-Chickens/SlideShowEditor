$(document).ready(function($) {
    var inspectorOut = false;
    var filemenuOut = false;
    
    $("#inspector_tab").click(function() {
        inspectorOut = !inspectorOut;
        if(inspectorOut) {
            $("#inspector").animate({right: "0%"}, 500);
        }
        else {
            $("#inspector").animate({right: "-20%"}, 500);
        }
        
    });
    $("#filemenu_tab").click(function() {
        filemenuOut = !filemenuOut;
        if(filemenuOut) {
            $("#filemenu").animate({top: "0%"}, 500);
        }
        else {
            $("#filemenu").animate({top: "-52%"}, 500);
        }
        
    });
    $("#load").click(function() {
        $("#loadform").fadeToggle(1000);
    });
});
