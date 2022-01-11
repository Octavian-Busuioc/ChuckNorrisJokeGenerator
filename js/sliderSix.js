var sliderSix = document.getElementById("sliderSix");
        var outputSix = document.getElementById("demo6");
        output.innerHTML = sliderSix.value;
        
        sliderSix.oninput = function() {
            outputSix.innerHTML = this.value;
        }