// Could be written as $(function() {
$(document).ready(function () {

    $("#about-btn").click(function () {
        var current_message = $("#msg").html();
        $("#msg").html(current_message + "o");
    });

});
