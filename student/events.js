const events = [
    { title: 'College Fest', start: new Date(2024, 5, 1), end: new Date(2024, 5, 1) },
    { title: 'First Saturday', start: new Date(2024, 5, 1), end: new Date(2024, 5, 1) },
    { title: 'Third Saturday', start: new Date(2024, 5, 15), end: new Date(2024, 5, 15) },
    { title: 'Bakrid', start: new Date(2024, 5, 17), end: new Date(2024, 5, 17) },
    { title: 'Internal-Assessement - 03', start: new Date(2024, 5, 18), end: new Date(2024, 5, 20) },
    { title: 'Last Working Day', start: new Date(2024, 5, 22), end: new Date(2024, 5, 22) },
    { title: 'Lab Test', start: new Date(2024, 5, 24), end: new Date(2024, 5, 29) },
    { title: 'Marks/Attendance Display', start: new Date(2024, 3, 5), end: new Date(2024, 3, 5) },
    { title: 'Feedback', start: new Date(2024, 4, 1), end: new Date(2024, 4, 1) }
];

function isDateInRange(date, start, end) {
    return date >= start && date <= end;
}

function generateCalendar(year, month) {
    const calendarEl = document.getElementById('calendar');
    calendarEl.innerHTML = '';  // Clear previous calendar content

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentMonth = month % 12;
    const currentYear = year + Math.floor(month / 12);
    const date = new Date(currentYear, currentMonth);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay();
    const monthName = monthNames[currentMonth];

    let calendar = `<div class="calendar-month"><h3>${monthName} ${currentYear}</h3><table>`;
    calendar += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

    // Fill initial empty cells
    for (let i = 0; i < startDay; i++) {
        calendar += '<td></td>';
    }

    // Fill days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(currentYear, currentMonth, day);
        const isToday = currentDate.toDateString() === new Date().toDateString();
        const event = events.find(event => isDateInRange(currentDate, event.start, event.end));
        const eventClass = event ? 'event' : '';

        calendar += `<td class="${isToday ? 'today' : ''} ${eventClass}">`;
        if (event) {
            calendar += `<div class="event-date" data-date="${day}">${day}</div>`;
        } else {
            calendar += day;
        }
        calendar += '</td>';

        if ((day + startDay) % 7 === 0) {
            calendar += '</tr><tr>';
        }
    }

    // Fill final empty cells
    const remainingCells = 7 - ((daysInMonth + startDay) % 7);
    if (remainingCells < 7) {
        for (let i = 0; i < remainingCells; i++) {
            calendar += '<td></td>';
        }
    }

    calendar += '</tr></table></div>';
    calendarEl.innerHTML += calendar;

    // Add event listeners for showing event details
    const eventCells = document.querySelectorAll('.event');
    eventCells.forEach(cell => {
        cell.addEventListener('click', (event) => {
            const eventDate = event.target.getAttribute('data-date');
            const eventDetail = events.find(event => isDateInRange(new Date(currentYear, currentMonth, eventDate), event.start, event.end));
            if (eventDetail) {
                showDialog(eventDetail);
            }
        });
    });


    // Display events for the month
    displayEvents(currentYear, currentMonth);
}

function displayEvents(year, month) {
    const eventListEl = document.getElementById('event-list');
    eventListEl.innerHTML = ''; // Clear previous event details
    const filteredEvents = events.filter(event =>
        (event.start.getFullYear() === year && event.start.getMonth() === month) ||
        (event.end.getFullYear() === year && event.end.getMonth() === month)
    );
    if (filteredEvents.length === 0) {
        eventListEl.innerHTML = '<p>No events this month.</p>';
    } else {
        filteredEvents.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `<strong>${event.title}</strong> - ${event.start.toDateString()} to ${event.end.toDateString()}`;
            eventListEl.appendChild(eventItem);
        });
    }
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentYear, currentMonth);

    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth -= 1;
        if (currentMonth < 0) {
            currentYear--;
            currentMonth += 12;
        }
        generateCalendar(currentYear, currentMonth);
    });

    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth += 1;
        if (currentMonth > 11) {
            currentYear++;
            currentMonth -= 12;
        }
        generateCalendar(currentYear, currentMonth);
    });

    // Function to show event details in a modal dialog
    function showDialog(eventDetail) {
        const modal = document.getElementById('event-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDate = document.getElementById('modal-date');

        modalTitle.textContent = eventDetail.title;
        modalDate.textContent = `Date: ${eventDetail.start.toDateString()} to ${eventDetail.end.toDateString()}`;

        modal.style.display = 'block'; // Change display property to 'block' to show the modal

        // Close the modal when the close button is clicked
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'; // Change display property to 'none' to hide the modal
        });

        // Close the modal when clicking outside of the modal content
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'; // Change display property to 'none' to hide the modal
            }
        });
    }

});