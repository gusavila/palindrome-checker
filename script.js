const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const inputStr = textInput.value;

  if(isFieldEmpty(inputStr)) {
    return;
  };

  showResult(inputStr);
});

const showResult = inputStr => {
  result.innerText = isPolindrome(inputStr) ? `${inputStr} is a palindrome` : `${inputStr} is not a palindrome`;
}

const isFieldEmpty = inputStr => {
  if (!inputStr) {
    window.alert("Please input a value");
    return true;
  } else {
    return false;
  }
}

const isPolindrome = inputStr => {
  const cleanStr = inputStr.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  result.classList.remove("green");
  if (cleanStr === reversedStr) {
    result.classList.add("green");
    return true;
  } else {
    result.classList.add("red");
    return false;
  };
}