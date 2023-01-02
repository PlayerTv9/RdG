"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = 5000;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.send("Benvenuto su Babel + ExpressJS!");
});
app.listen(port, function () {
  console.log("L'app \xE8 stata avviata alla porta http://localhost:" + port);
});
