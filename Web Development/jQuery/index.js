// $(document).keydown((event) => {
//     //const charCode = String.fromCharCode(event.which);
//     if (/[a-zA-Z]/.test(event.key) && event.key.length == 1) {
//         $("h1").html(event.key);
//     }
// });


$("h1").on("mouseover", () => {
    $("h1").addClass("mouseover-color");
})

$("h1").on("mouseout", () => {
    $("h1").removeClass("mouseover-color");
});

  