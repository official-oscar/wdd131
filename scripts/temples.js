const year = document.querySelector('#currentyear');
const today = new Date();
year.textContent = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});