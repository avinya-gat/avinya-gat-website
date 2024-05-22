document.addEventListener('DOMContentLoaded', function () {
    // Function to handle login
    function login(username, password, userData) {
        // Validate credentials
        const user = userData.find(user => user.username === username && user.password === password);

        if (user) {
            // Define dashboard URLs for each role
            const dashboardUrls = {
                student: `student/studentdashboard.html?username=${encodeURIComponent(username)}`,
                teacher: `teacher/teacherdashboard.html?username=${encodeURIComponent(username)}`,
                administrator: `admin/admindashboard.html?username=${encodeURIComponent(username)}`
                // Add more roles and their corresponding URLs as needed
            };
            // Redirect to dashboard page based on user role
            const dashboardUrl = dashboardUrls[user.role] || 'loginup.html';
            window.location.href = dashboardUrl;
        } else {
            // Failed login
            alert('Invalid username or password.');
        }
    }

    // Event listener for login form submission
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Fetch JSON data from another page
        fetch('js/main.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Log fetched JSON data
                console.log('Fetched JSON data:', data);
                // Call login function with fetched JSON data
                login(username, password, data);
            })
            .catch(error => {
                console.error('There was a problem fetching the JSON data:', error);
                // Handle fetch error here, such as showing an error message to the user
                alert('Failed to fetch user data. Please try again later.');
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of a query parameter by name
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Function to append username parameter to nav links
    function appendUsernameToNavLinks(username) {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.includes('?')) {
                link.setAttribute('href', `${href}?username=${encodeURIComponent(username)}`);
            } else if (href) {
                link.setAttribute('href', `${href}&username=${encodeURIComponent(username)}`);
            }
        });
    }

    // Get the username from the URL
    const username = getQueryParam('username');

    // If username exists, append it to nav links
    if (username) {
        appendUsernameToNavLinks(username);
    }
});
