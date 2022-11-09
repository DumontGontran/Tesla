function signIn() {
    document.getElementById('signUp').style.display = 'none';
    document.getElementById('signIn').style.display = 'block';

    let signIn = document.querySelector('.signIn');
    let signUp = document.querySelector('.signUp');

    signIn.classList.add('active');
    signIn.classList.remove('navlink_hover');

    signUp.classList.remove('active');
    signUp.classList.add('navlink_hover');
}

function signUp() {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUp').style.display = 'block';
    

    let signIn = document.querySelector('.signIn');
    let signUp = document.querySelector('.signUp');

    signUp.classList.add('active');
    signUp.classList.remove('navlink_hover', 'hidden');

    signIn.classList.remove('active');
    signIn.classList.add('navlink_hover');
}