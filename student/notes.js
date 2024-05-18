document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('notesModal');
    const closeButton = document.querySelector('.close-button');
    const notesButtons = document.querySelectorAll('.notes-button');
    const modalCourseTitle = document.getElementById('modalCourseTitle');
    const modalCourseNotes = document.getElementById('modalCourseNotes');

    const courseNotes = {
        "23MAT23A": `
            <h3>MATHEMATICS II FOR CSE STREAM</h3>
            <table class="course-table">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Topics Covered</th>
                        <th>Download Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Module 1</td>
                        <td>Calculus</td>
                        <td><a href="link-to-calculus-notes" class="custom-button">Download</a></td>
                    </tr>
                    <tr>
                        <td>Module 2</td>
                        <td>Linear Algebra</td>
                        <td><a href="link-to-linear-algebra-notes" class="custom-button">Download</a></td>
                    </tr>
                    <tr>
                        <td>Module 3</td>
                        <td>Differential Equations</td>
                        <td><a href="link-to-differential-equations-notes" class="custom-button">Download</a></td>
                    </tr>
                    <tr>
                        <td>Module 4</td>
                        <td>Vector Calculus</td>
                        <td><a href="link-to-vector-calculus-notes" class="custom-button">Download</a></td>
                    </tr>
                    <tr>
                        <td>Module 5</td>
                        <td>Complex Analysis</td>
                        <td><a href="link-to-complex-analysis-notes" class="custom-button">Download</a></td>
                    </tr>
                </tbody>
            </table>
        `,
        // Include data for other courses
    };
    
    

    notesButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseCode = button.getAttribute('data-course-code');
            modalCourseTitle.textContent = `Notes for ${courseCode}`;
            modalCourseNotes.innerHTML = courseNotes[courseCode];
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
