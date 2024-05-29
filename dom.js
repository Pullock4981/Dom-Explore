// console.log("hi, i am your js");/
// console.log(document);

// tagName diya access kora jay.

const tagNameSrc = document.getElementsByTagName('h1');
// console.log(tagNameSrc);

const Takeli = document.getElementsByTagName('li')
for (const li of Takeli) {
    // console.log(li.innerText);
}

const HeadingTake = document.getElementsByTagName('h1');
for (const h1 of HeadingTake) {
    // console.log(h1.innerText)
}

function takeData() {
    const HeadingTake = document.getElementsByTagName('h1');
    for (const h1 of HeadingTake) {
        console.log(h1.innerText)
    }
}

function takeLi(event) {
    const Takeli = document.getElementsByTagName('li')
    for (const li of Takeli) {
    console.log(li.innerText);
    }
}

// tagName
const findH1 = document.getElementsByTagName('h1');
// console.log(findH1);
for (const h1 of findH1) {
    // console.log(h1.innerText);
}

// className

const ClassTake = document.getElementsByClassName("li-class");
// console.log(ClassTake)

for (const li of ClassTake) {
    // console.log(li.innerText)
}

// query Selector

const QSelector = document.querySelectorAll('.li-class li')
// console.log(QSelector.innerText)
for (const li of QSelector) {
    // console.log(li.innerText)
}


function Click3(event) {
    const ClassTake = document.getElementsByClassName("li-class");
    // console.log(ClassTake)

    for (const li of ClassTake) {
        // console.log(li.innerHTML)
    }
}