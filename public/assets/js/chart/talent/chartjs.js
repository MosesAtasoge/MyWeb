"use strict";

var inovatorA = document.getElementById("inovatorA").title;
var inovatorANotActive = document.getElementById("inovatorANotActive").title;
var inovatorB = document.getElementById("inovatorB").title;
var inovatorBNotActive = document.getElementById("inovatorBNotActive").title;
var bootcampActive = document.getElementById("bootcampActive").title;
var bootcampNotActive = document.getElementById("bootcampNotActive").title;

var countActiveA = parseInt(inovatorA);
var countNotActiveA = parseInt(inovatorANotActive);
var countActiveB = parseInt(inovatorB);
var countNotActiveB = parseInt(inovatorBNotActive);
var countActiveBootcamp = parseInt(bootcampActive);
var countNotActiveBootcamp = parseInt(bootcampNotActive);

var totalA = countActiveA + countNotActiveA;
var percentActiveA = Math.round((countActiveA * 100)/totalA);
var percentNotActiveA = Math.round((countNotActiveA * 100)/totalA);
var totalB = countActiveB + countNotActiveB;
var percentActiveB = Math.round((countActiveB * 100)/totalB);
var percentNotActiveB = Math.round((countNotActiveB * 100)/totalB);
var totalBootcamp = countActiveBootcamp + countNotActiveBootcamp;
var percentActiveBootcamp = Math.round((countActiveBootcamp * 100)/totalBootcamp);
var percentNotActiveBootcamp = Math.round((countNotActiveBootcamp * 100)/totalBootcamp);

document.getElementById("totalA").innerHTML = totalA;
document.getElementById("activeA").innerHTML = percentActiveA + "% Active";
document.getElementById("notActiveA").innerHTML = percentNotActiveA + "% Not Active";
document.getElementById("totalB").innerHTML = totalB;
document.getElementById("activeB").innerHTML = percentActiveB + "% Active";
document.getElementById("notActiveB").innerHTML = percentNotActiveB + "% Not Active";
document.getElementById("totalBootcamp").innerHTML = totalBootcamp;
document.getElementById("activeBootcamp").innerHTML = percentActiveBootcamp + "% Active";
document.getElementById("notActiveBootcamp").innerHTML = percentNotActiveBootcamp + "% Not Active";

var KTDashboard = function() {
    var inovator100 = function() {        
        if (!KTUtil.getByID('kt_chart_inovator100')) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        countActiveA, countNotActiveA
                    ],
                    backgroundColor: [
                        KTApp.getStateColor('success'),
                        KTApp.getStateColor('danger')
                    ]
                }],
                labels: [
                    'Active',
                    'Not Active',
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Technology'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctx100 = KTUtil.getByID('kt_chart_inovator100').getContext('2d');
        var myDoughnut = new Chart(ctx100, config);
    }

    var inovator4060 = function() {        
        if (!KTUtil.getByID('kt_chart_inovator4060')) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        countActiveB, countNotActiveB
                    ],
                    backgroundColor: [
                        KTApp.getStateColor('success'),
                        KTApp.getStateColor('danger')
                    ]
                }],
                labels: [
                    'Active',
                    'Not Active',
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Technology'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctx4060 = KTUtil.getByID('kt_chart_inovator4060').getContext('2d');
        var myDoughnut = new Chart(ctx4060, config);
    }

    var bootcamp = function() {        
        if (!KTUtil.getByID('kt_chart_bootcamp')) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        countActiveB, countNotActiveB
                    ],
                    backgroundColor: [
                        KTApp.getStateColor('success'),
                        KTApp.getStateColor('danger')
                    ]
                }],
                labels: [
                    'Active',
                    'Not Active',
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Technology'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KTApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctxBootcamp = KTUtil.getByID('kt_chart_bootcamp').getContext('2d');
        var myDoughnut = new Chart(ctxBootcamp, config);
    }

    return {
        // Init demos
        init: function() {
            // init charts
            inovator100();
            inovator4060();
            bootcamp();
        }
    };

}();

// Class initialization on page load
jQuery(document).ready(function() {
    KTDashboard.init();
});