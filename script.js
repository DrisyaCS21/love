let yesButtonSize = 1;
let goBackButtonSize = 1;
let noClickCount = 0;
let noClickCount2 = 0;

const homePage = document.getElementById('homePage');
const thinkAgainPage = document.getElementById('thinkAgainPage');
const successPage = document.getElementById('successPage');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const goBackBtn = document.getElementById('goBackBtn');
const noBtn2 = document.getElementById('noBtn2');

const homeGif = document.getElementById('homeGif');
const thinkAgainGif = document.getElementById('thinkAgainGif');

const beggingGifs = [
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDRhem1hNjM3bHpiOXAxYnRoeWRnOWg1MGhtem92OGE5cHR1OGdmMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9re9qu4Wxv0aT86rno/giphy.gif',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjhheWFybXZ6dmc5dzdzYW5xYWJyM215MW90ZndpbmRjM3N3ZnkwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I1nwVpCaB4k36/giphy.gif',
    'https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif',
    'https://media.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif'
];

const sadBeggingGifs = [
    'https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif',
    'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif',
    'https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif'
];

yesBtn.addEventListener('click', () => {
    showPage(successPage);
    createHearts();
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    yesButtonSize += 0.3;
    yesBtn.style.transform = `scale(${yesButtonSize})`;
    
    homeGif.src = beggingGifs[Math.min(noClickCount - 1, beggingGifs.length - 1)];
    
    if (noClickCount >= 3) {
        showPage(thinkAgainPage);
        noClickCount = 0;
        yesButtonSize = 1;
        yesBtn.style.transform = 'scale(1)';
        homeGif.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25pZ2tnM2l4aTVrYXV1ZzBzMWRxMTVsdDU5d2Y0aGc4ajlhMDlmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3KYGq82Lb74TbVXLVc/giphy.gif';
    }
});

goBackBtn.addEventListener('click', () => {
    showPage(homePage);
    goBackButtonSize = 1;
    goBackBtn.style.transform = 'scale(1)';
    goBackBtn.style.position = 'relative';
    goBackBtn.style.width = 'auto';
    goBackBtn.style.height = 'auto';
    goBackBtn.style.borderRadius = '50px';
    noClickCount2 = 0;
    thinkAgainGif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHE4ZDR5dGZvYnN5bWJ6YzR5cWJ5dGZvYnN5bWJ6YzR5cWJ5dGZvYnN5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif';
});

noBtn2.addEventListener('click', () => {
    noClickCount2++;
    goBackButtonSize += 0.5;
    goBackBtn.style.transform = `scale(${goBackButtonSize})`;
    
    thinkAgainGif.src = sadBeggingGifs[Math.min(noClickCount2 - 1, sadBeggingGifs.length - 1)];
    
    if (goBackButtonSize >= 8) {
        goBackBtn.style.position = 'fixed';
        goBackBtn.style.top = '0';
        goBackBtn.style.left = '0';
        goBackBtn.style.width = '100vw';
        goBackBtn.style.height = '100vh';
        goBackBtn.style.borderRadius = '0';
        goBackBtn.style.zIndex = '9999';
    }
});

function showPage(page) {
    homePage.classList.remove('active');
    thinkAgainPage.classList.remove('active');
    successPage.classList.remove('active');
    page.classList.add('active');
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts-animation');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}