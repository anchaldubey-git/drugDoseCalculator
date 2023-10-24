function calculateGeneral(e) {
    e.preventDefault();
    let desiredValue = parseFloat(document.getElementById('desiredValue').value);
    let inhandValue = parseFloat(document.getElementById('inhandValue').value);

    if (isNaN(desiredValue) || isNaN(inhandValue)) {
        alert('Please enter valid numeric values.');
        return;
    }

    let res = (desiredValue / inhandValue).toFixed(1);

    document.getElementById("res").innerText = `Tablets to be consumed ${res}`;
}


function calculateCyrup(e) {
    e.preventDefault();
    let desiredValue = parseFloat(document.getElementById('desiredValue').value);
    let inhandValue = parseFloat(document.getElementById('inhandValue').value);
    let quantityValue = parseFloat(document.getElementById('quantityValue').value);

    if (isNaN(desiredValue) || isNaN(inhandValue) || isNaN(quantityValue)) {
        alert('Please enter valid numeric values.');
        return;
    }

    let res = ((desiredValue / inhandValue) * quantityValue).toFixed(1);

    document.getElementById("res").innerText = `Cyrup to be consumed ${res} ml`;
}



function calculateWeight(e) {
    e.preventDefault();
    let dose = parseFloat(document.getElementById('dose').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let inhandValue = parseFloat(document.getElementById('inhandValue').value);
    let quantityValue = parseFloat(document.getElementById('quantityValue').value);

    let res = (((dose * weight) / inhandValue) * quantityValue).toFixed(1);

    document.getElementById("res").innerText = `Desired dose ${res}`;
}


function calculateIV(e) {
    e.preventDefault();
    let Volume = parseFloat(document.getElementById('Volume').value);
    let Time = parseFloat(document.getElementById('Time').value);
    let dropFactor = parseFloat(document.getElementById('dropFactor').value);

    let res = ((Volume/Time)*dropFactor).toFixed(0);

    document.getElementById("res").innerText = `IV rate is  ${res} drop/min`;
}



function calculateInfusion(e) {
    e.preventDefault();
    let Volume = parseFloat(document.getElementById('Volume').value);
    let Time = parseFloat(document.getElementById('Time').value);

    let res = (Volume/Time).toFixed(1);

    document.getElementById("res").innerText = `Infusion rate is  ${res} ml/h`;
}
