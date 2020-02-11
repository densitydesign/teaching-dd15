$(document).ready(function () {

    var categories = [
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
        "Others"
    ];
    var gIDs;

    $("#Interactive g").click(function () {
        gIDs = $(this).attr('id').split("-");

        if (gIDs[0].toLowerCase() === "main".toLowerCase()) {


            for (var i = 0; i < categories.length; i++) {
                $('#Interactive #main-' + categories[i]).css("opacity", .1)
            }
            $('#Interactive #main-' + gIDs[1]).css("opacity", 1)
        }
    });
    $("#Interactive g").mouseleave(function () {
        gIDs = $(this).attr('id').split("-");

        if (gIDs[0].toLowerCase() === "main".toLowerCase()) {

            for (var i = 0; i < categories.length; i++) {
                $('#Interactive #main-' + categories[i]).css("opacity", 1)
            }
        }
    });

});
