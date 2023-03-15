let password = document.getElementById('password');
let input = document.getElementById('email');

const passwordcheck = () => {
    let pass = password.value.length;
    let passwordShow = document.querySelector('#passwordShow');
    if (pass == 0) {
        passwordShow.style.visibility = "hidden";
    }
    if (pass >= 8) {
        passwordShow.style.visibility = "visible";
        passwordShow.style.color = "green";
        passwordShow.classList.remove('fa-xmark');
        passwordShow.classList.add('fa-check');
    }
    else {
        passwordShow.classList.add('fa-xmark');
        passwordShow.classList.remove('fa-check');
        passwordShow.style.visibility = "visible";
        passwordShow.style.color = "red";
    }
};


const emailCheck = () =>{
    let inputShow = document.getElementById('inputShow');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(input.value == " ")
    alert("Value is empty please put the value");

    if(input.value.match(pattern)){
        inputShow.classList.remove('fa-xmark');
        inputShow.classList.add('fa-check');
        inputShow.style.visibility = "visible";
        inputShow.style.color = "green";
    }else{
        inputShow.classList.add('fa-xmark');
        inputShow.classList.remove('fa-check');
        inputShow.style.visibility = "visible";
        inputShow.style.color = "red";
    }

};
password.addEventListener('keyup', passwordcheck);
input.addEventListener('keyup', emailCheck);