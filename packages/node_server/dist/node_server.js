"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let wifi = require('node-wifi');
let wirelessToolsHostApd = require('wireless-tools/hostapd');
class node_server {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.__createAccessPoint();
            }
            catch (e) {
                return Error('No Bueno when running. Error said: ' + e);
            }
        });
    }
    __createAccessPoint() {
        return __awaiter(this, void 0, void 0, function* () {
            const hostapdOptions = {
                channel: 6,
                driver: 'rtl871xdrv',
                hw_mode: 'g',
                interface: 'wlan0',
                ssid: 'RaspberryPi',
                wpa: 2,
                wpa_passphrase: 'raspberry'
            };
            return yield new Promise((resolve, reject) => {
                wirelessToolsHostApd.enable(hostapdOptions, (err) => {
                    if (!err) {
                        reject(err);
                        return err;
                    }
                    console.log('access point created');
                    resolve();
                });
            });
        });
    }
    __scanWireless() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                wifi.init({
                    iface: null
                });
                wifi.scan(function (err, networks) {
                    if (err) {
                        console.log(err);
                        reject(err);
                        return err;
                    }
                    else {
                        console.log(networks);
                        resolve(networks);
                    }
                });
            });
        });
    }
}
exports.node_server = node_server;
let instanceOfNodeServer = new node_server();
instanceOfNodeServer.run();
