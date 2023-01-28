const shareToggle = document.querySelector('.mobile-share-toggle');
const sIcon = document.querySelector('.share-icon');



shareToggle.addEventListener('click', ( )=>{
    const visibility = sIcon.getAttribute("data-visible");

    console.log(visibility);

    if (visibility === "false"){
        sIcon.setAttribute("data-visible", true);
        shareToggle.setAttribute("aria-expanded",true);
    }else if (visibility === "true"){
        sIcon.setAttribute("data-visible", false);
        shareToggle.setAttribute("aria-expanded", false);
    }

});

