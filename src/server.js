import path from "path";
import express from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Layout from "./components/Layout";

const app = express();
const PORT = process.env.PORT || 5000

app.use( express.static( path.resolve( __dirname, "public" ) ) );

app.get( "/*", ( req, res ) => {
  const context = { };
  const jsx = (
    <StaticRouter context={ context } location={ req.url }>
      <Layout />
    </StaticRouter>
  );
  const reactDom = renderToString( jsx);

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate( reactDom ) );
} );

app.listen( PORT, () => console.log(`Listening on ${ PORT }`) );

function htmlTemplate( reactDom ) {
  return `
         <!DOCTYPE html>
         <html>
         <head>
             <meta charset="utf-8">
             <title>React SSR</title>
         </head>

         <body>
             <div id="app">${ reactDom }</div>
             <script src="./app.bundle.js"></script>
         </body>
         </html>
  `;
}
