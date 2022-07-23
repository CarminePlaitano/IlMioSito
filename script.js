/* link */

const linkHome = document.querySelector('.link-home');
const linkSkills = document.querySelector('.link-skills');
const linkProgetti = document.querySelector('.link-progetti');

linkHome.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

linkSkills.addEventListener('click', function () {
    window.scrollTo({
        top: 800,
        left: 0,
        behavior: 'smooth'
    });
});

linkProgetti.addEventListener('click', function () {
    window.scrollTo({
        top: 1650,
        left: 0,
        behavior: 'smooth'
    });
});

/* link responsive */

const linkButton = document.querySelector('.link-button');
const linkButtonMenu = document.querySelector('.link-button_menu');
const linkButtonHome = document.querySelector('.link-button_home');
const linkButtonSkills = document.querySelector('.link-button_skills');
const linkButtonProgetti = document.querySelector('.link-button_progetti');

linkButtonMenu.addEventListener('click', function () {
    if (linkButton.classList.contains('link-button_open')) {
        linkButton.classList.remove('link-button_open');
    }
    else {
        linkButton.classList.add('link-button_open');
    }
}); 

linkButtonHome.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

linkButtonSkills.addEventListener('click', function () {
    window.scrollTo({
        top: 800,
        left: 0,
        behavior: 'smooth'
    });
});

linkButtonProgetti.addEventListener('click', function () {
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: 'smooth'
    });
});

/* skills */

const skillsHtml = document.querySelector('.skills-container_html');
const skillsCss = document.querySelector('.skills-container_css');
const skillsJs = document.querySelector('.skills-container_js');

