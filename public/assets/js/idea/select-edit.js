let StatusIdeVal = document.getElementById("StatusIdeVal").value;


document.getElementById("kt_select2_statusIde").value = StatusIdeVal;

//Class definition
var KTSelect2 = function(){
    //Private function
    var demos = function(){
        //basic
        $('#kt_select2_statusIde, #kt_select2_statusIde_validate').select2({
            placeholder: "Pilih Satus Ide"
        });

        $('#kt_datepicker_TglMasukIde, #kt_datepicker_TglMasukIde_validate').datepicker({
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