document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cadastro-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:9090/api/v1/plano", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("Cadastro realizado com sucesso!");
                    form.reset();
                } else {
                    alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
                }
            }
        };

        xhr.send(JSON.stringify(jsonData));
    });
});
