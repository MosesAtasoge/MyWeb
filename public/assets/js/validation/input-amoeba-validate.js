$().ready(function () {
    $("#InputAmoeba").validate({
        rules: {
            IdAmoeba: {
                required: true,
                minlenght: 6
            },
            NamaAmoeba: "required",
            BatchAmoeba: {
                required: true,
                minlength: 2
            },
            AreaInovasi: "required",
            TipeInovasi: "required",
            IncbAcc: "required",
            AreTribeaInovasi: "required",
            Core: "required",
            TglMasuk: "required",
            Deskripsi: "required"
        },
        messages: {
            IdAmoeba: {
                required: "Please enter your ID Amoeba",
                minlenght: "Your NIK must contain at least 6 character"
            },
            NamaAmoeba: "Please enter your Amoeba Name",
            BatchAmoeba: {
                required: true,
                minlength: 2
            },
            AreaInovasi: "Please enter your Area inovasi",
            TipeInovasi: "Please enter your Tipe inovasi",
            IncbAcc: "Please enter your incubate / Accelerate",
            AreTribeaInovasi: "Please enter your Tribe inovasi",
            Core: "Please enter your Bisnis Core",
            TglMasuk: "Please enter your date",
            Deskripsi: "Please enter your Description"

        }
    })
});