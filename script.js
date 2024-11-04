document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form submit නොකිරීමට
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username සහ Password වල සත්‍යාපනය
    if (username === 'your_username' && password === 'your_password') {
        document.getElementById('successModal').style.display = 'block'; // Modal එක පෙන්වන්න
    } else {
        alert('Invalid username or password.'); // වැරදි alert එක
    }
});

// Modal එක close කිරීමට
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('successModal').style.display = 'none';
});

// Modal එකේ click කරන විට close කරන්න
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
