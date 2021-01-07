// Inputs
const userNameInput = document.querySelector('input[name="name"]');
const userRoleInput = document.querySelector('input[name="role"]');
const userEmailInput = document.querySelector('input[name="email"]');
const userPhoneInput = document.querySelector('input[name="phone"]');

// Outputs
const userNameOutput = document.querySelector('.name');
const userRoleOutput = document.querySelector('.role');
const userEmailOutput = document.querySelector('.email');
const userPhoneOutput = document.querySelector('.phone');

const updateValue = (e, output) => {
  output.textContent = e.target.value;
};

const handleInputAddEventListener = (input, output) => {
  input.addEventListener('input', (e) => updateValue(e, output));
};

handleInputAddEventListener(userNameInput, userNameOutput)
handleInputAddEventListener(userRoleInput, userRoleOutput)
handleInputAddEventListener(userEmailInput, userEmailOutput)
handleInputAddEventListener(userPhoneInput, userPhoneOutput)
