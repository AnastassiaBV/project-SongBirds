const updateContent = (id) => {

    // CREATE_QUESTION
    let birdsQuiz = document.querySelector(".birds_quiz")
    birdsQuiz.innerHTML = ""

    let createRandomNumber = number => {
        let rend = Math.floor(Math.random() * number)
        return rend
    }

    let randomBirdIndex = createRandomNumber(birdsData[id].length)
    console.log(randomBirdIndex)
    birdsQuiz.appendChild(createQuetion(birdsData[id][randomBirdIndex]))


    //CREATE_ANSWERS

    const birdsAnswers = document.getElementById("birds_quiz_answers")
    birdsAnswers.innerHTML = ""
    let listOfBirds = ""
    for (let item of birdsData[id]) {
        listOfBirds = listOfBirds + generateAnswers(item.name)
    }

    const ulEl = document.createElement("ul")
    ulEl.innerHTML = listOfBirds
    birdsAnswers.append(ulEl)

    //CREATE_DESCRIPTION

    const birdsDescription = document.getElementById("birds_description")
    const birdsItem = ulEl.querySelectorAll(".bird_name")

    for (let bird of birdsItem) {
            bird.addEventListener("click", () => {
                console.log(bird)
                const birdName = bird.querySelector(".name")
                console.log("birdName: ", birdName)

                birdsDescription.innerHTML = ""
                let birdDes = birdsData[id].find(item => {
                    return item.name == birdName.innerHTML
                })

                let circle_answer = bird.querySelector(".circle_answer")

                if (birdDes.id == randomBirdIndex + 1) {
                    circle_answer.style.background = "green"
                } else {
                    circle_answer.style.background = "red"
                }
                console.log(birdDes)
                birdsDescription.appendChild(createDescription(birdDes))
            })
        
    }






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

const generateAnswers = (birds) => {
    return `<li id="">
        <div class="bird_name">
            <div class="circle_answer"></div>
            <div class="name">${birds}</div>
        </div>
        </li>`
}

let createQuetion = (bird) => {
    let question = document.createElement("div")
    question.classList.add("quetion_block")
    question.insertAdjacentHTML("afterbegin", `
            <img src="${bird.image}" class="question_img" alt="">
            <div class="quetion_content">
                <h2 class="quetion_bird_name">${bird.name}</h2>
                <hr>
                <audio controls src="${bird.audio}" type="audio/mpeg"> </audio> </div>
            </div>
        `)
    return question
}

const createDescription = (bird) => {
    let description = document.createElement("div")
    description.classList.add("bird_description_inner")
    description.insertAdjacentHTML("afterbegin", `
            <div class="bird_item">
                <img src="${bird.image}" class="bird_description_img" alt="">
                <div class="bird_description_info">
                    <h4>${bird.name}</h4>
                    <hr>
                    <h5>${bird.species}</h4>
                    <hr>
                    <audio controls src="${bird.audio}" type="audio/mpeg"> </audio> </div>
                </div>
            </div>
            <h4 class="bird_description_text">${bird.description}</h5>
        `)
    return description
}
