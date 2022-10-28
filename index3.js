const puppeteer = require('puppeteer');
require('dotenv').config();


(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.tramontina.com.br/busca?q=panela');
//   await page.screenshot({path: 'example.png'});
await page.click('[id="onetrust-accept-btn-handler"]')



await page.click('[li h2 a href="https://www.tramontina.com.br/busca?q=panela"]')



//   await browser.close();
})();