let inputs = document.getElementsByTagName ('input')
let errors = document.getElementsByTagName ('span')
let myContainer = document.querySelector(".containers")
let myFinish = document.querySelector(".finish")
let regexName = /^\w+\s\w+$/g 
let regexNumber = /^\d{4}\s{1}\d{4}\s{1}\d{4}\s{1}\d{4}$/g
let regexNumber1 = /^\d{1,2}$/g
let regexNumber2 = /^\d{1,3}$/g
let Regex = [regexName,regexNumber,regexNumber1,regexNumber1,regexNumber2,] 
let values = [cardName,cardNumber,cardDay,cardMonth,cardCvc] 
let confirm = function () {
    for (let i = 0; i<5; i++ ) {
        check = inputs[i].value.match(Regex[i])
        if (check == null){
            inputs[i].style.border = "var(--Red) solid 1px";
            errors[i].style.display = "block";
        }else {
            errors[i].style.display = "none";
            inputs[i].style.border = "var(--Dark-grayish-violet) solid 1px";
            values[i].innerHTML = inputs[i].value;
            if ( inputs[0].value.match(Regex[0]) !== null &&
                inputs[1].value.match(Regex[1]) !== null &&
                inputs[2].value.match(Regex[2]) !== null &&
                inputs[3].value.match(Regex[3]) !== null &&
                inputs[4].value.match(Regex[4]) !== null
            ) {
                myContainer.style.display = ('none')
                myFinish.style.display = ('flex')
            }
            inputs[i].value = '';
            console.log(i)
        }
    }
}
let Continue =function ( ) {
    myContainer.style.display = "flex"
    myFinish.style.display = "none"
}

