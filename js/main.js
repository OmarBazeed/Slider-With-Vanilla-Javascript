/* 

- Start Slider(pagination ترقيم) With Vanilla Javascript

*/
let ImagesArray = document.querySelectorAll(".slider-container img")
let indicatorsDiv = document.querySelector(".indicators")

indicatorsDiv.append(CreatingUlIndicators());

let IndicatorsNumbers = document.querySelectorAll(".indicators ul li");

let sliderNumber = document.querySelector(".slider-number");

let NextClk = document.querySelector(".next")
let PreviousClk = document.querySelector(".previous")

// default moode
ImagesArray[0].classList.add("active")
IndicatorsNumbers[0].classList.add("active")
sliderNumber.innerHTML = `Slider #${document.querySelector(".slider-control .active").textContent}`
PreviousClk.classList.add("disabled")


// clicking on indicators numbers and move to next , previous image
IndicatorsNumbers.forEach((e, ii) => {
    e.addEventListener("click", () => {

        IndicatorsNumbers.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active");

        sliderNumber.innerHTML = `Slider #${ii+1}`

        ImagesArray.forEach((image, i) => {
            image.classList.remove("active");
            if (i === ii) {
                image.classList.add("active")
            }
        })

        ii == ImagesArray.length - 1 ? NextClk.classList.add("disabled") : NextClk.classList.remove("disabled");
        ii == 0 ? PreviousClk.classList.add("disabled") : PreviousClk.classList.remove("disabled");

    })
})

// clicking on next btn
NextClk.addEventListener("click", () => {
    // That Condition To Stop The Next ,Previous Btn From Doing Click And Printing Error دى من خلالها انا قدرت انى اوقف الرد او العمل بتاع الفانكشن الى هى الكليك بانى عملت الريترن بتاع الفانكشن فوولس و بكدا الفانكشن كل منتا تدوس مش هيحصل حاجه لانها بترجع فوولس و اكيد الحاله دى عند شرط معين موضح فووق بس رووعه بجد 
    if (NextClk.classList.contains("disabled")) {
        return false
    } else {
        // Moving active class To Next Image
        document.querySelector(".slider-container .active").nextElementSibling.classList.add("active")
        document.querySelector(".slider-container .active").classList.remove("active");

        // Moving active class To Next Indicators
        document.querySelector(".slider-control .active").nextElementSibling.classList.add("active")
        document.querySelector(".slider-control .active").classList.remove("active");

        document.querySelector(".slider-control .active").innerHTML == ImagesArray.length ? NextClk.classList.add("disabled") : PreviousClk.classList.remove("disabled")

        sliderNumber.innerHTML = `Slider #${document.querySelector(".slider-control .active").textContent}`
    }
})

// clicking on previous btn
PreviousClk.addEventListener("click", () => {
    if (PreviousClk.classList.contains("disabled")) {
        return false
    } else {
        // Moving active class To Next Image
        for (i = ImagesArray.length - 1; i > 0; i--) {
            if (ImagesArray[i].classList.contains("active")) {
                ImagesArray[i].classList.remove("active")
                ImagesArray[i - 1].classList.add("active");
                break;
            }
        }
        // Moving active class To Next Indicators
        for (j = IndicatorsNumbers.length - 1; j >= 0; j--) {
            if (IndicatorsNumbers[j].classList.contains("active")) {
                IndicatorsNumbers[j].classList.remove("active")
                IndicatorsNumbers[j - 1].classList.add("active");
                // adding diabled class to previous btn
                if (IndicatorsNumbers[j - 1].innerHTML == 1) {
                    PreviousClk.classList.add("disabled")
                }
                // changing sliderNumber from indicators number
                sliderNumber.innerHTML = `Slider #${document.querySelector(".slider-control .active").textContent}`
                break;
            }
        }
        // removing the disabled class from next btn when we click on back btn
        if (document.querySelector(".slider-control .active").innerHTML != ImagesArray.length) {
            NextClk.classList.remove("disabled");
        }
    }
})

// Function That Takes Number Of Images You Enter In Html And Makes Indicators For Them Automatically
function CreatingUlIndicators() {
    let ul = document.createElement("ul")
    for (let i = 1; i <= ImagesArray.length; i++) {
        let Li = document.createElement("li")
        let LiText = document.createTextNode(i)
        Li.appendChild(LiText)
        ul.appendChild(Li)
    }
    return ul
}

/* End Slider(pagination ترقيم) With Vanilla Javascript */




// الحمد لله حمداً كثيراً مباركاً فيه
// الحمد لله حمداً ملئ السموات و الارض
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله حتى يرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى
// الحمد لله حمداً تطيب به النفوس 
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما فهمت و ما قرأت و ما كتبت أمانه و وديعه عندك و أسالك ان ترضه على عند حاجتى اليه فانت حسبى و نعم الوكيل ....