import * as MODEL from "./model.js";

function init() {

    $("nav a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";

        if (btnID == "home") {
            $(".navBlack").css("display", "none");
            $(".navWhite").css("display", "block");
            $(".tourBlock").css("display", "none");
        }
        else if (btnID == "tours") {
            $(".navWhite").css("display", "none");
            $(".navBlack").css("display", "block");
            $(".tourBlock").css("display", "block");
        }
        else {
            $(".navWhite").css("display", "none");
            $(".navBlack").css("display", "block");
            $(".tourBlock").css("display", "none");
        }
        MODEL.getPageContent(contentID);
    });
    $(".buttonSquare a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";

        $(".navWhite").css("display", "none");
        $(".navBlack").css("display", "block");
        $(".tourBlock").css("display", "block");

        MODEL.getPageContent(contentID);
    });
    $(".circleButton a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";

        $(".navWhite").css("display", "none");
        $(".navBlack").css("display", "block");
        $(".tourBlock").css("display", "none");

        MODEL.getPageContent(contentID);
    });
    $(".logo a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";
        $(".navBlack").css("display", "none");
        $(".navWhite").css("display", "block");
        $(".tourBlock").css("display", "none");
        MODEL.getPageContent(contentID);
    });
    $("#app").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Page";
        
        $(".navBlack").css("display", "block");
        $(".navWhite").css("display", "none");

        MODEL.getPageContent(contentID);
    });

}

$(document).ready(function () {
    $(".navBlack").css("display", "none");
    $(".tourBlock").css("display", "none");
    init();
    MODEL.getPageContent("homePage");
});