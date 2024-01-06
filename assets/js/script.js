const tabPara = document.querySelectorAll('.tabPara');

const firstTab = document.querySelector('.tabPara');

tabPara.forEach(el => el.style.display = "none");
firstTab.style.display = "block";

function tabshow(e) {
    tabPara.forEach(el => {
        el.style.display = "none";
        e.style.display = "block";
    });
}