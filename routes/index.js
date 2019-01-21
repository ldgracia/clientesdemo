var express = require('express');
var router = express.Router();

let clientNumber=0;

let client=[
  {
      "nombre": "Luis",
      "apellido": "Garcia",
      "direccion": [
          {
              "calle": "Prol Pto Unico",
              "numero": 123
          }, {
              "calle": "Cerrada Unicanal",
              "numero": 2969
          }
      ],
      "telefono": [
          {
              "numero": "+6655887744",
              "descripcion": "Telefono de casa"
          }, {
              "calle": "+558899663322",
              "descripcion": "Telefono de trabajo"
          }
      ]
  }
];

let clientResult=
{
    "cliente": "CLI00393484HH?",
    "status": "OK"
};

let clientJson=JSON.stringify(client,null,2);


/* GET clientes collection */
router.get('/clientes', function(req, res, next) {
  res.setHeader('content-type', 'application/json');
  res.send(clientJson);
});

/* POST create cliente */
router.post('/clientes', function(req, res, next) {
  clientNumber++;
  res.setHeader('content-type', 'application/json');
  res.setHeader('Location', clientNumber);
  res.send(clientResult);
});

module.exports = router;
