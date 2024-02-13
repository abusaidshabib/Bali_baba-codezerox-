const hamburger_menu = document.querySelector('#hm-menu')
const sidemenu = document.getElementById('sidemenu')
const closeButton = document.querySelector('#close_menu')

hamburger_menu.addEventListener('click', function(event){
    console.log("worked")
    // console.log()
    if(!sidemenu.classList.contains('hidden')){
        sidemenu.classList.remove('flex')
        sidemenu.classList.add('hidden')
    }
    else{
        sidemenu.classList.remove('hidden')
        sidemenu.classList.add('flex')
    }
})

closeButton.addEventListener('click', function(event){
    console.log("worked")
    sidemenu.classList.add('hidden')
})
