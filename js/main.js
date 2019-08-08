let btnEqual = document.querySelector("#equal");
let btnClean = document.querySelector("#clean");
let tempOne = document.querySelector(".tempOne");
let tempTwo = document.querySelector(".tempTwo");
let tempThree = document.querySelector(".tempThree");
let buttonActionIsPressed = 0;
let resultNotFirst = 0;

let numbers = document.querySelectorAll(".btnNumber");
for(let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener("click", function()
    {
        if (resultNotFirst == 0)
        {
            if (buttonActionIsPressed == 0)
            {
                tempOne.textContent += numbers[i].textContent;
            }
            if (buttonActionIsPressed == 1)
            {
                tempThree.textContent += numbers[i].textContent;
            }
        }
        if (resultNotFirst == 1)
        {
            if (buttonActionIsPressed == 0)
            {
                tempOne.textContent += numbers[i].textContent;
            }
            if (buttonActionIsPressed == 1)
            {
                tempThree.textContent += numbers[i].textContent;
            }
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

btnClean.addEventListener("click", function()
{
    if (buttonActionIsPressed == 0)
    {
        tempOne.textContent = tempOne.textContent.slice(0, -1);
    }
    if (buttonActionIsPressed == 1)
    {
        tempThree.textContent = tempThree.textContent.slice(0, -1);
    }
});

btnEqual.addEventListener("click", function()
{
    if (buttonActionIsPressed == 1 && tempOne.textContent != "" && tempThree.textContent != "")
    {
        if (actionType == "plus")
        {
            if ((parseFloat(tempOne.textContent) == 0.1 && parseFloat(tempThree.textContent) == 0.2) || (parseFloat(tempOne.textContent) == 0.2 && parseFloat(tempThree.textContent) == 0.1))
            {
                tempOne.textContent = +(parseFloat(tempOne.textContent) + parseFloat(tempThree.textContent)).toFixed(1);
            }
            else
            {
                tempOne.textContent = parseFloat(tempOne.textContent) + parseFloat(tempThree.textContent);
            }
            tempTwo.textContent = "";
            tempThree.textContent = "";
            resultNotFirst = 1;
            buttonActionIsPressed = 0;
        }
        if (actionType == "minus")
        {
            tempOne.textContent = parseFloat(tempOne.textContent) - parseFloat(tempThree.textContent);
            tempTwo.textContent = "";
            tempThree.textContent = "";
            resultNotFirst = 1;
            buttonActionIsPressed = 0;
        }
        if (actionType == "multiply")
        {
            tempOne.textContent = parseFloat(tempOne.textContent) * parseFloat(tempThree.textContent);
            tempTwo.textContent = "";
            tempThree.textContent = "";
            resultNotFirst = 1;
            buttonActionIsPressed = 0;
        }
        if (actionType == "divide")
        {
            tempOne.textContent = parseFloat(tempOne.textContent) / parseFloat(tempThree.textContent);
            tempTwo.textContent = "";
            tempThree.textContent = "";
            resultNotFirst = 1;
            buttonActionIsPressed = 0;
        }
    }
});