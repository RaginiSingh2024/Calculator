function appendValue(val) {
    document.getElementById("display").value += val;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      let result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (err) {
      document.getElementById("display").value = "Error";
    }
  }