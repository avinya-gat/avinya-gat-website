document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Holiday',
                start: '2024-03-04',
                classNames: 'holiday'
            },
            {
                title: 'Minor-Exam',
                start: '2024-04-10',
                classNames: 'exam'
            },
            {
                title: 'Marks / Attendance Display',
                start: '2024-05-15',
                classNames: 'display'
            },
            {
                title: 'Feedback',
                start: '2024-06-10',
                classNames: 'feedback'
            }
        ]
    });

    calendar.render();
});
