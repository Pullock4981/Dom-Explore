// const Sections = document.querySelectorAll('section');
// // console.log(Sections);
// for(section of Sections){
//     section.style.border = '2px solid red';
//     section.style.marginTop = '10px';
//     section.style.padding ='20px';
//     section.style.borderRadius = '10px';
//     // section.style.color = "blue"
//     // section.style.backgroundColor = "green"
// }

// const AddSection = document.getElementById("Section-2")
// console.log(AddSection);
// const h1 = document.createElement('h1');
// h1.innerText = "This is new section";
// AddSection.appendChild(h1);


function addNewSection(event){
    
// console.log(NewSection)

// const section = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = "This is new section";
// section.appendChild(h1);

// const p = document.createElement('p')
// p.innerText = "lorem gfytfytfy hjguygfuyfyut uyguygfugu";
// section.appendChild(p)

// NewSection.appendChild(section)
}

const NewSection = document.getElementById("section-new");
const NewSection2 = document.createElement('section');
NewSection2.innerHTML = `

        <h1>
            Hi, I am here with DOM.
        </h1>
        <h1>
            Hi, I am here with u.
        </h1>
        <h1>
            Hi, I am here with a.
        </h1>
        <ul>
            <li>my</li>
            <li>name</li>
            <li>is</li>
            <li>Ashik</li>
        </ul>

        <button onclick="takeData(event)">click</button>

        <button onclick="takeLi(event)">click2</button>

`
NewSection.appendChild(NewSection2)


function MakeRed(){
    document.body.style.backgroundColor = "red";
}

// add event chaera

function TakeInput(){
    // console.log("Click korsi");


    // // jar kas theke data nibo tare dhorlam
    // const InputData = document.getElementById('take-input');

    // // input field er value nilam
    // const ShowData = InputData.value ;

    // // jkhane dekhabo tare nilam
    // const takeInput = document.getElementById('Texr-p');

    // // ja dekhabo ta set korlam
    // takeInput.innerText = ShowData

    // // input field faka korlam
    // InputData.value ='';
}


// addEvent diya kaj kora


document.getElementById('update-btn').addEventListener('click', function(){


        // jar kas theke data nibo tare dhorlam
        const InputData = document.getElementById('take-input');

        // input field er value nilam
        const ShowData = InputData.value ;
    
        // jkhane dekhabo tare nilam
        const takeInput = document.getElementById('Texr-p');
    
        // ja dekhabo ta set korlam
        takeInput.innerText = ShowData
    
        // input field faka korlam
        InputData.value ='';
})

