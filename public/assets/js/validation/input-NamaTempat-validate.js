$().ready(function () {
    $("#InputNamaTempat").validate({
        rules: {
            IdNamaTempat: {
                required: true,
                minlenght: 6
            },
            NamaTempat: "required",
            AlamatLengkap: "required"
        },
        messages: {
            IdNamaTempat: {
                required: "Please enter your ID Nama Tempat",
                minlenght: "Your ID must contain at least 6 character"
            },
            NamaAmoeba: "Please enter your Nama Tempat",
            AlamatLengkap: "Please enter your Alamat Lengkap"

        }
    })
});