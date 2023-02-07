let bio = document.querySelector('#bio')
let nbroflettre = document.querySelector('.numberoflettre')
let btn = document.querySelector('.btn')

function check(){
  nbroflettre.textContent=
  bio.value.length==0
  ?'00'
  :bio.value.length

  if(bio.value.length>50){
    nbroflettre.style.color='#fb3152'
    btn.classList.add('disabled')
    bio.style.border='1px solid #fb3152'
  }else{
    nbroflettre.style.color='unset'
    btn.classList.remove('disabled')
    bio.style.border='unset'
  }
}
bio.addEventListener('input',check)