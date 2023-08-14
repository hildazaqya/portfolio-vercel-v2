// Typing Text
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

const portfolioWebsite = document.getElementById('portfolio-website')
const portfolioDataScience = document.getElementById('portfolio-ds')

const buttonOne = document.getElementById('buttonAllPortfolio')
buttonOne.addEventListener('click', () => {
    if (buttonOne.checked) {
        portfolioWebsite.classList.add('portfolio-item-show')
        portfolioDataScience.classList.add('portfolio-item-show')
        portfolioWebsite.classList.remove('portfolio-item-hide')
        portfolioDataScience.classList.remove('portfolio-item-hide')
    }
})
    const buttonTwo = document.getElementById('buttonPortfolioWebsite')
    buttonTwo.addEventListener('click', () => {
        if (buttonTwo.checked) {
            portfolioWebsite.classList.add('portfolio-item-show')
            portfolioDataScience.classList.add('portfolio-item-hide')
            portfolioWebsite.classList.remove('portfolio-item-hide')
            portfolioDataScience.classList.remove('portfolio-item-show')
        }
    })

    const buttonThree = document.getElementById('buttonDS')
    buttonThree.addEventListener('click', () => {
        if (buttonThree.checked) {
            portfolioWebsite.classList.add('portfolio-item-hide')
            portfolioDataScience.classList.add('portfolio-item-show')
            portfolioWebsite.classList.remove('portfolio-item-show')
            portfolioDataScience.classList.remove('portfolio-item-hide')
        }
    })