const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password!');
    }
});
