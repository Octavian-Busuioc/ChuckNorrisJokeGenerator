var sliderFour = document.getElementById("sliderFour");
        var outputFour = document.getElementById("demo4");
        output.innerHTML = sliderFour.value;
        
        sliderFour.oninput = function() {
            outputFour.innerHTML = this.value;
        }