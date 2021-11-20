//git element
let main = document.querySelector(".container");

// console.log(section)
// console.log(main)

fetch("https://api.quarantine.country/api/v1/summary/latest")
  .then(function (response) {
    return response.json();
  })

  .then(function (data1) {
    let obData = data1.data;
    console.log(obData);
    let regionsData = obData.regions;
    console.log(regionsData);
    for (name in regionsData) {
      let section = document.createElement("section");
      section.classList = "card";

      main.appendChild(section);
      let cardHeader = document.createElement("div");
      cardHeader.classList = "cardHeader";
      section.appendChild(cardHeader);
      let title = document.createElement("h1");
      cardHeader.appendChild(title);

      title.textContent = name;
    }
  });
