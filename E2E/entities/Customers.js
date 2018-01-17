"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EntitySet_1 = require("../../src/EntitySet");
var Customers = (function (_super) {
    __extends(Customers, _super);
    function Customers(endPoint, token) {
        var _this = _super.call(this, endPoint, token) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    return Customers;
}(EntitySet_1.EntitySet));
exports.Customers = Customers;
