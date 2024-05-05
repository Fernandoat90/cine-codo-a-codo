function incTitulo(){
    
    let titulo=document.getElementById("nom");
    titulo.style.transition="0.5s ease";
    titulo.style.transform="scale(1.1)";
}

function volverANormal(){
    let titulo = document.getElementById("nom");
    titulo.style.transform = "scale(1.0)";
}