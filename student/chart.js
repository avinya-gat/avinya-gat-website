document.addEventListener('DOMContentLoaded', function () {
    // CIE Marks Bar Graph Data
    const cieData = {
        labels: ['23MAT23A', '23CHE22A', '23PLC23A', '23ESC24A', '23MEG25', '23IDT26', '23CIP27'],
        datasets: [{
            label: 'Marks',
            data: [50, 50, 50, 50, 50, 50, 50], // Sample data for marks
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color
            borderColor: 'rgba(255, 99, 132, 1)', // Border color
            borderWidth: 1
        }]
    };

    // Create CIE Marks Bar Graph
    const cieChart = new Chart(document.getElementById('cie-chart'), {
        type: 'bar',
        data: cieData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#FFFFFF' // Change the font color of the Y-axis labels
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#FFFFFF' // Change the font color of the X-axis labels
                    }
                }]
            },
            legend: {
                labels: {
                    fontColor: '#FFFFFF' // Change the font color of the legend
                }
            }
        }
    });


    // Sample data for attendance percentage
    const barGraphData = [70, 80, 85, 75, 80, 85, 80]; // Sample attendance data for each exam

    // Create the attendance bar graph
    new Chart(document.getElementById('attendance-chart'), {
        type: 'bar',
        data: {
            labels: ['23MAT23A', '23CHE22A', '23PLC23A', '23ESC24A', '23MEG25', '23IDT26', '23CIP27'],
            datasets: [{
                label: 'Attendance',
                data: barGraphData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)', // Sample color
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.5)'
            }]
        },
        options: {
            legend: {
                display: false // Hide the legend
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

});
