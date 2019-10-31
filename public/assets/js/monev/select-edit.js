let StatusMonevVal = document.getElementById("StatusMonevVal").value;
let PhaseVal = document.getElementById("PhaseVal").value;
let ResultMonevVal = document.getElementById("ResultMonevVal").value;

document.getElementById("kt_select2_StatusMonev").value = StatusMonevVal;
document.getElementById("kt_select2_Phase").value = PhaseVal;
document.getElementById("kt_select2_ResultMonev").value = ResultMonevVal;

// Class definition
var KTSelect2 = function() {
    // Private functions
    var demos = function() {
        // basic
        $('#kt_select2_StatusMonev, #kt_kt_select2_StatusMonev_validate').select2({
            placeholder: "Pilih Status Monev"
        });

        $('#kt_select2_Phase, #kt_select2_Phase_validate').select2({
            placeholder: "Pilih Phase"
        });

        $('#kt_select2_ResultMonev, #kt_select2_ResultMonev_validate').select2({
            placeholder: "Pilih Result Monev"
        });

        $('#kt_datepicker_TglMonev, #kt_datepicker_TglMonev_validate').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom left",
            // templates: arrows
        });

        $('#kt_datepicker_StartDatePhase, #kt_datepicker_StartDatePhase_validate').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom left",
            // templates: arrows
        });

        $('#kt_datepicker_EndDatePhase, #kt_datepicker_EndDatePhase_validate').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom left",
            // templates: arrows
        });

    }

    // Public functions
    return {
        init: function() {
            demos();
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    KTSelect2.init();
});