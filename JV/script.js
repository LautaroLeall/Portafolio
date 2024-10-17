let menuVisible = false;

//FUNCION QUE MUESTRA O OCULTA EL MENU
function MostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //OCULTA EL MENU UNA VEZ SELLECIONADO UNA OPCION
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//FUNCION QUE APLICA LAS ANIMACIONES EN SKILLS
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("github");
        habilidades[4].classList.add("figma");
        habilidades[5].classList.add("trello");
        habilidades[6].classList.add("canva");
        habilidades[7].classList.add("c");
        habilidades[8].classList.add("mysql");
        habilidades[9].classList.add("microsoft");
        habilidades [10].classList.add("google");
        habilidades [11].classList.add("comunicacion");
        habilidades [12].classList.add("trabajo");
        habilidades [13].classList.add("creatividad");
        habilidades [14].classList.add("dedicacion");
        habilidades [15].classList.add("liderazgo");
        habilidades [16].classList.add("decisiones");
    }
}

//scrolling para aplicar la animacion en la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}