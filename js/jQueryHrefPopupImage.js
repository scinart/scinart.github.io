/*
 * Url preview script
 * powered by jQuery (http://www.jquery.com)
 * written by Alen Grakalic (http://cssglobe.com)
 * adapted by scinart
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.screenshotPreview = function(){
    /* CONFIG */
    xOffset = 10;
    yOffset = 30;
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result
    /* END CONFIG */
    $("a.screenshot").hover(
        function(e){
            this.t = this.title;
            var c = (this.title != "") ? "<br/>" + this.t + "<br/>" : "";
            $(this).append("<p id='screenshot'> " + c + "<img src='" + this.rel + "' alt='url preview' />" + "</p>");
            $("#screenshot")
                .css("top",(e.pageY - xOffset) + "px")
                .css("left",(e.pageX - yOffset) + "px")
                .css("position","absolute")
                .css("opacity", 0.92)
                .css("z-index", 99)
                .fadeIn("fast");
            this.title = "";
        },
        function(){
            this.title = this.t;
            $("#screenshot").remove();
        });
    $("a.screenshot").mousemove(function(e){
        $("#screenshot")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
};


// starting the script on page load
$(document).ready(function(){
    screenshotPreview();
});
