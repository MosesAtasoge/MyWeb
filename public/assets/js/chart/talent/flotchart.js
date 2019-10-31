// kode horizontal bar chart
var hacker = document.getElementById("hacker").title;
var hipster = document.getElementById("hipster").title;
var hustler = document.getElementById("hustler").title;

var jsonUnitKerja = document.getElementById("unitKerja").title;
var jsonLoker = document.getElementById("loker").title;

let parsedJsonUnitKerja = JSON.parse(jsonUnitKerja);
let parsedJsonLoker = JSON.parse(jsonLoker);

let labelsUnitKerja = [];
let datasetsUnitKerja = [];
for (var i = 0; i < parsedJsonUnitKerja.length; i++) {
    labelsUnitKerja.push(parsedJsonUnitKerja[i].NamaUnit);
    datasetsUnitKerja.push(parsedJsonUnitKerja[i].Count);
}

let labelsLoker = [];
let datasetsLoker = [];
for (var i = 0; i < parsedJsonLoker.length; i++) {
    labelsLoker.push(parsedJsonLoker[i].NamaLoker);
    datasetsLoker.push(parsedJsonLoker[i].Count);
}

var ctx = document.getElementById("myChart");
var data = {
    labels: labelsUnitKerja,
    datasets: [{
        data: datasetsUnitKerja,
        label: 'Count',
        backgroundColor: "#5D78FF",
        hoverBackgroundColor: "#0b31ed"
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
            enabled: true,
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

// kode horizontal bar chart
var ctx = document.getElementById("myChart2");
var data = {
    labels: labelsLoker,
    datasets: [{
        data: datasetsLoker,
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
            enabled: true,
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

// Class definition
var KTFlotchartsDemo = function() {

    var demo9 = function() {
        var data = [
            { label: "Hacker", data: hacker, color: KTApp.getStateColor("success") },
            { label: "Hipster", data: hipster, color: KTApp.getStateColor("warning") },
            { label: "Hustler", data: hustler, color: KTApp.getStateColor("danger") }
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

    return {
        // public functions
        init: function() {
            demo9();
        }
    };
}();

jQuery(document).ready(function() {
    KTFlotchartsDemo.init();
});