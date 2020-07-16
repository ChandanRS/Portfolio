const navSlide = ()=>{

    const burgerButton = document.querySelector("#burger-btn");
    console.log(burgerButton)
    const nav = document.querySelector('ul');
    const links = document.querySelectorAll('.nav-links li')
    const myInfo = document.querySelector('.my-info')

    burgerButton.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burgerButton.classList.toggle('toggle')
        links.forEach((link,index)=>{
            console.log("hoo")
            if(link.style.animation)
            link.style.animation = '';
            else
            link.style.animation  = `nav-text 0.5s ease forwards ${index / 7 + 0.3}s`
        })

        if(myInfo.style.animation)
        myInfo.style.animation='';
        else
        myInfo.style.animation = "myInfoSlide 0.5s ease forwards"
        })
}

navSlide();