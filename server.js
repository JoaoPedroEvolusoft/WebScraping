
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();

server.get('/', async(request,response)=>{

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.tramontina.com.br/p/93806102-528-cuba-de-sobrepor-tramontina-morgana-em-aco-inox-com-acabamento-acetinado-69-x-49-cm-com-valvula-dosador-de-sabao-tabua-e-cesto');
  // await page.screenshot({path: 'helloworld.png'});

  const pageContent = await page.evaluate(() => {
    return {

      subtitle: document.querySelector('.thumbnail').getAnimations
      ,
      
    };
  });

  console.log('pageContent:', pageContent);

  response.send({
    "subtitle: ": pageContent.subtitle,
  });

  await browser.close();

      response.send('Ola mundo');


});

const port=3000
server.listen(port, ()=>{
  console.log(`
  Server subiu com sucesso
  acesse em http://localhost:${port}
  `);
});



//=======
// ;(async () => {
  
// })();