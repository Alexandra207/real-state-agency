import { load } from '../public/js/load';
import { renderPropertyCards } from '../public/js/property-cards';
import '/public/style/app.scss';

const showMoreButton = document.querySelector(`.catalog-button`);
const filterInput = document.querySelector(`.filter-form__input`);
let propertyLinks = document.querySelectorAll(`.property__link`);
console.log(`propertyLinks`, propertyLinks)
let numberToShow = 6;
let propertyyData = [];
let propertyCardsList
const renderPropertyCardsAndButton = (data) => {
    if (data.length > numberToShow) {
        showMoreButton.style.display = `block`;
    } else {
        showMoreButton.style.display = `none`;
    }
    renderPropertyCards(data, numberToShow);
}
console.log(`propertyyData length`, propertyyData.length)
const getServerAnswerSuccess = (response) => {
    propertyyData = response;
    console.log(`propertyyData`, propertyyData)
    renderPropertyCardsAndButton(propertyyData);
    propertyLinks = document.querySelectorAll(`.property__link`);
    console.log(`propertyLinks2`, propertyLinks)
    propertyLinks.forEach((link) => {
        console.log(`link`, link)
        link.addEventListener(`click`, (evt) => {
            console.log(`hi`)
            evt.preventDefault();
            window.location.href = 'card-pug.html';
        })
    })
    // if (propertyCardsList > numberToShow) {
    //     showMoreButton.style.display = `block`;
    // } else {
    //     showMoreButton.style.display = `none`;
    // }
    // renderPropertyCards(propertyyData, numberToShow);

  };
const getServerAnswerError = () => {
    console.log(`error`)
}
load(getServerAnswerSuccess, getServerAnswerError);
showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault;
    numberToShow = numberToShow + 3;
    renderPropertyCardsAndButton(propertyyData);
})

filterInput.addEventListener(`input`, (evt) => {
    let inputValue = evt.target.value;
    console.log(`inputValue`, inputValue)
    if (inputValue.length >= 3) {
        console.log(`inputValue 3`)
        const propertyyDataFileterd = propertyyData.slice().filter((data) => {
            console.log(`data`, data)
            // console.log(`data.title`, data.title.length)
            // return data.title.length < 6
            const dataToLowerCase = data.title.toLowerCase();
            console.log(`dataToLowerCase`, dataToLowerCase)

            console.log(`dataInlcudes`, dataToLowerCase.includes(inputValue))
            return dataToLowerCase.includes(inputValue) 
        })
        console.log(`propertyyDataFileterd`, propertyyDataFileterd)
        renderPropertyCardsAndButton(propertyyDataFileterd)
        // return newArr;
    }
})

// mocks [{"id":"1","title":"Brunlees Court","address":"19-23 Cambridge Road, Southport","type":"IndependentLiving","price":483000},{"id":"2","title":"Charlotte Court","address":"514 Muller Mount","type":"IndependentLiving","price":260000},{"id":"3","title":"Protocol Virginia","address":"19-10 Adam Street, London","type":"IndependentLiving","price":468000},{"id":"4","title":"infomediaries Row","address":"451 Swaniawski Ford","type":"SupportAvailable","price":234000},{"id":"5","title":"SMS","address":"67160 Huel Well","type":"SupportAvailable","price":931000},{"id":"6","title":"Checking Account technologies","address":"1352 Pete Shoals","type":"IndependentLiving","price":449000},{"id":"7","title":"New Caledonia invoice","address":"88517 Bernier Vista","type":"SupportAvailable","price":326000},{"id":"8","title":"Architect","address":"09540 Madge River","type":"IndependentLiving","price":369000},{"id":"9","title":"Indexing application","address":"1603 Kutch Well","type":"IndependentLiving","price":363000},{"id":"10","title":"Summit","address":"7645 Iliana Course","type":"IndependentLiving","price":788000},{"id":"11","title":"Web cross-platform","address":"46820 Barton Avenue","type":"IndependentLiving","price":850000},{"id":"12","title":"Virtual Fantastic Granite","address":"471 Marshall Street","type":"IndependentLiving","price":214000}]