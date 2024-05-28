let users = [
    {name: "Peter Johansson", password: "abc123", userid: "peter", email: "peter@abc.com"},
    {name: "Johanna Olsson", password: "abc123", userid: "joha", email: "johanna@abc.com"}
];

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.userid === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'game.html';
    } else {
        alert('Incorrect username or password');
    }
}

function register() {
    const name = document.getElementById('register-name').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;

    if (name && username && password && email) {
        const userExists = users.some(user => user.userid === username);
        if (!userExists) {
            let user = {name: name, password: password, userid: username, email: email};
            users.push(user);
            alert('Account created! Please log in.');
            showLogin();
        } else {
            alert('Username already taken.');
        }
    } else {
        alert('All fields are required.');
    }
}

function showLogin() {
    document.getElementById('login-layer').style.display = 'block';
    document.getElementById('register-layer').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-layer').style.display = 'none';
    document.getElementById('register-layer').style.display = 'block';
}
