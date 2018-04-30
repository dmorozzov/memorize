import express from "express";
import path from "path";
import proxy from "http-proxy-middleware";

const PORT = 7700;
const PUBLIC_PATH = __dirname + "/public";
const app = express();

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.babel").default;
  const compiler = webpack(webpackConfig);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      hot: true,
      stats: {
        colors: true
      }
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
}

// app.use('/api/*', proxy('localhost:8080/', {
//     proxyReqPathResolver: function(req) {
//       console.log(req.originalUrl);
//       return require('url').parse(req.originalUrl).path;
//     }
// }));

var apiProxy = proxy("/api", { target: "http://localhost:8080/" });
app.use(apiProxy);

app.all("/", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, "index.html"));
});

app.listen(PORT, function() {
  console.log("Listening on port " + PORT + "...");
});
