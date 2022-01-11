var sliderFive = document.getElementById("sliderFive");
        var outputFive = document.getElementById("demo5");
        output.innerHTML = sliderFive.value;
        
        sliderFive.oninput = function() {
            outputFive.innerHTML = this.value;
        }