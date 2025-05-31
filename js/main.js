//  Аккордеон
document.querySelectorAll('.al-acc-item').forEach((el) =>{
    const content = el.querySelector('.al-acc-text');

    el.addEventListener('click', () => {
        content.classList.toggle('none');

        if (content.classList.contains('none')) {
                content.style.maxHeight = "0px";
                // el.querySelector(".al-acc-plus-img").closest(".al-acc-plus").style.cssText = `align-self: center`;
                el.querySelector('.al-acc-plus-img').style.cssText = `transform: rotate(90deg);`;
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                // el.querySelector(".al-acc-plus-img").closest(".al-acc-plus").style.cssText = `align-self: flex-end`;
                el.querySelector('.al-acc-plus-img').style.cssText = `transform: rotate(-135deg);`;
            }
    });
});