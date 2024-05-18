document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    document.querySelector('#signup button').onclick = signup;
    document.querySelector('#login button').onclick = login;
    document.querySelector('#welcome button').onclick = logout;

    function signup() {
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        
        if (username && password) {
            localStorage.setItem(username, password);
            alert('Signup successfull, Welcome User!!');
        } else {
            alert('Please enter a valid username and password.');
        }
    }

    function login() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        const storedPassword = localStorage.getItem(username);
        
        if (storedPassword === password) {
            
            document.getElementById('welcomeUser').innerText = username;
            document.getElementById('signup').style.display = 'none';
            document.getElementById('login').style.display = 'none';
            document.getElementById('welcome').style.display = 'block';
            alert("Login successfull, Welcome back!!");
        } else {
            alert('Invalid username or password.');
        }
    }

    // function logout() {
    //     document.getElementById('welcomeUser').innerText = '';
    //     document.getElementById('signup').style.display = 'block';
    //     document.getElementById('login').style.display = 'block';
    //     document.getElementById('welcome').style.display = 'none';
    // }

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
});
