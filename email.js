document.getElementById('sendBtn').onclick = function() {
        
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        
        var mailtoLink = `mailto:mbillocharles@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

        
        window.location.href = mailtoLink;
    };
