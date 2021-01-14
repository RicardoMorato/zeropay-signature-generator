// Inputs
const userNameInput = document.querySelector('input[name="name"]');
const userRoleInput = document.querySelector('input[name="role"]');
const userEmailInput = document.querySelector('input[name="email"]');
const userPhoneInput = document.querySelector('input[name="phone"]');

// Outputs
const name = document.querySelector('.name');
const role = document.querySelector('.role');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');

// Copy actions/instructions
const copyInstructions = document.querySelector('#finish');
const copyButton = document.querySelector('.copy-button');
const clipboard = new ClipboardJS('.copy-button');

// Helper constants
const isFieldValid = {
  name: false,
  role: false,
  email: false,
  phone: false,
};

const body = {
  name: '',
  role: '',
  email: '',
  phone: '',
}

const updateValue = (e, output) => {
  output.textContent = e.target.value;
  body[output.classList[0]] = output.textContent;
  const isValid = validateInputFields(output.classList[0], e.target.value);

  if (isValid) copyInstructions.style.display = "flex";
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

const copyTextToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => console.log('Copiado com sucesso!'));
};

clipboard.on('success', () => {
  copyButton.style['background-color'] = "#00ff00";
  copyButton.style['border'] = "none";
  copyButton.style['color'] = "black";
  copyButton.textContent = "Assinatura copiada com sucesso!";
});

handleInputAddEventListener(userNameInput, name);
handleInputAddEventListener(userRoleInput, role);
handleInputAddEventListener(userEmailInput, email);
handleInputAddEventListener(userPhoneInput, phone);
