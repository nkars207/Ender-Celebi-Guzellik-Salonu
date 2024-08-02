function validateForm(event) {
    event.preventDefault(); // Formun varsayılan gönderim işlemini engeller

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    console.log('validateForm çalıştı'); // Kontrol için eklendi

    if (email === "" || password === "") {
        errorMessage.textContent = "E-posta adresi ve şifre alanları boş bırakılamaz!";
        return false;
    } else {
        errorMessage.textContent = "";
        alert("Form başarıyla gönderildi!");
        return true;
    }
}

// Sayfa yüklendiğinde formu dinamik olarak işleme al
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded çalıştı'); // Kontrol için eklendi

    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});