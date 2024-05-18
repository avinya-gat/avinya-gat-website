document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var query = document.getElementById('query').value;

    var googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdyhAktNZ_KFu3idCowTx2g5vB1nLGBrXJPgk7XcqttJFaomA/formResponse';
    var formData = new FormData();
    formData.append('entry.2005620554', name);
    formData.append('entry.1045781291', email);
    formData.append('entry.1166974658', phone);
    formData.append('entry.839337160', query);

    fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(function(response) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
    }).catch(function(error) {
        console.error('Error!', error.message);
    });
});