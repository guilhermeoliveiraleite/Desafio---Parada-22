function validacao(){
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("snome");
    let data = document.getElementById("data");
    let telefone = document.getElementById("telefone");
    let email = document.getElementById("email");
    let up = document.getElementById("up");
    
   

    estilo_input(nome, "#f45656", "#808080");
    estilo_input(sobrenome, "#f45656", "#808080");
   estilo_input(data, "#f45656", "#808080");
   estilo_input(telefone, "#f45656", "#808080");
   estilo_input(email, "#f45656", "#808080");
  // estilo_input(up, "#f45656", "#808080");
    
    

}

function estilo_input(input, cor_1){

    var alert = document.getElementById("alerta");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }
        
        else{
            window.location.href = 'cadastro_ok.html'
          }
          }
            
          
        //return input.style.border = `1px solid ${cor_2}`;
    
