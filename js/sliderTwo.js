var sliderTwo = document.getElementById("sliderTwo");
        var outputTwo = document.getElementById("demo2");
        output.innerHTML = sliderTwo.value;
        
        sliderTwo.oninput = function() {
            outputTwo.innerHTML = this.value;
        }