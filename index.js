const axios = require('axios');
const cheerio = require('cheerio');


const url = 'https://www.tramontina.com.br/p/93806102-528-cuba-de-sobrepor-tramontina-morgana-em-aco-inox-com-acabamento-acetinado-69-x-49-cm-com-valvula-dosador-de-sabao-tabua-e-cesto';

async function getImage(){
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);


    $('.wikitable tbody tr').each((i,elem)=>{
    const name = $(elem).find('td[style*="background:#FAEB86"]').last().text();
    if(name!== '')
    console.log(name);
});
}
getImage();