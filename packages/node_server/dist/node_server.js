var wifi = require('node-wifi');
wifi.init({
    iface: null
});
wifi.scan(function (err, networks) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(networks);
    }
});
wifi.connect({ ssid: "ssid", password: "password" }, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Connected');
});
wifi.disconnect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Disconnected');
});
wifi.deleteConnection({ ssid: "ssid" }, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Deleted');
});
wifi.getCurrentConnections(function (err, currentConnections) {
    if (err) {
        console.log(err);
    }
    console.log(currentConnections);
});
wifi.scan().then(function (networks) {
}).catch(function (error) {
});
