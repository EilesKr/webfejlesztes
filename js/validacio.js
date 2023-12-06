$(document).ready(function () {
    $("#myform").validate({
        rules: {
            veznev: "required",
            kernev: "required",
            email: {
                required: true,
                email: true
            },
            idopont: "required",
            surgos: "required",
            szin: "required",
        },
        messages: {
            veznev: " Írd be a vezetékneved!",
            kernev: " Írd be a keresztneved!",
            email: " Kérlek valós email címet adj meg!",
            idopont: " Adj meg egy időpontot.",
            surgos: "Kérlek adjad meg, hogy sürgős-e.",
            szin: "Kérlek adj meg egy színt",
        },

    });
});