"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Index(client) {
    return function (req, res) { return res.render('index', { ships: ['test'] }); };
}
exports.default = Index;
