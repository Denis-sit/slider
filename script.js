const btnPrev = document.querySelector('.arrow__prev'),
      btnNext = document.querySelector('.arrow__next')
      btnCircle = document.querySelectorAll('.circle'),
      slideWrapper = document.querySelector('.slide__wrapper');
      slide = document.querySelector('.slide__tape'),
      slideItem = document.querySelectorAll('.slide__item'),
      slideName = document.querySelectorAll('.slide__name_text'),
      slideWrapperParametrs = document.querySelector('.slide__wrapper_parametrs');
let width = window.getComputedStyle(slideWrapper).width,
    offset = 0,
    numberSlide = 0;

const contentSlide = [
    {
        citi: 'Rostov-on-Don <br> LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request'
    },
    {
        citi: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request'
    },
    {
        citi: 'Rostov-on-Don <br> Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request'
    }
];     

function renderContent(i){
    slideWrapperParametrs.innerHTML = '';
    let infoParameters = document.createElement('div');
    infoParameters.classList.add('slide__info_parameters');
    infoParameters.innerHTML = `
        <div class="slide__item_parameters">
            <p class="slide__parametrs_name">City:</p>
            <p class="slide__paeametrs_meaning">${contentSlide[i].citi}</p>
        </div>
        <div class="slide__item_parameters">
            <p class="slide__parametrs_name">apartment area:</p>
            <p class="slide__paeametrs_meaning">${contentSlide[i].apartmentArea}</p>
        </div>
        <div class="slide__item_parameters">
            <p class="slide__parametrs_name">Repair time:</p>
            <p class="slide__paeametrs_meaning">${contentSlide[i].repairTime}</p>
        </div>
        <div class="slide__item_parameters">
            <p class="slide__parametrs_name">Repair Cost:</p>
            <p class="slide__paeametrs_meaning">${contentSlide[i].repairCost}</p>
        </div>
    `

    slideWrapperParametrs.appendChild(infoParameters);
};

renderContent(numberSlide);

function addingDeletingAClass(elenets, selector, i){
    elenets.forEach(item =>{
        item.classList.remove(selector);
    });

    elenets[i].classList.add(selector);
};

btnNext.addEventListener('click', (e) =>{
    e.preventDefault();

    if (offset == (+width.slice(0, width.length - 2) * (slideItem.length - 1))) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2); 
    }  

    slide.style.transform = `translateX(-${offset}px)`;
    numberSlide += 1;

    if(numberSlide > 2){
        numberSlide = 0;
    }

    renderContent(numberSlide);
    addingDeletingAClass(btnCircle, 'circle__active', numberSlide);
    addingDeletingAClass(slideName, 'slide__name_active',numberSlide);
});

btnPrev.addEventListener('click', (e) =>{
    e.preventDefault();
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slideItem.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2); 
    }

    slide.style.transform = `translateX(-${offset}px)`;
    numberSlide -= 1;

    if(numberSlide < 0){
        numberSlide = 2;
    }

    renderContent(numberSlide);
    addingDeletingAClass(btnCircle, 'circle__active', numberSlide);
    addingDeletingAClass(slideName, 'slide__name_active',numberSlide);
});

btnCircle.forEach((item, i) =>{
    item.addEventListener('click', (e) =>{
        numberSlide = i;
        renderContent(numberSlide);
        addingDeletingAClass(btnCircle, 'circle__active', numberSlide);
        addingDeletingAClass(slideName, 'slide__name_active',numberSlide);
        offset = +width.slice(0, width.length - 2) * i;
        slide.style.transform = `translateX(-${offset}px)`;
    });
});

slideName.forEach((item, i) =>{
    item.addEventListener('click', (e) =>{
        numberSlide = i;
        renderContent(numberSlide);
        addingDeletingAClass(btnCircle, 'circle__active', numberSlide);
        addingDeletingAClass(slideName, 'slide__name_active',numberSlide);
        offset = +width.slice(0, width.length - 2) * i;
        slide.style.transform = `translateX(-${offset}px)`;
    });
});
