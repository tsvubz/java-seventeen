function displayData() {
  const fname = document.querySelector('#fname');
  const lname = document.querySelector('#lname');
  const phone = document.querySelector('#phone');
  const name = document.querySelector('#name');
  const surname = document.querySelector('#surname');
  const tele = document.querySelector('#tele');
  name.textContent = `Name: ${fname.value}`;
  surname.textContent = `Surname: ${lname.value}`;
  tele.textContent = `Telephone number: ${phone.value}`;
}

const viewButton = document.querySelector('#view');
viewButton.addEventListener('click', displayData);