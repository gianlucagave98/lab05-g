var getdata= function()
    {
        var name =document.getElementById("name").value;
        var last =document.getElementById("last").value;
        var email=document.getElementById("email").value;
        var movil=document.getElementById("phone").value;
        var nacio=document.getElementById("fecha").value;
        var comentario=document.getElementById("mensaje").value;
        
        document.registro.dato1.value=name;
        document.registro.dato2.value=last;
        document.registro.dato3.value=email;
        document.registro.dato4.value=movil;
        document.registro.dato5.value=nacio;
        document.registro.dato6.value=comentario;
    }