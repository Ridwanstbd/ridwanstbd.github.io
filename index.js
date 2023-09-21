function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    const serviceID = 'service_dqdz1cr';
    const templateID = 'template_seti61j';
    
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Pesan Terkirim!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
}