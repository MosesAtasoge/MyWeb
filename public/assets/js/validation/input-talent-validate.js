$().ready(function () {
    $("#InputTalent").validate({
        rules: {
            NIK: {
                required: true,
                minlenght: 6
            },
            Nama: "required",
            NoTelp: {
                required: true,
                minlenght: 11
            },
            Email: {
                required: true,
                email: true
            },
            BatchInovation: "required",
            BP: "required",
            Roles: "required",
            Status: "required",
            UnitKerjaAsalId: "required",
            LokasiKerjaAsalId: "required"
        },
        messages: {
            NIK: {
                required: "Please enter your NIK",
                minlength: "Your NIK must contain at least 6 character"
            },
            Nama: "Please enter your Name",
            NoTelp: {
                required: "Please enter your phone number",
                minlength: "Your phone number must contain at least 10 character"
            },
            Email: {
                required: "Please enter your email",
                email: "Please enter valid email"
            },
            BatchInovation: "Please enter your batch",
            BP: "Please choose your BP",
            Roles: "Please choose your Roles",
            Status: "Please choose your Status",
            UnitKerjaAsalId: "Please choose your Unit Kerja",
            LokasiKerjaAsalId: "Please choose your Lokasi Kerja",
        }
    })
});