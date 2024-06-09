document.addEventListener("DOMContentLoaded", () => {
    // Function to get query parameters
    function getQueryParams() {
        const params = {};
        window.location.search.replace(/^\?/, '').split('&').forEach(param => {
            const [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
        });
        return params;
    }

    const params = getQueryParams();
    const username = params.username;

    if (username) {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                const student = data.find(user => user.username === username);
                if (student && student.role === "student") {
                    document.getElementById('student-name').innerText = student.name;
                    document.getElementById('student-usn').innerText = `USN: ${student.usn}`;
                    document.getElementById('student-section').innerText = `Section: ${student.section}`;
                    document.getElementById('student-photo').src = student.photo;
                } else {
                    console.error('Student not found');
                }
            })
            .catch(error => console.error('Error fetching student data:', error));
    } else {
        console.error('Username not provided in URL');
    }
});