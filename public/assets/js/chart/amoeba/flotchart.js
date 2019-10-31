// kode horizontal bar chart
var digitalization = document.getElementById("digitalization").title;
var digitization = document.getElementById("digitization").title;

var NA = document.getElementById("NA").title;
var BO = document.getElementById("BO").title;
var CX = document.getElementById("CX").title;
var EX = document.getElementById("EX").title;
var NP = document.getElementById("NP").title;
var BM = document.getElementById("BM").title;

var jsonBatch = document.getElementById("batch").title;
// var jsonAlignment = document.getElementById("alignment").title;

// let parsedJsonAlignment = JSON.parse(jsonAlignment);
let parsedJsonBatch = JSON.parse(jsonBatch);

let labelsBatch = [];
let datasetsBatch = [];
for (var i = 0; i < parsedJsonBatch.length; i++) {
    labelsBatch.push(parsedJsonBatch[i].BatchId);
    datasetsBatch.push(parsedJsonBatch[i].count);
}

// let labelsAlignment = [];
// let datasetsAlignment = [];
// for (var i = 0; i < parsedJsonAlignment.length; i++) {
//     labelsAlignment.push(parsedJsonAlignment[i].Alignment);
//     datasetsAlignment.push(parsedJsonAlignment[i].Count);
// }

var ctx = document.getElementById("myChart");
var data = {
    labels: labelsBatch,
    datasets: [{
        data: datasetsBatch,
        label: 'waarde',
        backgroundColor: "#FD397A",
        hoverBackgroundColor: "#cc0040"
    }]
};

var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        animation: {
            animateScale: true
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

Chart.plugins.register({
    afterDatasetsDraw: function(chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function(dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(255, 255, 255)';

                    var fontSize = 16;
                    ctx.font = Chart.helpers.fontString(fontSize);

                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = -10;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x - (fontSize / 2), position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});
// end horizontal bar chart

// kode horizontal bar chart
// var ctx = document.getElementById("myChart2");
// var data = {
//     labels: labelsAlignment,
//     datasets: [{
//         data: datasetsAlignment,
//         label: 'xxx',
//         backgroundColor: "#FD397A",
//         hoverBackgroundColor: "#cc0040"
//     }]
// };

// var myBarChart = new Chart(ctx, {
//     type: 'horizontalBar',
//     data: data,
//     options: {
//         legend: {
//             display: false,
//         },
//         tooltips: {
//             enabled: false,
//         },
//         animation: {
//             animateScale: true
//         },
//         scales: {
//             xAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// Chart.plugins.register({
//     afterDatasetsDraw: function(chart, easing) {
//         // To only draw at the end of animation, check for easing === 1
//         var ctx = chart.ctx;

//         chart.data.datasets.forEach(function(dataset, i) {
//             var meta = chart.getDatasetMeta(i);
//             if (!meta.hidden) {
//                 meta.data.forEach(function(element, index) {
//                     // Draw the text in black, with the specified font
//                     ctx.fillStyle = 'rgb(255, 255, 255)';

//                     var fontSize = 16;
//                     ctx.font = Chart.helpers.fontString(fontSize);

//                     // Just naively convert to string for now
//                     var dataString = dataset.data[index].toString();

//                     // Make sure alignment settings are correct
//                     ctx.textAlign = 'center';
//                     ctx.textBaseline = 'middle';

//                     var padding = -10;
//                     var position = element.tooltipPosition();
//                     ctx.fillText(dataString, position.x - (fontSize / 2), position.y - (fontSize / 2) - padding);
//                 });
//             }
//         });
//     }
// });
// end horizontal bar chart

"use strict";

// Class definition
var KTFlotchartsDemo = function() {

    // Private functions
    // var demo1 = function() {
        // BAR CHART
    //     new Morris.Bar({
    //         element: 'kt_flotcharts_1',
    //         data: [{
    //                 y: 'CV',
    //                 a: 100
    //             },
    //             {
    //                 y: 'BV',
    //                 a: 75
    //             },
    //             {
    //                 y: 'BMV',
    //                 a: 50
    //             },
    //             {
    //                 y: 'MV I',
    //                 a: 75
    //             },
    //             {
    //                 y: 'MV II',
    //                 a: 50
    //             },
    //             {
    //                 y: 'MV III',
    //                 a: 75
    //             }
    //         ],
    //         xkey: 'y',
    //         ykeys: ['a'],
    //         labels: ['Total'],
    //         barColors: ['#09BB87']
    //     });
    // }

    // var demo6 = function() {
    //     // BAR CHART
    //     new Morris.Bar({
    //         element: 'kt_flotcharts_6',
    //         data: [{
    //                 y: 'Revenue',
    //                 a: 100
    //             },
    //             {
    //                 y: 'POC',
    //                 a: 75
    //             },
    //             {
    //                 y: 'User Active',
    //                 a: 50
    //             },
    //             {
    //                 y: 'Paid User',
    //                 a: 75
    //             },
    //             {
    //                 y: 'Initial Revenue',
    //                 a: 50
    //             }
    //         ],
    //         xkey: 'y',
    //         ykeys: ['a'],
    //         labels: ['Total'],
    //         barColors: ['#5D78FF']
    //     });
    // }

    var demo7 = function() {
        // horizontal bar chart:

        var data1 = [
            [10, 10],
            [20, 20],
            [30, 30],
            [40, 40],
            [50, 50]
        ];

        var options = {
            colors: [KTApp.getStateColor("brand")],
            series: {
                bars: {
                    show: true
                }
            },
            bars: {
                horizontal: true,
                barWidth: 6,
                lineWidth: 0, // in pixels
                shadowSize: 0,
                align: 'left'
            },
            grid: {
                tickColor: "#eee",
                borderColor: "#eee",
                borderWidth: 1
            }
        };

        $.plot($("#kt_flotcharts_7"), [data1], options);
    }

    var demo9 = function() {
        var data = [
            { label: "Digitalization", data: digitalization, color: KTApp.getStateColor("brand") },
            { label: "Digitization", data: digitization, color: KTApp.getStateColor("danger") }
        ];

        $.plot($("#kt_flotcharts_9"), data, {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                show: false
            }
        });
    }

    var demo10 = function() {
        var data = [
            { label: "N/A", data: NA, color: KTApp.getStateColor("primary") },
            { label: "BO", data: BO, color: KTApp.getStateColor("success") },
            { label: "CX", data: CX, color: KTApp.getStateColor("info") },
            { label: "EX", data: EX, color: KTApp.getStateColor("brand") },
            { label: "NP", data: NP, color: KTApp.getStateColor("danger") },
            { label: "BM", data: BM, color: KTApp.getStateColor("warning") }
        ];

        $.plot($("#kt_flotcharts_10"), data, {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                show: false
            }
        });
    }
    return {
        // public functions
        init: function() {
            // default charts
            // demo1();
            // demo6();
            demo7();

            // pie charts
            demo9();
            demo10();
        }
    };
}();

jQuery(document).ready(function() {
    KTFlotchartsDemo.init();
});