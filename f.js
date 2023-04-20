const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const range = document.querySelector('input[type="range"]');
const ul = document.querySelector('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim(); // Remove whitespace from input value
  const importance = range.value;
  
  if (text === '') {
    alert('Please enter a to-do item.');
    return;
  }
  
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.textContent = text;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'X';
  removeButton.className = 'remove-button';
  removeButton.style.display = 'none';
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);
  ul.appendChild(li);
  input.value = '';
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const li = e.target.parentNode;
    const removeButton = li.querySelector('.remove-button');
    removeButton.style.display = e.target.checked ? 'inline' : 'none';
  } else if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentNode;
    ul.removeChild(li);
  }
});

