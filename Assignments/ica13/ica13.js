const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];
  
const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}
  
const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function anim() {
    const al1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
    if (al1) {
        alice2.animate(aliceTumbling, aliceTiming);
        const al2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
        if (al2){
            alice3.animate(aliceTumbling, aliceTiming);
        }
    }
}

anim();