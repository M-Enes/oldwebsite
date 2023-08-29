const htmlEl = document.getElementsByTagName('html').item(0);
const title = document.getElementsByTagName('title').item(0);
const navlinks = document.getElementsByClassName('navigation-link');
const langButton = document.getElementById('lang-button');
const heroContent = document.getElementsByClassName('hero-content').item(0);
const cardBodies = document.getElementsByClassName("card-body");
const linkbuttons = document.getElementsByClassName('link-button');
const contactHeader = document.getElementById('contact').children.item(0).children.item(0);

function changeLang(){
    if (htmlEl.lang === "en")
    {
        htmlEl.lang = "tr";
        title.innerText = "Muhammed Enes Karaca | Kişisel Websitesi";
        navlinks.item(0).innerHTML = 'Hakkında';
        navlinks.item(1).innerHTML = 'İletişim';
        langButton.children.item(0).innerText = "English Language";
        langButton.children.item(1).innerText = "🇬🇧";
        heroContent.children.item(1).innerHTML = "Yazılım Mühendisi, Araştırmacı";
        heroContent.children.item(2).innerHTML = "Yazılım üzerinde çalışmayı seviyorum.";
        contactHeader.innerHTML = "İletişim";
    }
    else {
        htmlEl.lang = "en";
        title.innerText = "Muhammed Enes Karaca | Personal Website";
        navlinks.item(0).innerHTML = 'About';
        navlinks.item(1).innerHTML = 'Contact';
        langButton.children.item(0).innerText = "Turkish Language";
        langButton.children.item(1).innerText = "🇹🇷";
        heroContent.children.item(1).innerHTML = "Software Engineer, Researcher";
        heroContent.children.item(2).innerHTML = "I love working on software.";
        contactHeader.innerHTML = "Contact";
    }
}