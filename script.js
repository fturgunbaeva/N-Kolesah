// module
var createRoutes = function() {
    let routes_container = document.getElementById('routes-container');
    for (let i = 0, length = localStorage.length; i < length; ++i) {
        const JSON_DATA = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (JSON_DATA) {
            console.log('test');
            let containerForEveryRoute = document.createElement('div');
            let date_section = document.createElement('p');
            let from_to_section = document.createElement('p');
            let price_section = document.createElement('p');
            let phone_number_section = document.createElement('p');
            let pass_count = document.createElement('p');
            // initialization
            date_section.innerHTML = JSON_DATA['date'];
            price_section.innerHTML = JSON_DATA['cost'];
            pass_count.innerHTML = JSON_DATA['pass'];
            from_to_section.innerHTML = `from ${JSON_DATA['from']} - to ${JSON_DATA['to']}`;
            phone_number_section.innerHTML = JSON_DATA['phone'];
            //apend to container

            containerForEveryRoute.appendChild(from_to_section);
            containerForEveryRoute.appendChild(price_section);
            containerForEveryRoute.appendChild(phone_number_section);
            containerForEveryRoute.appendChild(pass_count);
            containerForEveryRoute.appendChild(date_section);
            

            routes_container.appendChild(containerForEveryRoute);
            
        }
    }
};


// GLOBAL CONSTANTS

const INPUT_START = document.getElementById('input-start');
const INPUT_END = document.getElementById('input-end');
const DATE_PICKER = document.getElementById('date-picker');

const OFFER_START = document.getElementById('offer-start');
const OFFER_END = document.getElementById('offer-end');
const OFFER_COST = document.getElementById('offer-cost');
const OFFER_PASS = document.getElementById('offer-pass');
const OFFER_PHONE = document.getElementById('offer-phone');
const OFFER_DATE = document.getElementById('offer-date');

let OBJECT_NUMBER = 0;

let DATA = {};
let OFFER_DATA = {};
// containers to display data
let RESULT_CONTAINER = document.getElementById('results-container');
let date_Block = document.getElementById('date-block');
let from_to = document.getElementById('from-to');
let phone_block = document.getElementById('phone_block');

// 
let inputStartValue = '';
let inputEndValue = '';

let inputOfferStartValue = '';
let inputOfferEndtValue = '';
let inputOfferCosttValue = '';
let inputOfferPasstValue = '';
let inputOfferPhoneValue = '';

// handlers
// **** 1 ****
function handleChangeStart() {
    inputStartValue = INPUT_START.value;
    console.log(inputStartValue);
}
function handleChangeEnd() {
    inputEndValue = INPUT_END.value;
    console.log(inputEndValue);
}
// **** 1 ****

// **** 2 ****
function offerStart() {
    inputOfferStartValue = OFFER_START.value;
    console.log(inputOfferStartValue);
}

function offerEnd() {
    inputOfferEndtValue = OFFER_END.value;
    console.log(inputOfferEndtValue);
}

function setMoneyValue() {
    inputOfferCosttValue = OFFER_COST.value;
    console.log(inputOfferCosttValue);
}
function setPeopleCount() {
    inputOfferPasstValue = OFFER_PASS.value;
    console.log(inputOfferPasstValue);
}
function setPhoneNumber() {
    inputOfferPhoneValue = OFFER_PHONE.value;
    console.log(inputOfferPhoneValue);
}
// **** 2 ****
// handlers


function getDate() {


    let date = new Date(DATE_PICKER.value);


    return {
        date: date.toDateString(),
        from: inputStartValue,
        to: inputEndValue
    }


}

function offerDate() {


    let date = new Date(OFFER_DATE.value);

    return {
        date: date.toDateString(),
        from: inputOfferStartValue,
        to: inputOfferEndtValue,
        cost: inputOfferCosttValue,
        pass: inputOfferPasstValue,
        phone: inputOfferPhoneValue,

    }


}


const findRouteButton = document.getElementById('findRouteButton');

findRouteButton.addEventListener('click', function () {
    DATA = getDate();

    for (let i = 0, len = localStorage.length; i < len; ++i) {
        if (localStorage.getItem(localStorage.key(i))) {
            const JSON_DATA = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if (DATA['date'] == JSON_DATA['date'] && DATA['from'] == JSON_DATA['from'] && DATA['to'] == JSON_DATA['to'] ) {
                date_Block.innerHTML = DATA['date'];
                phone_block.innerHTML = JSON_DATA['phone'];
                from_to.innerHTML = `${DATA['from']} to ${DATA['to']}`;
            }
            else {
                alert("not found");
            }
        }
    }

   
});


createRoutes();

const sendDataJourney = document.getElementById('sendDataJourney');

sendDataJourney.addEventListener('click', function () {
    OFFER_DATA = offerDate();
    let serializeObj = JSON.stringify(OFFER_DATA);
    localStorage.setItem(`DATA${OBJECT_NUMBER}`, serializeObj);
    OBJECT_NUMBER++;
    console.log(localStorage);
    createRoutes();
});



