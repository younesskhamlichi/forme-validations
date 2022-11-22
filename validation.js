// After submit validation
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();

    // Récupérer les données 
    let nom = document.getElementById('nom').value;
    let prenom =document.getElementById('prenom').value; 
    let email =document.getElementById('email').value;
    let tele =document.getElementById('tele').value;
    let genre=document.querySelector('input[name="genre"]:checked');
    let groupe = document.querySelector('input[name="groupe"]:checked');
    let clubs =[];
    for(var option of document.getElementById('clubs').options){
        if(option.selected){
            clubs.push(option.value);
        }
    }

    // Définition des expressions régulières
    let regexnomprenom =/^[a-zA-Z]{1,30}$/;
    let regexemail =/^[a-zA-Z-.][+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let regextele =/^[0]{1}[5-7]{1}[0-9]{8}$/; // A CORRIGER

    // Validation des champs
    if(nom == ""  || nom.length > 30 || regexnomprenom.test("nom")===fulse){
        document.getElementById("error1").innerHTML='Le nom est obligatoire et ne doit pas dépasser 30 caractères'; 
    }
    if(prenom == ""  || prenom.length > 30 || regexnomprenom.test("prenom")===fulse ){
        document.getElementById("error2").innerHTML='Le prénom est obligatoire et ne doit pas dépasser 30 caractères';
    }
    if(email == "" ){
        document.getElementById("error3").innerHTML='L\'email est obligatoire';
    }
    // Tester si l'email a le bon format (regex)
    if(tele == "" || regextele.test("tele")===fulse){
      document.getElementById("error4").innerHTML='Le téléphone est obligatoire';
    }
    // Tester si le téléphone a le bon format (regex)
    if(genre == null){
        document.getElementById("error5").innerHTML='Le genre est obligatoire';
    }
    if(groupe == null){
        document.getElementById("error7").innerHTML='Le groupe est obligatoire';
    }
    if(clubs.length === 0){
        document.getElementById("error8").innerHTML='Il faut selectionner 1 à 3 clubs';
    }

});


function validName(){
    let Nom = document.getElementById("nom" ).value;
    let reg = /^[a-zA-Z]{1,30}$/;
    let teste = reg.test(document.getElementById("nom").value);

    if(teste==false){
        document.getElementById("nom").style.border ="4px solid red"; 
    }
    else{
        document.getElementById('nom').style.border='3px solid green';

    }
}
                       // validEmail  

function validPrenom(){
    let prenom = document.getElementById("prenom" ).value;
    let reg =  /^[a-zA-Z]{1,30}$/;
    let teste = reg.test(document.getElementById("prenom").value);
    if(teste==false){
        document.getElementById("prenom").style.border ="4px solid red"; 
    }
    else{
        document.getElementById('prenom').style.border='3px solid green';
    }   
                    // valid email
}
 function validEmail(){
    let email=document.getElementById("email").value;
    let regex = /^[a-zA-Z-.]+@{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let test = regex.test(document.getElementById("email").value); 
    if(test==false){
        document.getElementById("email").style.border ="4px solid red"; 
    }
    else{
        document.getElementById("email").style.border='3px solid green';
    } 
                   // valid tel  
 }
 function validTell(){
    let tel=document.getElementById("tele").value;
    let regex =/^[0]{1}[5-7]{1}[0-9]{8}$/
    let test = regex.test(document.getElementById("tele").value); 
    if(test==false){
        document.getElementById("tele").style.border ="4px solid red"; 
    }
   else{
        document.getElementById("tele").style.border='3px solid green';
    }   
 }
 document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault()
 if(genre == null){
        document.getElementById("error5").innerHTML='Le genre est obligatoire';
    }
    if(groupe == null){
        document.getElementById("error7").innerHTML='Le groupe est obligatoire';
    }
    if(clubs.length === 0){
        document.getElementById("error8").innerHTML='Il faut selectionner 1 à 3 clubs';
    }

} )
