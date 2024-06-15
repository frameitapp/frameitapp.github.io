let ua = window.navigator.userAgent;

const links = document.querySelectorAll('.commom');
links.forEach(link => {
  link.addEventListener('click', function (event) {
    links.forEach(link => {
      link.classList.remove('selected');
    });
    this.classList.add('selected');
  });
  if (link.hash && !window.location.hash && link.hash === '#home') { 
    link.classList.add("selected");
  }
  if (link.hash && window.location.hash === link.hash) {
    link.classList.add("selected");
  }
});

function getMobileOrPC() {
  let browser = {
    versions: (function () {
      let u = ua.toLowerCase();
      return {

        trident: u.indexOf('trident') > -1, //IE
        presto: u.indexOf('presto') > -1, //opera
        webKit: u.indexOf('applewebKit') > -1,
        gecko: u.indexOf('gecko') > -1 && u.indexOf('KHTML') == -1,
        mobile: u.indexOf('mobile') > -1,
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
        android: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
        iPhone: u.indexOf('iphone') > -1,
        iPad: u.indexOf('ipad') > -1,
        webApp: u.indexOf('safari') == -1
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }

  if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
    return 'phone'
  } else {
    return 'pc'
  }
}

const web = document.querySelector('.web');
const phone = document.querySelector('.phone');
if (getMobileOrPC() === 'phone') {
  web.style.display = 'none';
  phone.style.display = 'block';
  addScript('./js/phone.js');
} else {
  web.style.display = 'block';
}

function addScript(url) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', url);
  script.async = true;
  document.getElementsByTagName('body')[0].appendChild(script);
}

let flag = true;