// Class definition
var KTSelect2 = function() {
    // Private functions
    var demos = function() {
        // basic
        $('#kt_select2_talent, #kt_select2_talent_validate').select2({
            placeholder: "Pilih Talent"
        });

        $('#kt_select2_amoeba, #kt_select2_amoeba_validate').select2({
            placeholder: "Pilih Amoeba"
        });

        $('#kt_select2_statusInovator, #kt_select2_statusInovator_validate').select2({
            placeholder: "Pilih Status Innovator"
        });

        $('#kt_select2_roles, #kt_select2_roles_validate').select2({
            placeholder: "Pilih Roles Innovator"
        });

        $('#kt_select2_flagging, #kt_select2_flagging_validate').select2({
            placeholder: "Pilih Flagging"
        });

        $('#kt_select2_unitKerja, #kt_select2_unitKerja_validate').select2({
            placeholder: "Pilih Unit Kerja"
        });

        $('#kt_select2_lokasiKerja, #kt_select2_lokasiKerja_validate').select2({
            placeholder: "Pilih Lokasi Kerja"
        });

        $('#kt_datepicker_tglMasukInovator, #kt_datepicker_tglMasukInovator_validate').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom left",
            // templates: arrows
        });

        $('#kt_datepicker_tglMasukKedinasan, #kt_datepicker_tglMasukKedinasan_validate').datepicker({
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