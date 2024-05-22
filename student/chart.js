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
    const attendanceChart = new Chart(document.getElementById('attendance-chart'), {
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

    // Event listener for the attendance buttons
    const attendanceButtons = document.querySelectorAll('.attendance-button');
    attendanceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseIndex = button.getAttribute('data-course-index');
            const courseLabel = attendanceChart.data.labels[courseIndex];
            const attendancePercentage = attendanceChart.data.datasets[0].data[courseIndex];
            const modal = document.getElementById('attendanceModal');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `<span class="close-button">&times;</span>
                                       <h3>Attendance for ${courseLabel}</h3>
                                      <p>Attendance Percentage: ${attendancePercentage}%</p>`;
            modal.style.display = 'block';
        });

        const closeButton1 = document.querySelectorAll('.close-button-1');
        closeButton1.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.m1');
                modal.style.display = 'none';
            });
        });
    
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });


    const closeButton2 = document.querySelectorAll('.close-button-2');
    closeButton2.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.m2');
            modal.style.display = 'none';
        });
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', event => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    const cieButtons = document.querySelectorAll('.cie-button');
    cieButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseIndex = button.getAttribute('data-course-index');
            const courseLabel = cieChart.data.labels[courseIndex];
            const cieMarks = cieChart.data.datasets[0].data[courseIndex];
            const modal = document.getElementById('cieMarksModal');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `<span class="close-button">&times;</span>
                                      <h3>CIE Marks for ${courseLabel}</h3>
                                      <p>CIE Marks: ${cieMarks}</p>`;
            modal.style.display = 'block';
        });
    });
    
});
