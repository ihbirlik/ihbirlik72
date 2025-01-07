document.addEventListener("DOMContentLoaded", function() {

    const hobbyImages = document.querySelectorAll('.hobby img');
    hobbyImages.forEach(function(img) {
        img.addEventListener('click', function() {
            const description = img.nextElementSibling;
            description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
        });
    });

    const menuLinks = document.querySelectorAll('.navbar-container a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Adınızı girmeniz gerekiyor!";
        valid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Geçerli bir e-posta adresi giriniz!";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").innerHTML = "Mesajınızı girmeniz gerekiyor!";
        valid = false;
    }

    return valid;
}
function validateForm() {
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var isValid = true;

    if (name == "") {
        document.getElementById('nameError').innerHTML = 'Lütfen adınızı girin.';
        isValid = false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        document.getElementById('emailError').innerHTML = 'Lütfen e-posta adresinizi girin.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Geçerli bir e-posta adresi girin.';
        isValid = false;
    }

    if (message == "") {
        document.getElementById('messageError').innerHTML = 'Lütfen mesajınızı girin.';
        isValid = false;
    }

    if (isValid) {
        alert("Mesajınız gönderildi.");
        return true;
    } else {
        return false;
    }-
}