const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const inputs = document.querySelectorAll('input[readonly]');

editBtn.addEventListener('click', () => {
  for (let input of inputs) {
    input.removeAttribute('readonly');
  }
  editBtn.disabled = true;
  saveBtn.disabled = false;
});
saveBtn.addEventListener('click', () => {
    for (let input of inputs) {
      input.setAttribute('readonly', true);
    }
    editBtn.disabled = false;
    saveBtn.disabled = true;
  });