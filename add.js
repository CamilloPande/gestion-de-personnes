const btnAjouter = document.getElementById("ajouter");
const btnAnuller = document.getElementById("anuller");

btnAjouter.addEventListener('click', function(){
    if(txtName.value == '' || txtAge.value == ''){
         alert("Vous devez remplir tous les champs ❌");
         return;
    }
        fetch("https://my-server-crud.onrender.com/personne/add",{
             method : 'POST',
             body:JSON.stringify({
                 name : txtName.value,
                 age : txtAge.value
             }), 
             headers:{
                 "Content-type":"application/json; charset=UTF-8"
             }
         })

    location.href = 'personne';

    alert("Enregistrement Effectuée ✅");
         
    })


btnAnuller.addEventListener('click', function(){
    location.href = 'personne';
})