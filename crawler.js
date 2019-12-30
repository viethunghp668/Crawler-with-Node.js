const http = require('http');
const request = require('request');
const puppeteer = require('puppeteer');
const rl = require('readline-sync');

(async () => {
  let s = await rl.question("Xin moi nhap vao link can doc:\n");

  const browser = await puppeteer.launch();
  console.log('Xin hay doi, dang xu ly\n');
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 720 });
  await page.goto(s);

  const tit = await page.$("#chuong-title");
  const details = await page.$("#noidung");
  const titName = await page.evaluate(tit => tit.textContent, tit);
  const content = await page.evaluate(details => details.textContent, details);
  const txtResult = await titName.concat("\n", content);
  console.log(txtResult);
  console.log(txtResult.length);
  await browser.close();

  const headersObj = {
    'api-key': 'loEMtwmU9L7QIKRv0F0ZV5vOXcD6XhbC',
    'speed': '',
    'voice': 'banmai',
    'callback_url': 'http://localhost:8080'
  };
  await request.post({
    url: 'https://api.fpt.ai/hmi/tts/v5',
    headers: headersObj,
    body: txtResult,
    json: true
  }, async (err, res, body) => {
    if (err)
      throw err;
    console.log(body);
    const browser1 = await puppeteer.launch({ headless: false });
    const page1 = await browser1.newPage();
    page1.setViewport({ width: 1280, height: 720 });
    await page1.goto(body.async);
    let head1 = await page1.$("h1");
    let headContent = await page1.evaluate(head1 => head1.textContent, head1);
    while (headContent === '404 Not Found') {
      await page1.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
      let head1 = await page1.$("h1");
      headContent = await page1.evaluate(head1 => head1.textContent, head1);
      console.log('Xin hay doi, AI cua FPT dang xu ly');
    }
  })
})();
