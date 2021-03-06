const indexRoutes = require('./routes/index-routes');
const swaggerUi = require('express-swaggerize-ui');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a server BackEnd of project Shareeat',
            title: 'Share Eat',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api/v1/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
const expressSwagger = require('express-swagger-generator')(app);

let allowedOrigins = 'http://localhost:8080';

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use('/api-docs', swaggerUi());
app.use(bodyParser.json());
app.use('/', indexRoutes);
expressSwagger(options)

app.use('/api/v1/', function (req, res) {
    res.json(require('./path/to/swaggerize/docs.json'));
  });

module.exports = app;
