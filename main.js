const form = document.getElementById("comparacao");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById("primeiroNumero");
    const segundoNumero = document.getElementById("segundoNumero");

    const a = primeiroNumero.value;
    const b = segundoNumero.value;

    const errorMessage = `O número <b>${b}</b> é menor/igual que o número <b>${a}</b>`;
    const successMessage = `O número <b>${b}</b> é maior que o número <b>${a}</b>`;

    const containerSucessMessage = document.querySelector('.success-message');
    const containerErrorMessage = document.querySelector('.error-message');

    if(b > a){
        containerSucessMessage.innerHTML = successMessage;
        containerSucessMessage.style.display = 'block';
        containerErrorMessage.style.display = 'none';
        /*return sucessMessage*/
    } else {
        containerErrorMessage.innerHTML = errorMessage;
        containerErrorMessage.style.display = 'block';
        containerSucessMessage.style.display = 'none';
        /*return errorMessage*/
    }
})
