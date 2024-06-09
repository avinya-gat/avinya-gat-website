document.addEventListener('DOMContentLoaded', function () {
    fetch('timetable.json')
        .then(response => response.json())
        .then(data => generateTimetable(data))
        .catch(error => console.error('Error fetching the timetable:', error));
});

function generateTimetable(data) {
    const timetableContent = document.getElementById('timetable-content');

    for (const [day, classes] of Object.entries(data)) {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'date-day';
        dayHeader.textContent = day.toUpperCase();
        timetableContent.appendChild(dayHeader);

        const table = document.createElement('table');
        table.className = 'timetable-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = ['TIME', 'COURSE CODE AND COURSE NAME', 'FACULTY 1', 'ROOM NO', 'BATCH'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        classes.forEach(classItem => {
            const row = document.createElement('tr');

            for (const value of Object.values(classItem)) {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            }

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        timetableContent.appendChild(table);
    }
}