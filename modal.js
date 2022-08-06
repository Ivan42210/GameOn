function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}







// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".content>.close");
const modalSubmit = document.querySelector(".btn-submit");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.forEach((close) => close.addEventListener("click", closeModal));







// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//close modal form
function closeModal() {
    modalbg.style.display = "none";
}

//form 

//validation




const patterns = {
    text: /^[a-z]{2,25}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    birthdate: /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])$/i,
    challenge: /^[0-9]{1,2}$/,
};



//Validate user input and start "c'est parti"
const modalBody = document.querySelector(".modal-body");
const form = document.querySelector("form");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;



function testFirst() {
    const prenom = document.getElementById('first').value;
    const message = document.getElementById('first-message');

    if (patterns.text.test(prenom)) {
        message.className = '';
        message.innerText = '';
        return a = 0;
    } else {

        message.className = 'invalid';
        message.innerText = 'Votre prénom doit contenir plus de 2 caractères.';
        return a = 1;
    }
}

function testLast() {
    const nom = document.getElementById('last').value;
    const message = document.getElementById('last-message');

    if (patterns.text.test(nom)) {
        message.className = '';
        message.innerText = '';
        return b = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Votre nom doit contenir plus de 2 caractères.';
        return b = 1;
    }
}

function testEmail() {
    const mail = document.getElementById('email').value;
    const message = document.getElementById('email-message');
    const i = 0;

    if (patterns.email.test(mail)) {
        message.className = '';
        message.innerText = '';
        return c = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Veuillez entrer une adresse mail valide.';
        return c = 1;
    }
}

function testDate() {
    const date = document.getElementById('birthdate').value;
    const message = document.getElementById('birth-message');
    const i = 0;

    if (patterns.birthdate.test(date)) {
        message.className = '';
        message.innerText = '';
        return d = 0;
    } else if (date == '') {
        message.className = 'invalid';
        message.innerText = 'Vous devez entrer votre date de naissance.';
        return d = 1;
    }
}

function testParticipate() {
    const participate = document.getElementById('quantity').value;
    const message = document.getElementById('quantity-message');
    const i = 0;

    if (patterns.challenge.test(participate)) {
        message.className = '';
        message.innerText = '';
        return e = 0;
    } else if (participate == '') {
        message.className = 'invalid';
        message.innerText = 'Vous devez entrer un nombre.';
        return e = 1;
    }
}

function testCity() {
    const cityChecked = document.querySelector('input[name=location]:checked');
    const message = document.getElementById('location-message');

    if (cityChecked != null) {


        message.className = '';
        message.innerText = '';
        return f = 0;
    } else {
        message.className = 'invalid';
        message.innerText = 'Vous devez faire un choix.';
        return f = 1;
    }
}

function testCondition() {
    const conditionChecked = document.getElementById('checkbox1').checked;
    const message = document.getElementById('terms-message');

    if (conditionChecked == false) {
        message.className = 'invalid';
        message.innerText = 'Vous devez accepter les conditions.';
        return g = 1;
    } else {
        message.className = '';
        message.innerText = '';
        return g = 0;
    }
}


function validation(event) {
    event.preventDefault();
    let sum = 0;

    testFirst();
    testLast();
    testEmail();
    testDate();
    testParticipate();
    testCity();
    testCondition();

    sum = a + b + c + d + e + f + g;

    if (sum === 0) {
        modalBody.removeChild(form);
        modalBody.innerHTML = `<div class="innerContent">Merci pour <br> votre inscription</div><div class="button buttonStyle" onclick="closeModal();">Fermer</div>`;
        return true;
    } else {
        console.log(sum)
        return false;
    }
}