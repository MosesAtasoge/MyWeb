let IdeVal = document.getElementById("IdeVal").value;
let BatchVal = document.getElementById("BatchVal").value;
let AlignmentVal = document.getElementById("AlignmentVal").value;
let AreaInovasiVal = document.getElementById("AreaInovasiVal").value;
let TipeInovasiVal = document.getElementById("TipeInovasiVal").value;
let StatusAmoebaVal = document.getElementById("StatusAmoebaVal").value;
let IncbAccGradVal = document.getElementById("IncbAccGradVal").value;
let CoreVal = document.getElementById("CoreVal").value;

document.getElementById("kt_select2_ide").value = IdeVal;
document.getElementById("kt_select2_batch").value = BatchVal;
document.getElementById("kt_select2_alignment").value = AlignmentVal;
document.getElementById("kt_select2_areaInovasi").value = AreaInovasiVal;
document.getElementById("kt_select2_tipeInovasi").value = TipeInovasiVal;
document.getElementById("kt_select2_statusAmoeba").value = StatusAmoebaVal;
document.getElementById("kt_select2_incbAccGrad").value = IncbAccGradVal;
document.getElementById("kt_select2_core").value = CoreVal;

// Class definition
var KTSelect2 = function() {
    // Private functions
    var demos = function() {
        // basic
        $('#kt_select2_amoeba, #kt_select2_amoeba_validate').select2({
            placeholder: "Pilih Amoeba"
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

        $('#kt_select2_tipeInovasi, #kt_select2_tipeInovasi_validate').select2({
            placeholder: "Pilih Tipe Inovasi"
        });

        $('#kt_select2_statusAmoeba, #kt_select2_statusAmoeba_validate').select2({
            placeholder: "Pilih Status Amoeba"
        });

        $('#kt_select2_incbAccGrad, #kt_select2_incbAccGrad_validate').select2({
            placeholder: "Incubation / Acceleration / Graduation"
        });

        $('#kt_select2_core, #kt_select2_core_validate').select2({
            placeholder: "Pilih Core"
        });

        $('#kt_datepicker_tglIntake, #kt_datepicker_tglIntake_validate').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom left",
            // templates: arrows
        });

        $('#kt_datepicker_tglKeluar, #kt_datepicker_tglKeluar_validate').datepicker({
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