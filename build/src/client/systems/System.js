"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var System = /** @class */ (function () {
    function System(client, data) {
        this.client = client;
        this.symbol = data.symbol;
        this.sectorSymbol = data.sectorSymbol;
        this.type = data.type;
        this.x = data.x;
        this.y = data.y;
        this.waypoints = data.waypoints;
        this.factions = data.factions;
    }
    return System;
}());
exports.default = System;
