window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
};