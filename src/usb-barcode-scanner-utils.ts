import { Device, devices } from 'node-hid';
import _ from 'lodash';

export function getDevices(): Device[] {
    return devices();
}

export function getDevice(vendorId: number, productId: number): Device|undefined {
    return _.find(getDevices(), { 'vendorId': vendorId, 'productId': productId });
}

export function getDeviceByPath(path: string): Device|undefined {
    return _.find(getDevices(), { 'path': path });
}

export function defaultHidMap(): Object {
    return {
        4: "a",
        5: "b",
        6: "c",
        7: "d",
        8: "e",
        9: "f",
        10: "g",
        11: "h",
        12: "i",
        13: "j",
        14: "k",
        15: "l",
        16: "m",
        17: "n",
        18: "o",
        19: "p",
        20: "q",
        21: "r",
        22: "s",
        23: "t",
        24: "u",
        25: "v",
        26: "w",
        27: "x",
        28: "y",
        29: "z",
        30: "1",
        31: "2",
        32: "3",
        33: "4",
        34: "5",
        35: "6",
        36: "7",
        37: "8",
        38: "9",
        39: "0",
        40: "enter",
        43: "\t",
        44: " ",
        45: "-",
        46: "=",
        47: "[",
        48: "]",
        49: "\\",
        51: ";",
        52: "'",
        53: "`",
        54: ",",
        55: ".",
        56: "/",
        85: "*",
        87: "+"
    }
}