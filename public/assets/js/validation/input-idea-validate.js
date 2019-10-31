$().ready(function () {
    $("#InputIdea").validate({
        rules: {
            IdIdea: {
                required: true,
                minlenght: 2
            },
            NamaIde: "required",
            DeskripsiIde: "required",
            StatusIde: "required",
            TglMasuk: "required",
            LinkIde: "required"
        },
        messages: {
            IdIdea: {
                required: "Please enter your ID Idea",
                minlenght: "Your Ide must contain at least 2 character"
            },
            NamaAmoeba: "Please enter your Amoeba Name",
            NamaIde: "Please enter your Idea Name",
            DeskripsiIde: "Please enter your Desctiption Idea",
            StatusIde: "Please enter your Status Idea",
            TglMasuk: "Please enter your dDate",
            LinkIde: "Please enter your Link Idea"

        }
    })
});