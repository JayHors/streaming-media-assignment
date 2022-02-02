const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

function getHtmlPage(request, response, file) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(file);
  response.end();
}

function getIndex(request, response) {
  getHtmlPage(request, response, index);
}
function getIndex2(request, response) {
  getHtmlPage(request, response, index2);
}
function getIndex3(request, response) {
  getHtmlPage(request, response, index3);
}
module.exports = {
  getIndex, getIndex2, getIndex3
};
