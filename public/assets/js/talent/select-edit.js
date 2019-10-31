let TimStrukturVal = document.getElementById("TimStrukturVal").value;
let BandPositionVal = document.getElementById("BandPositionVal").value;
let StatusInovatorVal = document.getElementById("StatusInovatorVal").value;
let RolesVal = document.getElementById("RolesVal").value;
let FlaggingVal = document.getElementById("FlaggingVal").value;
let UnitKerjaVal = document.getElementById("UnitKerjaVal").value;
let LokasiKerjaVal = document.getElementById("LokasiKerjaVal").value;

document.getElementById("kt_select2_timStruktur").value = TimStrukturVal;
document.getElementById("kt_select2_bandPosition").value = BandPositionVal;
document.getElementById("kt_select2_statusInovator").value = StatusInovatorVal;
document.getElementById("kt_select2_roles").value = RolesVal;
document.getElementById("kt_select2_flagging").value = FlaggingVal;
document.getElementById("kt_select2_unitKerja").value = UnitKerjaVal;
document.getElementById("kt_select2_lokasiKerja").value = LokasiKerjaVal;

// Class definition
var KTSelect2 = function() {
    // Private functions
    var demos = function() {
        // basic
        $('#kt_select2_timStruktur, #kt_select2_timStruktur_validate').select2({
            placeholder: "Pilih Tim Struktur"
        });

        $('#kt_select2_bandPosition, #kt_select2_bandPosition_validate').select2({
            placeholder: "Pilih Band Position"
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