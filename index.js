const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const predictions = [
    `All your wishes and plans will come true.`,
    `It's time to pack your bags: a trip in pleasant company awaits you.`,
    `Now is a turning point in your life, on which the future depends.`,
    `Do not disregard the opinions of others. There are people around you who sincerely want to help.`,
    `It's time to express yourself, even if someone does not like it.`,
    `For many years you will be accompanied by happiness, health, luck and prosperity.`,
    `An unexpected receipt of money awaits you, which will correct your shaken financial situation.`,
    `Do not be upset if things do not go the way you would like it to, good luck is already on the threshold.`,
    `Your relationship with your loved one will last a long time if you do not tell strangers about them.`,
]

button.addEventListener('click', function () {
    let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    par.textContent = randomPrediction;
    par.style.display = 'block';
    anim()
})

function anim() {
    gsap.from('.containerTwo', {opacity: 0, duration: 1.5, delay: 0.5})
}

gsap.from('#btn', {opacity: 0, duration: 1.5, delay: 1})