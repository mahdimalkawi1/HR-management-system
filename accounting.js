'use strict';
let tableEl = document.getElementById("table");
let adNoEl = document.getElementById("adNo");
let marNoEl = document.getElementById("marNo");
let devNoEl = document.getElementById("devNo");
let finNOEl = document.getElementById("finNO");
let totalNo = document.getElementById("totalNo");
let adTS = document.getElementById("adTS");
let marTS = document.getElementById("marTS");
let devTS = document.getElementById("devTS");
let finTS = document.getElementById("finTS");
let totalSal = document.getElementById("totalSal");
let adAvS = document.getElementById("adAvS");
let marAvS = document.getElementById("marAvS");
let devAvS = document.getElementById("devAvS");
let finAvS = document.getElementById("finAvS");
let tatalAvS = document.getElementById("tatalAvS");
let objArr = [];
let adminNo = 0;
let marketingNo = 0;
let developNo = 0;
let financeNo = 0;
let adminTS = 0;
let marketingTS = 0;
let developTS = 0;
let financeTS = 0;

departmentnumber();

function getData() {

    let arr1 = localStorage.getItem('Employee');
    let arr2 = JSON.parse(arr1);
    for (let i = 0; i < arr2.length; i++) {

        objArr.push(arr2[i]);

    }

}
getData();


function departmentnumber (){
    for (let i = 0; i < objArr.length; i++) {
        
    if (objArr[i].department == "Administration") {
        adminNo++
        adminTS+=objArr[i].salary 


    } else if (objArr[i].department == "Marketing") {
        marketingNo++
        marketingTS+=objArr[i].salary

    } else if (objArr[i].department == "Development") {
        developNo++
        developTS+=objArr[i].salary

    } else if (objArr[i].department == "Finance") {
        financeNo++
        financeTS+=objArr[i].salary

    }

}
}

departmentnumber();


function tableRender() {

    
    
    let adNO = document.createElement('adNO');
    adNO.textContent = adminNo;
    adNoEl.appendChild(adNO);


    let marNo = document.createElement('marNo');
    marNo.textContent = marketingNo;
    marNoEl.appendChild(marNo);

    let devNo = document.createElement('devNo');
    devNo.textContent = developNo;
    devNoEl.appendChild(devNo);

    let finNo = document.createElement('finNo');
    finNo.textContent = financeNo;
    finNOEl.appendChild(finNo);

    let totalEmpNo= (adminNo+marketingNo+developNo+financeNo);

    let tNo = document.createElement('tNo')
    tNo.textContent = totalEmpNo;
    totalNo.appendChild(tNo);

    

    let tAd = document.createElement('tAd');
    tAd.textContent = adminTS;
    adTS.appendChild(tAd);

    let tMar = document.createElement('tMar');
    tMar.textContent = marketingTS;
    marTS.appendChild(tMar);

    let tDev = document.createElement('tDev');
    tDev.textContent = developTS;
    devTS.appendChild(tDev);

    let tFin = document.createElement('tFin');
    tFin.textContent = financeTS;
    finTS.appendChild(tFin);

    let totalSalary = (adminTS+marketingTS+developTS+financeTS);

    let totalSa = document.createElement('totalsa');
    totalSa.textContent = totalSalary;
    totalSal.appendChild(totalSa);


    let toSaAd = (adminTS/adminNo);
    let avaSalAdm = document.createElement('avaSalAdm');
    avaSalAdm.textContent = toSaAd;
    adAvS.appendChild(avaSalAdm);
    
    let toSalMar = (marketingTS/marketingNo);
    let avaSalMr = document.createElement('avaSalMr');
    avaSalMr.textContent = toSalMar;
    marAvS.appendChild(avaSalMr);

    let toSalDev = (developTS/developNo);
    let avaSalDe = document.createElement('avaSalDe');
    avaSalDe.textContent = toSalDev ;
    devAvS.appendChild(avaSalDe);

    let toSalFin = (finaTotSalary/numFinance);
    let avaSalFi = document.createElement('avaSalFi');
    avaSalFi.textContent = toSalFin ;
    finAvS.appendChild(avaSalFi);

    let avaTotSal = document.createElement('avaTotSal');
    avaTotSal.textContent = ( toSaAd + toSalMar + toSalDev + toSalFin);
    tatalAvS.appendChild(avaTotSal);
    
}

tableRender();



