//git element
let main = document.querySelector(".container");
// get API
fetch("https://api.quarantine.country/api/v1/summary/latest")
.then(function (response) {
    return response.json();
})
.then(function (data1) {
    let obData = data1.data;
    let regionsData = obData.regions
    for (let key of Object.values(regionsData)) {
        let section = document.createElement("section");
        section.classList = "card";
        main.appendChild(section);
        let cardHeader = document.createElement("div");
        cardHeader.classList = "cardHeader";
        section.appendChild(cardHeader);
        let title = document.createElement("h1");
        cardHeader.appendChild(title);
        title.textContent = key.name;
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
        total.textContent=  "total_cases"     
        firstColom.appendChild(active )        
        active.textContent=  "active_cases"     
        firstColom.appendChild(deaths )        
        deaths.textContent=  "deaths"     
        firstColom.appendChild(recoverdes )        
        recoverdes.textContent=  "recovered"   
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
    }
})
.catch(error => {
    document.write(error)
  });