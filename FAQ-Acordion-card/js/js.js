const accordionItem = document.querySelector('[data-js="accordion"]');

console.log(accordionItem);

accordionItem.addEventListener('click', (event) => {
    const accordionId = event.target.dataset.accordion;
    const accordionOpen = document.querySelector(`[data-accordion = '${accordionId}']`);
    const accordionImg = document.querySelector(`[data-accordion-body = '${accordionId}']`);
    accordionOpen.nextElementSibling.classList.toggle('ativo');
    
    const accordionClosed = document.querySelectorAll('container__faq--questions dt');
    



    accordionImg.classList.toggle('ativo');
    accordionOpen.classList.toggle('ativo');
    console.log(accordionImg);
})




