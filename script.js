const container = document.querySelector(".card-container");
const leftBtn = document.querySelector(".leftbtn");
const rightBtn = document.querySelector(".rightbtn");

let cardWidth = container.offsetWidth - 25;

window.addEventListener("resize", () => {
    cardWidth = container.offsetWidth - 25;
    updateButtons();
});



function updateButtons() {
    // Hide left button 
    if (container.scrollLeft <= 0) {
        leftBtn.style.display = "none";
    } else {
        leftBtn.style.display = "flex";
    }

    // Hide right button
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        rightBtn.style.display = "none";
    } else {
        rightBtn.style.display = "flex";
    }
}


// Scroll functions
rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -cardWidth, behavior: "smooth" });
});


// keyboard evnts
document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    const typing = tag === "INPUT" || tag === "TEXTAREA" || document.activeElement?.isContentEditable;
    if (typing) return;

    if (e.key === "ArrowRight") {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
});


container.addEventListener("scroll", updateButtons);
updateButtons();

// changing the plus sign to cross on clicking
// const qna = document.querySelectorAll(".qna");

// qna.forEach((item) => {
//     const icon = document.querySelector(".plus");
//     item.addEventListener("click", () => {
//         icon.classList.toggle("cross");

//     });
// });
// const qna = document.querySelectorAll(".question");
// qna.forEach((item) => {
//     item.addEventListener("click", () => {
//         const icon = item.querySelector("svg");
//         icon.classList.toggle("cross");

//     }
// })

// -----------question------------

let question = document.querySelectorAll(".question");
let answer = document.querySelector(".answer");


const totalHeight = answer.scrollHeight + 10;
question.forEach(question => {
    question.addEventListener("click", function () {
        let answer = this.nextElementSibling;
        const icon = this.querySelector("svg");
        if (icon) {
            icon.classList.toggle("cross");
        }
        if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
            answer.style.maxHeight = "0px";
            answer.style.paddingTop = "0px ";
            answer.style.paddingBottom = "0px ";
            answer.style.fontSize = "0px";
        } else {
            answer.style.maxHeight = totalHeight + "px";
            answer.style.paddingTop = "5px ";
            answer.style.paddingBottom = "5px ";
            answer.style.fontSize = "large";

        }
    });
});
