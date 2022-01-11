var sliderThree = document.getElementById("sliderThree");
        var outputThree = document.getElementById("demo3");
        output.innerHTML = sliderThree.value;
        
        sliderThree.oninput = function() {
            outputThree.innerHTML = this.value;
        }