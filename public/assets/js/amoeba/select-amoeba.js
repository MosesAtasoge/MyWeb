// Class definition
var KTSelect2 = function() {
    // Private functions
    var demos = function() {
        // basic
        $('#kt_select2_amoeba, #kt_select2_amoeba_validate').select2({
            placeholder: "Search dan Pilih Amoeba"
        });

        $('#kt_select2_batch, #kt_select2_batch_validate').select2({
            placeholder: "Pilih Batch"
        });

        $('#kt_select2_areaInovasi, #kt_select2_areaInovasi_validate').select2({
            placeholder: "Pilih Area Inovasi"
        });

        $('#kt_select2_ide, #kt_select2_ide_validate').select2({
            placeholder: "Pilih Ide"
        });

        $('#kt_select2_alignment, #kt_select2_alignment_validate').select2({
            placeholder: "Pilih Alignment"
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