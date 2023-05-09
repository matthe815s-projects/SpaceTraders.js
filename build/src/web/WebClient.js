"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./pages/index"));
var express = require('express');
var WebClient = /** @class */ (function () {
    function WebClient(client) {
        this.client = client;
        this.app = express();
        this.app.use(express.static(path_1.default.resolve(__dirname, 'public')));
        this.app.use(express.static(path_1.default.resolve(__dirname, 'build')));
        this.app.set('view engine', 'ejs');
        this.app.set('views', path_1.default.join(__dirname, '/build'));
    }
    WebClient.prototype.start = function () {
        this.app.listen(3000, function () { return console.log('Listening on port 3000'); });
        this.registerEndpoints();
    };
    WebClient.prototype.registerEndpoints = function () {
        this.app.get('/', (0, index_1.default)(this.client));
    };
    return WebClient;
}());
exports.default = WebClient;
