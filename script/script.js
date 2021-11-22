
// start summary card
    let summaryDiv=document.querySelector("section")
    let sumHeader=document.createElement("div")
    sumHeader.classList="sumHeader"
    summaryDiv.appendChild(sumHeader)
    let HeadH3=document.createElement("h3")
    sumHeader.appendChild(HeadH3)
    HeadH3.textContent="Summary"
    let sumBody=document.createElement("div")
    sumBody.classList="sumBody"
    summaryDiv.appendChild(sumBody)
    let sumarColom=document.createElement("div")
    sumarColom.classList="sumarColom"
    sumBody.appendChild(sumarColom)
    let summaryColom=document.createElement("div")
    sumBody.appendChild(summaryColom)
    summaryColom.classList="summaryColom"
    let total=document.createElement("h3")
    let active=document.createElement("h3")
    let deaths=document.createElement("h3")
    let recoverdes=document.createElement("h3")
    sumarColom.appendChild(total )
    total.classList="total_cases" 
    total.textContent=  "total_cases"     
    sumarColom.appendChild(active )        
    active.textContent=  "active_cases"
    active.classList="active_cases"     
    sumarColom.appendChild(deaths )        
    deaths.textContent=  "deaths"   
    deaths.classList="deaths"  
    sumarColom.appendChild(recoverdes )        
    recoverdes.textContent=  "recovered" 
    recoverdes.classList="recoverd"   
    let spanTotal=document.createElement("span") 
    summaryColom.appendChild(spanTotal)
    let spanactive=document.createElement("span") 
    summaryColom.appendChild(spanactive)
    let spandeathes=document.createElement("span") 
    summaryColom.appendChild(spandeathes)
    let spanrecoverds=document.createElement("span") 
    summaryColom.appendChild(spanrecoverds)
// start summary card
//git element
let main = document.querySelector(".container");
// get API
fetch("https://api.quarantine.country/api/v1/summary/latest")
.then(function (response) {
    return response.json();
})
.then(function (data1) {
    let obData = data1.data;
    spanTotal.textContent=obData.summary.total_cases
    spanactive.textContent=obData.summary.active_cases
    spandeathes.textContent=obData.summary.deaths
    spanrecoverds.textContent=obData.summary.recovered
    let regionsData = obData.regions
    for (let key of Object.values(regionsData)) {
        // start creat card
        let section = document.createElement("section");
        section.classList = "card";
        main.appendChild(section);
        // end creat card
        // start creat cardHeader
        let cardHeader = document.createElement("div");
        cardHeader.classList = "cardHeader";
        section.appendChild(cardHeader);
        let title = document.createElement("h1");
        cardHeader.appendChild(title);
        title.textContent = key.name;
        // end creat cardHeader
        // start creat cardBody
        let cardBody=document.createElement("div")
        cardBody.classList="cardBody"
        section.appendChild(cardBody)
        let firstColom =document.createElement("div")
        firstColom.classList="firstColom"
        cardBody.appendChild(firstColom)
        let total=document.createElement("h3")
        let active=document.createElement("h3")
        let deaths=document.createElement("h3")
        let recoverdes=document.createElement("h3")
        firstColom.appendChild(total )
        total.classList="total_cases" 
        total.textContent=  "total_cases"     
        firstColom.appendChild(active )        
        active.textContent=  "active_cases"
        active.classList="active_cases"     
        firstColom.appendChild(deaths )        
        deaths.textContent=  "deaths"   
        deaths.classList="deaths"  
        firstColom.appendChild(recoverdes )        
        recoverdes.textContent=  "recovered" 
        recoverdes.classList="recoverd"   
        let secondColom =document.createElement("div")
        secondColom.classList="secondColom"
        cardBody.appendChild(secondColom)
        let spanTotal=document.createElement("span") 
        secondColom.appendChild(spanTotal)
        spanTotal.textContent=key.total_cases
        let spanactive=document.createElement("span") 
        secondColom.appendChild(spanactive)
        spanactive.textContent=key.active_cases
        let spandeathes=document.createElement("span") 
        secondColom.appendChild(spandeathes)
        spandeathes.textContent=key.deaths
        let spanrecoverds=document.createElement("span") 
        secondColom.appendChild(spanrecoverds)
        spanrecoverds.textContent=key.recovered
        // end creat cardBody
    }
})
.catch(error => {
    document.write(error)
  });