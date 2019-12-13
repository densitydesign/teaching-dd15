// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function () {
    //vis1

    console.log("Page ready");

    $("#country-links g").css("opacity", 0)

    $("#interactive g").mouseenter(function () {
        $("#countries g").css("opacity", 0)
        $("#interactive g").css("opacity", .075)

        var gClasses = $(this).attr('class').split(/\s+/);

        for (var i = 0; i < gClasses.length; i++) {
            var focus = $("#countries").find("." + gClasses[i])
            $(focus).css("opacity", 1)
        }
        $(this).css("opacity", 1)
    });

    $("#countries g").mouseenter(function () {
        $("#countries g").css("opacity", 0)
        $("#interactive g").css("opacity", 0)

        var gClasses = $(this).attr('class').split(/\s+/);

        for (var i = 0; i < gClasses.length; i++) {
            var focus = $("#country-links").find("." + gClasses[i])
            $(focus).css("opacity", 1)
        }

        $(this).css("opacity", 1)
    });

    $("#interactive g, #countries g").mouseleave(function () {
        $("#countries g").css("opacity", 1)
        $("#interactive g").css("opacity", 1)
        $("#country-links g").css("opacity", 0)
    });












    //vis2


    console.log("Page loaded.");

    var countries = [
        "US",
        "RU",
        "CN",
        "IT",
        "AR",
        "SA",
        "DE",
        "NL"
    ]

    var categories = [
        "CL",
        "PL",
        "NW",
        "TK",
        "PO",
        "OT"
    ]

    for (var i = 0; i < countries.length; i++) {
        $("#country-labels  #LB-" + countries[i]).css("opacity", .1)
    }

    $("#country-labels #LB-US").css("opacity", 1)
    $('#country-images g').css("opacity", 0)
    $("#country-images #IM-US").css("opacity", 1)
    $("#country-images #IM-US g").css("opacity", 1)

    $("#country-labels g, #graph g").mouseenter(function () {

        var focus = $(this).attr('id').split("-");

        $(this).css("opacity", 1)

        for (var i = 0; i < countries.length; i++) {
            $("#country-labels  #LB-" + countries[i]).css("opacity", .1)
        }

        $("#country-labels #LB-" + focus[1]).css("opacity", 1)

        console.log(focus);

        var mainGroup = "#country-images #IM-" + focus[1];

        $('#country-images g').css("opacity", 0)
        $(mainGroup).css("opacity", 1)
        $(mainGroup + " g").css("opacity", 1)
    });

    $("#graph rect").mouseenter(function () {
        var focus = $(this).attr('id').split("-");
        $('#country-labels #LB-' + focus[1]).css("opacity", 1)
        console.log("sei nel grafico " + focus);

        for (var i = 0; i < countries.length; i++) {
            for (var j = 0; j < categories.length; j++) {
                $('#country-images #IM-' + countries[i] + " #" + categories[j] + "-" + countries[i]).css("opacity", .1)

            }
        }
        $('#country-images #IM-' + focus[1] + ' #' + focus[0] + "-" + focus[1]).css("opacity", 1)
        console.log('#country-images #IM-' + focus[1] + ' #' + focus[0] + "-" + focus[1])
    });


    //vis3

    var categories_yt = [
        "Actors",
        "Standup",
        "Fictional",
        "Politicians",
        "Boxers",
        "Signers",
        "Etrepreneur",
        "Musicians",
        "Chefs",
        "Writers",
        "Astrophysicists",
        "Other"
    ];
    var gIDs;

    $("#interactive_yt g").hover(function () {

        gIDs = $(this).attr('id').split("-");

        if (gIDs[0].toLowerCase() === "main".toLowerCase()) {

            for (var i = 0; i < categories_yt.length; i++) {
                $('#interactive_yt #main-' + categories_yt[i]).css("opacity", .1)
            }
            $('#interactive_yt #main-' + gIDs[1]).css("opacity", 1)
        }
    });

    $("#interactive_yt g").mouseleave(function () {
        gIDs = $(this).attr('id').split("-");

        if (gIDs[0].toLowerCase() === "main".toLowerCase()) {

            for (var i = 0; i < categories_yt.length; i++) {
                $('#interactive_yt #main-' + categories_yt[i]).css("opacity", 1)
            }
        }
    });







});
