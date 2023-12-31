
let url = new URL(location.href);
let id = url.searchParams.get('id');

const txtName = document.getElementById("name");
const txtAge = document.getElementById("age");
const btnAnuller = document.getElementById("anuller");
const btnModifier = document.getElementById("modifier");

loadData(id);

function loadData(id){
    fetch("https://my-server-crud.onrender.com/personne/read/" + id).then(res => res.json())
      .then(function(data){
           console.log(data)
           data.forEach(personne => {
              txtName.value = personne.nom;
              txtAge.value = personne.prenom;
           });
      }) 
  }

  btnAnuller.addEventListener('click', function(){
      location.href = 'personne';
  })

  btnModifier.addEventListener('click', function(){
    if(txtName.value == "" || txtAge.value == ""){
        alert("Veuillez remplir Tous les champs ❌")
        return;
    }
    fetch("https://my-server-crud.onrender.com/personne/update/" + id,{
        method:"PUT",
        body:JSON.stringify({
            name : txtName.value,
            age : txtAge.value
        }), 
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    location.href = 'personne';
    alert("Modification Effectuée ✅")
})
