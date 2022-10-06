let maxAge = 0;
let maxPerson;

let minAge = 200;
let minPerson;

function calcAges() {
  const name = document.querySelector(".name").value;
  const age = Number(document.querySelector(".age").value);
  fillPeople(name, age);

  if (age > maxAge) {
    maxAge = age;
    maxPerson = name;
  }

  if (age < minAge) {
    minAge = age;
    minPerson = name;
  }

  document.querySelector(
    ".min-age"
  ).innerHTML = `Persona Menor: ${minPerson} ${minAge}`;
  document.querySelector(
    ".max-age"
  ).innerHTML = `Persona Mayor: ${maxPerson} ${maxAge}`;
}

function fillPeople(name, age) {
  document.querySelector(
    ".table tbody"
  ).innerHTML += `<tr><td>${name}</td><td>${age}</td></tr>`;
}
