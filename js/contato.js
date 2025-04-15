document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["formContato"];
    form.addEventListener("submit", function (e) {
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            e.preventDefault();
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("E-mail inválido.");
            e.preventDefault();
            return;
        }
        alert("Formulário válido! Enviando...");
    });
});

