window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
};