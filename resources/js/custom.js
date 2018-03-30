// Event listener for user to submit the form
document.querySelector('form').addEventListener('submit', submitForm);

// Input Variables for form
function checkFormInputs() {
  var nameInputField = document.querySelector('#name');
  var emailInputField = document.querySelector('#mail');
  var numberInputField = document.querySelector('#number');
  var cityInputField = document.querySelector('#city');
  var stateSelect = document.querySelector('#state');
  var zipInputField = document.querySelector('#zip');
  var radios = document.getElementsByName('format');
  var newsLetter = document.getElementsByName('user_interest');


  var values = [nameInputField, emailInputField, numberInputField, cityInputField, stateSelect, zipInputField];
  var errorFound = false;

  // adding the class 'error' to any input without data
  for (var i = 0; i < values.length; i++) {
    var field = values[i];
    if (!field.value || stateSelect.value === 'Choose State') {
      field.classList.add('error');
      field.placeholder = "Field can't be blank";
      errorFound = true;
    } else {
      field.classList.remove('error');
    }
  }

  // Check if any field had an error, if not, submit data somewhere
  if (!errorFound) {
    // save data to databasae
  }
}

function submitForm(e) {
  e.preventDefault(); // prevent defualt action of the form refreshing page 
  checkFormInputs();
}
