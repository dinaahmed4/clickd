// start button section without loop

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector("#red").onclick = function () {
//         document.querySelector("#exampled").getElementsByClassName.color = "red";
//     }
//     document.querySelector("#blue").onclick = function () {
//         document.querySelector("#example").getElementsByClassName.color = "blue";
//     }
//     document.querySelector("#green").onclick = function () {
//         document.querySelector("#example").getElementsByClassName.color = "green";
//     }

// });

// End button section without loop


// start button section 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("button").forEach(function (button) {
        button.onclick = function () {
            document.querySelector("#example").style.color = button.dataset.color;
        }
    })
});


// End button section 


//start form section 

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = function () {
        var value = document.querySelector("#creative").value;
        var result = document.querySelector("#output");
        if (value == "") {
            return false;
        } else {
            var myLi = document.createElement("li");
            myLi.innerHTML = value;
            result.appendChild(myLi);
            document.querySelector("#creative").value = "";
            return false;
        }
    }

});

// End form section 