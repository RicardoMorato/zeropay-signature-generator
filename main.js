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

// Helper constants
const isFieldValid = {
  name: false,
  role: false,
  email: false,
  phone: false,
};

const updateValue = (e, output) => {
  output.textContent = e.target.value;
  const isValid = validateInputFields(output.classList[0], e.target.value);

  // if (isValid)
};

const handleInputAddEventListener = (input, output) => {
  input.addEventListener('input', (e) => updateValue(e, output));
};

const validateInputFields = (key, content) => {
  if (content) isFieldValid[key] = true;
  let iteratorFlag = 0;

  for (const prop in isFieldValid) {
    if (isFieldValid[prop]) iteratorFlag += 1;
  }

  if (iteratorFlag === Object.keys(isFieldValid).length) return true;

  return false;
};

handleInputAddEventListener(userNameInput, userNameOutput)
handleInputAddEventListener(userRoleInput, userRoleOutput)
handleInputAddEventListener(userEmailInput, userEmailOutput)
handleInputAddEventListener(userPhoneInput, userPhoneOutput)
