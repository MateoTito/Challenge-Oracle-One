var encrypted, decrypted;

function encrypt () {
    console.log("encrypt");
    var mensaje = document.getElementById("mensaje");
    console.log(mensaje.value);

    document.getElementById("img-def").style.display = "none";
    document.getElementById("p-def").style.display = "none";

    encrypted = CryptoJS.AES.encrypt(mensaje.value, "alura");  
    document.getElementById("respuesta").innerHTML = encrypted;  
}

function desencrypt () {
    console.log("desencrypt");
    decrypted = CryptoJS.AES.decrypt(encrypted, "alura");
    document.getElementById("respuesta").innerHTML = decrypted.toString(CryptoJS.enc.Utf8); 
}

function copytoclip () {
    var copyText = document.getElementById("respuesta").innerHTML;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copiado "+ copyText +" al portapapeles!");
    });
}
