function sendEmail(serviceID, templateID, publicKey, templateParams) {
    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(response => {

            console.log("E-mail enviado com sucesso!", response.status, response.text);
        })
        .catch(error => {
            console.error("Erro ao enviar e-mail:", error);
        });
}

