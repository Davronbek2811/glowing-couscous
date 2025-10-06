const darkBtn = document.getElementById('themeToggle');
const boxer = document.getElementById('boxer');
const body = document.body;

fetch('https://restcountries.com/v3.1/region/europe')
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            const box = document.createElement('div');
            box.innerHTML = `
                <img class='img' src="${item.flags.png}" alt="${item.name.common}">
                <h1>${item.name.common}</h1>
                <p>${item.name.official}</p>
            `;
            box.classList.add('box');
            boxer.appendChild(box);
        });
    })
    .catch(error => console.log(error.message));

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    darkBtn.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});