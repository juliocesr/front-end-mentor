const main = document.querySelector('.container');
const button = document.querySelector('.container__form--button');

button.addEventListener('click', addClass);

function addClass() {
    main.classList.add('enviado');
}




function feedBack (index) {
    const select = document.querySelectorAll('.container__form--select--button a');
    

    let chosen = (index) => {
        const selectbg = document.querySelectorAll('.container__form--select--button');

        selectbg.forEach((element) => {
            element.classList.remove('ativo');
        })
        selectbg[index].classList.add('ativo')
    }

    select.forEach((item, index) => {
        item.addEventListener('click', () => {
            let valor = select[index].textContent;
            let feedBackText = document.querySelector('.container__submit--select');

            feedBackText.textContent = `Submit You selected ${valor} out of 5`

            chosen(index);
            console.log(valor)
        })
    })
}
feedBack ();

