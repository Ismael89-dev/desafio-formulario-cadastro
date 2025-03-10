const form = document.querySelector('form');
const principalText = document.getElementById('js-principal-text');
const secondText = document.getElementById('js-second-text');
const imgLogin = document.getElementById('js-res-image');
const msgLogin = document.querySelector('.msg_login');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const user = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (!(user.nome=="" || user.email=="" || user.password=="")){
        const regexNumber = /\d/;
        const regexLetra = /[A-Z]/;

        if((user.password).length < 8){
            msgToSignup('Senha Inválida!', 'A senha deve conter no minimo 8 caracteres!', './img/exclamation.png');
        } else if(!regexLetra.test(user.password)){
            msgToSignup('Senha Inválida!', 'A senha deve conter pelo menos uma letra maiúscula!', './img/exclamation.png');
        }else if(!regexNumber.test(user.password)){
            msgToSignup('Senha Inválida!', 'A senha deve conter pelo menos um número!', './img/exclamation.png');
        } else{
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            msgToSignup('Cadastrado com Sucesso.', 'Seja Bem-Vindo!', './img/checked.png');
        }

    }else{
        msgToSignup('Campos Vazios!', 'Por Favor, Preencha os Campos!', './img/exclamation.png');
    }

});

function msgToSignup(textoPrincipal, textoSecundario, srcIcon, privatePage) {
    imgLogin.setAttribute('src', srcIcon);
    principalText.textContent = textoPrincipal;
    secondText.textContent = textoSecundario;
    msgLogin.classList.add('active');
    setTimeout(() =>{
        msgLogin.classList.remove('active');
        if (!privatePage == ''){
            window.location.href = privatePage;
        };
    }, 3000);
    
}

