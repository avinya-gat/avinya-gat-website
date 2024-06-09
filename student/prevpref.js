document.addEventListener('DOMContentLoaded', function () {
    const performanceData = [
        { "courseCode": "23CSE13", "courseName": "PRINCIPLES OF PROGRAMMING USING C(INTEGRATED)", "ch": 64, "ca": 63, "percentage": 98.00, "cie": 50.00, "faculty": "Sushma T" },
        { "courseCode": "23EGH16", "courseName": "COMMUNICATIVE ENGLISH", "ch": 9, "ca": 9, "percentage": 100.00, "cie": 38.00, "faculty": "YOSHITHA RAVI" },
        { "courseCode": "23ESC14B", "courseName": "INTRODUCTION TO ELECTRICAL ENGINEERING", "ch": 51, "ca": 51, "percentage": 100.00, "cie": 42.00, "faculty": "RUMA SINHA" },
        { "courseCode": "23ETC15A", "courseName": "INTRODUCTION TO ARTIFICIAL INTELLIGENCE", "ch": 53, "ca": 52, "percentage": 98.00, "cie": 47.00, "faculty": "Anand Panduranga" },
        { "courseCode": "23KSK17", "courseName": "SAMSKRUTHIKA KANNADA", "ch": 0, "ca": 0, "percentage": 0.00, "cie": 47.00, "faculty": "MAHESH D" },
        { "courseCode": "23MAT11A", "courseName": "MATHEMATICS I FOR CSE STREAM", "ch": 60, "ca": 60, "percentage": 100.00, "cie": 50.00, "faculty": "MALLIKA K.S" },
        { "courseCode": "23PHY12A", "courseName": "APPLIED PHYSICS FOR CSE STREAM (INTEGRATED)", "ch": 76, "ca": 76, "percentage": 100.00, "cie": 46.00, "faculty": "Remya P Narayanan" }
    ];

    const tableBody = document.getElementById('performance-table-body');

    performanceData.forEach(item => {
        const row = document.createElement('tr');

        for (let key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
});