const updateContent = (id) => {
    const birdsAnswers = document.querySelector(".birds_quiz_answers")

    birdsAnswers.innerHTML=""

    let listOfBirds = ""
    for(let item of birdsData[id]){
        // console.log(item.name)
        listOfBirds = listOfBirds + generateAnswers(item.name)
        // console.log(listOfBirds)
    }
    const ulEl = document.createElement("ul")
    ulEl.innerHTML = listOfBirds
    birdsAnswers.append(ulEl)
    // let listOfItems = "";

    // for (const item of birdsData[id]) {
    //     listOfItems = listOfItems + generateItem(item);
    // }

    // const documentEl = document.getElementById("birds_content");
    // console.log(documentEl)

    // documentEl.innerHTML = `<div>${listOfItems}</div>`;

    // console.log(listOfItems)
    // const fragment = document.createDocumentFragment();
    // const pEl = document.createElement('p');
    // pEl.textContent = "TTT sdfglksdfglksnd;fgjkl";
    // fragment.append(pEl);

    // documentEl.append(fragment);

    // console.log("III :: " + JSON.stringify(documentEl.innerHTML));
    // window.onload;
    
}

// const generateItem = (data) => {
    
//     return `<div 
//     id="${data.id}" >` + data.name + `<br>` + 
//         `<p>${data.species}</p><br>` + 
//         `<p>${data.description}</p>` + `<br>` + 
//         `<img src="${data.image}" alt="${data.name}" />` +
//         `<audio controls src="${data.audio}" type="audio/mpeg"> </audio> </div>`;
// }

const generateAnswers = (birds) =>{
    return `<li><p>${birds}</p></li>`
}