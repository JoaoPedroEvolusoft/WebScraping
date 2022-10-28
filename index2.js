const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.tramontina.com.br/p/62516223-113-panela-de-pressao-tramontina-solar-em-aco-inox-fundo-triplo-com-5-dispositivos-de-seguranca-22-cm-6-l');
//   await page.screenshot({path: 'example.png'});


//clica no component do codigo
// await page.click('#pages-search')
// await page.click('#skrollr-body > main > div > section > div.search-content__products > div > div.product__img > a')
// await page.waitForSelector('.newTitle')


 const imgList= await page.evaluate(() => {
// toda essa funçao sera executada no browser
//vamos pegar todas as imagens q estao na parte de postes
        const nodeList = document.querySelectorAll('ul img')
//transformar o nodeList em array
        const imgArray = [...nodeList]
//transformar os nodes (elements html) em objetos js
        const imglist= imgArray.map( ({src}) => ({
            src
        })) 
//colocar para fora da funçao
        return imglist;
    }  );

//escrever os dados em um arquivo local(json)
fs.writeFile('imagens.json',JSON.stringify(imgList, null, 2),err => {
    if(err) throw new Error('Something went wrong')

    console.log('well done')
})


  await browser.close();
})();