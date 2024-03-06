function submitName() {
    const enteredName = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${enteredName}!`;
    updateUI(greetingMessage);
  }
  function updateUI(message) {
    document.getElementById('greetingMessage').innerText = message;
  }
  //module.exports = { submitName, updateUI };