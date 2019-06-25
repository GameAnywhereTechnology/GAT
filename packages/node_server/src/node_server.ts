
let wifi = require('node-wifi');
let wirelessToolsHostApd = require('wireless-tools/hostapd');

export class node_server {
    public async run () {
        try {
            await this.__createAccessPoint();
            await this.__scanWireless();
        } catch (e) {
            return Error('No Bueno when running. Error said: ' + e);
        }
    }

    private async __createAccessPoint () : Promise<any> {
        const hostapdOptions = {
            channel: 6,
            driver: 'rtl871xdrv',
            hw_mode: 'g',
            interface: 'wlan0',
            ssid: 'RaspberryPi',
            wpa: 2,
            wpa_passphrase: 'raspberry'
        };

        return await new Promise<any>((resolve, reject) => {
            wirelessToolsHostApd.enable(hostapdOptions, (err) => {
                // the access point was created
                if (!err) {
                    reject(err);
                    return err;
                }

                resolve();
            });
        });
    }

    private async __scanWireless () {
        return await new Promise<any>((resolve, reject) => {
            // Initialize wifi module
            // Absolutely necessary even to set interface to null
            wifi.init({
                iface : null // network interface, choose a random wifi interface if set to null
            });
            
            // Scan networks
            wifi.scan(function(err, networks) {
                if (err) {
                    console.log(err);
                    reject(err);
                    return err;
                } else {
                    console.log(networks);
                    /*
                    networks = [
                        {
                        ssid: '...',
                        bssid: '...',
                        mac: '...', // equals to bssid (for retrocompatibility)
                        channel: <number>,
                        frequency: <number>, // in MHz
                        signal_level: <number>, // in dB
                        quality: <number>, // same as signal level but in %
                        security: 'WPA WPA2' // format depending on locale for open networks in Windows
                        security_flags: '...' // encryption protocols (format currently depending of the OS)
                        mode: '...' // network mode like Infra (format currently depending of the OS)
                        },
                        ...
                    ];
                    */
                   resolve(networks);
                }
            });
        });
    }
}





// const hostapdOptions = {
//     channel: 6,
//     driver: 'rtl871xdrv',
//     hw_mode: 'g',
//     interface: 'wlan0',
//     ssid: 'RaspberryPi',
//     wpa: 2,
//     wpa_passphrase: 'raspberry'
// };

// wirelessToolsHostApd.enable(hostapdOptions, (err) => {
//     // the access point was created
//     if (!err) {

//     }
// });

// // Connect to a network
// wifi.connect({ ssid : "ssid", password : "password"}, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Connected');
// });

// // Disconnect from a network
// // not available on all os for now
// wifi.disconnect(function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Disconnected');
// });

// // Delete a saved network
// // not available on all os for now
// wifi.deleteConnection({ ssid : "ssid"}, function(err) {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Deleted');
// });

// // List the current wifi connections
// wifi.getCurrentConnections(function(err, currentConnections) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(currentConnections);
//     /*
//     // you may have several connections
//     [
//         {
//             iface: '...', // network interface used for the connection, not available on macOS
//             ssid: '...',
//             bssid: '...',
//             mac: '...', // equals to bssid (for retrocompatibility)
//             channel: <number>,
//             frequency: <number>, // in MHz
//             signal_level: <number>, // in dB
//             quality: <number>, // same as signal level but in %
//             security: '...' //
//             security_flags: '...' // encryption protocols (format currently depending of the OS)
//             mode: '...' // network mode like Infra (format currently depending of the OS)
//         }
//     ]
//     */
// });

// // All functions also return promise if there is no callback given
// wifi.scan().then(function (networks) {
// // networks
// }).catch(function (error) {
// // error
// })

let instanceOfNodeServer = new node_server();
instanceOfNodeServer.run();