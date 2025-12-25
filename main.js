const faqs = document.querySelectorAll('.faq');

faqs.forEach(article=>{
    const header = article.querySelector('.information');
    const text = article.querySelector('.faqs-text');
    const icon = article.querySelector('.toggle-icon');

    header.addEventListener('click',()=>{
        const isOpen = article.classList.toggle('open')
        text.style.display= isOpen?'block':'none';

        icon.src = isOpen ?'./assets/images/icon-minus.svg'
        : './assets/images/icon-plus.svg';
    })
});
