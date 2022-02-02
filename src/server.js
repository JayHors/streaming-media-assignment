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
};

function onRequest(request, response) {
  console.log(request.url);
  const parsedUrl = url.parse(request.url);

  if (urlHandles[parsedUrl.pathname]) {
    urlHandles[parsedUrl.pathname](request, response);
  } else {
    urlHandles['/'](request, response);
  }
}

http.createServer(onRequest).listen(port, () => { console.log(`Listening on localhost port ${port}`); });