skillsHtml.addEventListener('click', function () {
    if (skillsHtml.classList.contains('skills-container_open')) {
        skillsHtml.classList.remove('skills-container_open');
        setTimeout(function () { skillsCss.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsJs.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsCss.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { skillsJs.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        skillsHtml.classList.add('skills-container_open');
        skillsCss.classList.add('skills-container_display-none');
        skillsJs.classList.add('skills-container_display-none');

    }
});

skillsCss.addEventListener('click', function () {
    if (skillsCss.classList.contains('skills-container_open')) {
        skillsCss.classList.remove('skills-container_open');
        setTimeout(function () { skillsHtml.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsJs.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsHtml.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { skillsJs.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        skillsCss.classList.add('skills-container_open');
        skillsHtml.classList.add('skills-container_display-none');
        skillsJs.classList.add('skills-container_display-none');
    }
});

skillsJs.addEventListener('click', function () {
    if (skillsJs.classList.contains('skills-container_open')) {
        skillsJs.classList.remove('skills-container_open');
        setTimeout(function () { skillsCss.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsHtml.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { skillsCss.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { skillsHtml.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        skillsJs.classList.add('skills-container_open');
        skillsCss.classList.add('skills-container_display-none');
        skillsHtml.classList.add('skills-container_display-none');
    }
});

/* progetti */

const progetti = [
    {
        id: 1,
        title: 'Progetto: Grocery Bud',
        img: 'materiale/Progetto1.jpg',
        text: 'In questo progetto creiamo un sito che funge da lista della spesa, con la possibilità di aggiungere o togliere elementi dalla lista.'
    },
    {
        id: 2,
        title: 'Progetto: Countdown Timer',
        img: 'materiale/Progetto2.jpg',
        text: 'Con questo progetto creiamo un countdown, utile per poter mostrare a schermo lo scadere di un evento.'
    },
    {
        id: 3,
        title: 'Progetto: Reviews',
        img: 'materiale/Progetto3.jpg',
        text: 'Tramite questo esempio si possono organizzare le recensioni degli utenti.'
    },
    {
        id: 4,
        title: 'Progetto: Q&A',
        img: 'materiale/Progetto4.jpg',
        text: 'Abbiamo visto come creare una sezione adatta per i Questions & Answers, con bottone che apre la sezione della risposta a tendina.'
    },
    {
        id: 5,
        title: 'Progetto: Menu',
        img: 'materiale/Progetto5.jpg',
        text: 'Con il seguente progetto abbiamo creato un menu aiutandoci con una lista di ogetti creata in .json.'
    },
    {
        id: 6,
        title: 'Progetto: Scroll Website',
        img: 'materiale/Progetto6.jpg',
        text: 'Progetto utile a impostare una pagina web semplice e funzionale.'
    },
];

// selezione oggetti

const titleProject1 = document.getElementById('progetto-title1');
const textProject1 = document.getElementById('progetto-text1');
const imageProject1 = document.getElementById('progetto-img1');
const titleProject2 = document.getElementById('progetto-title2');
const textProject2 = document.getElementById('progetto-text2');
const imageProject2 = document.getElementById('progetto-img2');
const titleProject3 = document.getElementById('progetto-title3');
const textProject3 = document.getElementById('progetto-text3');
const imageProject3 = document.getElementById('progetto-img3');

const prevBtn = document.querySelector('.left-button');
const nextBtn = document.querySelector('.right-button');

//  contatore progetti

let firstProject = 0;
let secondProject = 1;
let thirdProject = 2;

//  carica progetti iniziali

window.addEventListener("DOMContentLoaded", function () {
    const item1 = progetti[firstProject];
    const item2 = progetti[secondProject];
    const item3 = progetti[thirdProject];

    imageProject1.src = item1.img;
    imageProject2.src = item2.img;
    imageProject3.src = item3.img;
    titleProject1.textContent = item1.title;
    titleProject2.textContent = item2.title;
    titleProject3.textContent = item3.title;
    textProject1.textContent = item1.text;
    textProject2.textContent = item2.text;
    textProject3.textContent = item3.text;
});

// mostra progetti con item

function showFirstProject(project1) {
    const item1 = progetti[project1];
    imageProject1.src = item1.img;
    titleProject1.textContent = item1.title;
    textProject1.textContent = item1.text;
};
function showSecondProject(project2) {
    const item2 = progetti[project2];
    imageProject2.src = item2.img;
    titleProject2.textContent = item2.title;
    textProject2.textContent = item2.text;
};
function showThirdProject(project3) {
    const item3 = progetti[project3];
    imageProject3.src = item3.img;
    titleProject3.textContent = item3.title;
    textProject3.textContent = item3.text;
};

// bottone next

nextBtn.addEventListener('click', function () {
    firstProject++;
    secondProject++;
    thirdProject++;
    if (firstProject > progetti.length - 1) {
        firstProject = 0;
    }
    if (secondProject > progetti.length - 1) {
        secondProject = 0;
    }
    if (thirdProject > progetti.length - 1) {
        thirdProject = 0;
    };



    setTimeout(showFirstProject(firstProject), 1000);
    showSecondProject(secondProject);
    showThirdProject(thirdProject);
});

// bottone prev

prevBtn.addEventListener('click', function () {
    firstProject--;
    secondProject--;
    thirdProject--;
    if (firstProject < 0) {
        firstProject = progetti.length - 1;
    }
    if (secondProject < 0) {
        secondProject = progetti.length - 1;
    }
    if (thirdProject < 0) {
        thirdProject = progetti.length - 1;
    };

    showFirstProject(firstProject);
    showSecondProject(secondProject);
    showThirdProject(thirdProject);
});

/* progetti open_container */

const primoProgetto = document.querySelector('.primo-progetto');
const secondoProgetto = document.querySelector('.secondo-progetto');
const terzoProgetto = document.querySelector('.terzo-progetto');

primoProgetto.addEventListener('click', function () {
    if (primoProgetto.classList.contains('skills-container_open')) {
        primoProgetto.classList.remove('skills-container_open');
        setTimeout(function () { secondoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { terzoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { secondoProgetto.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { terzoProgetto.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        primoProgetto.classList.add('skills-container_open');
        secondoProgetto.classList.add('skills-container_display-none');
        terzoProgetto.classList.add('skills-container_display-none');

    }
});

secondoProgetto.addEventListener('click', function () {
    if (secondoProgetto.classList.contains('skills-container_open')) {
        secondoProgetto.classList.remove('skills-container_open');
        setTimeout(function () { primoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { terzoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { primoProgetto.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { terzoProgetto.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        secondoProgetto.classList.add('skills-container_open');
        primoProgetto.classList.add('skills-container_display-none');
        terzoProgetto.classList.add('skills-container_display-none');
    }
});

skillsJs.addEventListener('click', function () {
    if (terzoProgetto.classList.contains('skills-container_open')) {
        terzoProgetto.classList.remove('skills-container_open');
        setTimeout(function () { secondoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { primoProgetto.classList.remove('skills-container_visibility-hidden') }, 1800);
        setTimeout(function () { secondoProgetto.classList.remove('skills-container_display-none') }, 400);
        setTimeout(function () { primoProgetto.classList.remove('skills-container_display-none') }, 400);
    }
    else {
        terzoProgetto.classList.add('skills-container_open');
        secondoProgetto.classList.add('skills-container_display-none');
        primoProgetto.classList.add('skills-container_display-none');
    }
});


// anno corrente Copyright

let date = new Date().getFullYear();
document.getElementById("current-year").innerHTML = date;