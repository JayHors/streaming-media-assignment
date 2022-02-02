const http = require('http');
const url = require('url');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3500;

const urlHandles = {
  '/': htmlHandler.getIndex,
  '/index': htmlHandler.getIndex,
  '/index.html': htmlHandler.getIndex,
  '/party.mp4': mediaHandler.getParty,
  '/page2': htmlHandler.getIndex2,
  '/bling.mp3': mediaHandler.getBling,
  '/bird.mp4': mediaHandler.getBird,
  '/page3': htmlHandler.getIndex3,
};

function onRequest(request, response) {
  console.log(request.url);
  const parsedUrl = new url.URL(request.url,"https://media-streaming-jay-98741.herokuapp.com/");

  if (urlHandles[parsedUrl.pathname]) {
    urlHandles[parsedUrl.pathname](request, response);
  } else {
    urlHandles['/'](request, response);
  }
}

http.createServer(onRequest).listen(port, () => { console.log(`Listening on localhost port ${port}`); });
