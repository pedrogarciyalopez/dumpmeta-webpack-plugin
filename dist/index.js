"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DumpMetaPlugin = void 0;
var fs_1 = __importDefault(require("fs"));
var DumpMetaPlugin = /** @class */ (function () {
    function DumpMetaPlugin(options) {
        this.options = __assign({ filename: 'meta.json', prepare: function (stats) { return ({ hash: stats.hash }); } }, options);
    }
    DumpMetaPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.done.tap(this.constructor.name, function (stats) {
            var json = JSON.stringify(_this.options.prepare(stats), null, 2);
            return new Promise(function (resolve, reject) {
                fs_1.default.writeFile(_this.options.filename, json, 'utf8', function (error) {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            });
        });
    };
    return DumpMetaPlugin;
}());
exports.DumpMetaPlugin = DumpMetaPlugin;
