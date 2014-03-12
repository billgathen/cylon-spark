var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'spark',
    adaptor: 'spark',
    accessToken: '[YOUR_ACCESS_TOKEN]',
    deviceId: '[YOUR_DEVICE_ID]'
  },

  work: function(my) {
    my.spark.listenForEvents(["testevent"]);

    my.spark.on('testevent', function(data) {
      console.log("Test Event Received. Data:", data);
    });
  }
}).start();
