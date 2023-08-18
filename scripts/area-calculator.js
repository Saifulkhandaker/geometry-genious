// traingle
function calculateTraingleArea(){
    // get traingle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    
    // get traingle height value
    const heightField = document.getElementById('traingle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;

    }

    const area = 0.5 * base * height;

    // show traingle area
    const areaValue = document.getElementById('traingle-area')
    areaValue.innerText = area;
    
}
// rectangle
function calculateRectangleArea(){
    // get rectangle width value
    const widthfield = document.getElementById('rectangle-width')
    const widthValueText = widthfield.value;
    const width = parseFloat(widthValueText);

    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
     // validate
     if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;

    }

    const area = width * length;
    
    // show rectangle area
    const areaValue = document.getElementById('rectangle');
    areaValue.innerText = area;
    
}
// parallelogram -----> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
     // validate
     if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;

    }
    const area = base * height;
    setAreaValue('parallelogram-area', area) 
}

// rhombus ------->
function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');
    const d2 = getInputValue('rhombus-d2');
     // validate
     if(isNaN(d1) || isNaN(d2)){
        alert('Please insert a number');
        return;

    }
    const area = 0.5 * d1 * d2;
    setAreaValue('rhombus-area', area);
}

// pentagon ------->
function calculatePentagonArea(){
    const p = getInputValue('pentagon-p');
    const b = getInputValue('pentagon-b');
     // validate
     if(isNaN(p) || isNaN(b)){
        alert('Please insert a number');
        return;

    }
    const area = 0.5 * p * b;
    setAreaValue('pentagon-area', area)
}

// ellipse ------->
function calculateEllipseArea(){
    const a = getInputValue('ellipse-a')
    const b = getInputValue('ellipse-b')
     // validate
     if(isNaN(a) || isNaN(b)){
        alert('Please insert a number');
        return;

    }
    const area = 3.14 * a * b;
    const areaToDecimal = area.toFixed(2);
    setAreaValue('ellipse-area', areaToDecimal)
}






// resuable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// resuable set area value;
function setAreaValue(areaId, area){
    const areaValue = document.getElementById(areaId);
    areaValue.innerText = area;
}



// validation check
/* 
1. set the proper type of input field. (number, text, email etc)
2. check type using typeof
3. isNan is checking wheather the input is not a number or not
*/