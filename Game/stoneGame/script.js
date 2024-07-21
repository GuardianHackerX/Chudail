const home = document.querySelector('.game');
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

refreshCSS = () => {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                .split('?')[0];

            let newHref = href + '?version='
                + new Date().getMilliseconds();

            links[i].setAttribute('href', newHref);
        }
    }
}

a = 'null';
do {
    a = prompt('Enter your name: ')
    refreshCSS();
} while (a == null || a == '');
refreshCSS();

home.addEventListener('click', () => {
    e.preventDefault();
})

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";


        optionImages.forEach((image2, index2) => {


            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");


        let time = setTimeout(() => {
            gameContainer.classList.remove("start");


            let imageSrc = e.target.querySelector("img").src;

            userResult.src = imageSrc;


            let randomNumber = Math.floor(Math.random() * 3);

            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];

            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ["R", "P", "S"][randomNumber];

            let userValue = ["R", "P", "S"][index];


            let outcomes = {
                RR: "Draw",
                RP: "Computer",
                RS: a,
                PP: "Draw",
                PR: a,
                PS: "Computer",
                SS: "Draw",
                SR: "Computer",
                SP: a,
            };


            let outComeValue = outcomes[userValue + cpuValue];


            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500);
    });
});