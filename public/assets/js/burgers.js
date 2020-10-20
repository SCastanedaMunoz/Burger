$(function() {
    console.log("JQuery loaded");

    $(".btn-submit").on("click", function(event) {
        event.preventDefault();

        let burger = {
            name: $("#burger_name").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function() {
            console.log("Created New Burger");
            location.reload();
        });
    });
});