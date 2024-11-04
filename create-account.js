const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    const usernameRegex = /^[a-z0-9]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    if (!usernameRegex.test(username)) {
        alert('Username must contain only lowercase letters and numbers.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must include uppercase letters, lowercase letters, and numbers.');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    window.location.href = 'index.html';
});
