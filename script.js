const menu = document.getElementById('menu');
const nav = document.querySelector('.links');
const sunIcon = document.querySelector('#sun-icon');
const navLinks = document.querySelectorAll('.links a');

menu.addEventListener('click', function(){
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
})

sunIcon.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')){
        sunIcon.className='bx bxs-moon';
    }
    else{
        sunIcon.className='bx bx-sun';
    }
})


// navLinks.forEach(link => {
//     link.addEventListener('click',function(){
//         removeActive();
//         link.classList.add('active');
//     })
// })


function removeActive(){
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}


window.addEventListener('scroll', function(){
    const home = this.document.getElementById('home');
    const about = this.document.getElementById('about');
    const projects = this.document.getElementById('projects');
    const contact = this.document.getElementById('contact');

    const homeTrigger = home.offsetTop;
    const aboutTrigger = about.offsetTop-300;
    const projectsTrigger = projects.offsetTop-300;
    const contactTrigger = contact.offsetTop-300;

    scrollCheck(homeTrigger,aboutTrigger,0);
    scrollCheck(aboutTrigger,projectsTrigger,1);
    scrollCheck(projectsTrigger,contactTrigger,2);
    scrollCheck(contactTrigger,contactTrigger+1000,3);

})

function scrollCheck(currentTrigger,nextTrigger,i){
    if (this.window.scrollY >= currentTrigger && this.window.scrollY < nextTrigger){
        if (!navLinks[i].classList.contains('active')){
            removeActive();
            navLinks[i].classList.add('active');
        }
    }
}