let btnEqual = document.querySelector("#equal");
let btnClean = document.querySelector("#clean");
let tempOne = document.querySelector(".tempOne");
let tempTwo = document.querySelector(".tempTwo");
let tempThree = document.querySelector(".tempThree");
let buttonActionIsPressed = 0;
let resultNotFirst = 0;

let numbers = document.querySelectorAll(".btnNumber");

// Ввод c клавиатуры
document.addEventListener("keydown", function (event) 
{
    // Цифры
    for(let i = 0; i < numbers.length; i++)
    {
        if (event.code == `Digit${numbers[i].textContent}`)
        { 
            if (resultNotFirst == 0 || resultNotFirst == 1)
            {
                if (buttonActionIsPressed == 0)
                    tempOne.textContent += numbers[i].textContent;
                
                if (buttonActionIsPressed == 1)
                    tempThree.textContent += numbers[i].textContent;
            }
        }
    }

    // Стереть
    if (event.code == 'Backspace')
    {
        if (buttonActionIsPressed == 0)
            tempOne.textContent = tempOne.textContent.slice(0, -1);
        
        if (buttonActionIsPressed == 1)
            tempThree.textContent = tempThree.textContent.slice(0, -1);
    }
});

for(let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener("click", function()
    {
        if (resultNotFirst == 0 || resultNotFirst == 1)
        {
            if (buttonActionIsPressed == 0)
                tempOne.textContent += numbers[i].textContent;
            
            if (buttonActionIsPressed == 1)
                tempThree.textContent += numbers[i].textContent;
        }
    });
}

let actions = document.querySelectorAll(".btnAction");
for(let i = 0; i < actions.length; i++)
{
    actions[i].addEventListener("click", function()
    {
        if (tempOne.textContent != "")
        {
            tempTwo.textContent = actions[i].textContent;
            buttonActionIsPressed = 1;
            actionType = actions[i].id;
        }
    });
}


// кнопка очистки
btnClean.addEventListener("click", function()
{
    if (buttonActionIsPressed == 0)
        if (tempOne.textContent != '')
            tempOne.textContent = tempOne.textContent.slice(0, -1);

    if (buttonActionIsPressed == 1)
        if (tempThree.textContent == '')
        {   
            buttonActionIsPressed = 0;
            tempTwo.textContent = '';
        }
        else
            tempThree.textContent = tempThree.textContent.slice(0, -1);
});

// подчёт результата
btnEqual.addEventListener("click", function()
{
    if (buttonActionIsPressed == 1 && tempOne.textContent != "" && tempThree.textContent != "")
    {
        if (actionType == "plus")
            tempOne.textContent = +(+tempOne.textContent + +tempThree.textContent).toFixed(1);
        
        if (actionType == "minus")
            tempOne.textContent = +(+tempOne.textContent - +tempThree.textContent).toFixed(1);
        
        if (actionType == "multiply")
            tempOne.textContent = +(+tempOne.textContent * +tempThree.textContent).toFixed(1);
        
        if (actionType == "divide")
            tempOne.textContent = +(+tempOne.textContent / +tempThree.textContent).toFixed(1);
        
        tempTwo.textContent = "";
        tempThree.textContent = "";
        resultNotFirst = 1;
        buttonActionIsPressed = 0;
    }
});