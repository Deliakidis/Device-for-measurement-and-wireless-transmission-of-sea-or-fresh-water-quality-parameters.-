/*var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var dataNTUPath = 'test/ntu';
// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseNTU = database.ref(dataNTUPath);
// Variables to save database current values
var floatReading;
var intReading;
var NTUReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});
databaseNTU.on('value', (snapshot) => {
  NTUReading = snapshot.val();
  console.log(NTUReading);
  document.getElementById("reading-ntu").innerHTML = NTUReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


*/
var chartP = new Highcharts.Chart({
  chart:{ renderTo:'chart-humidity' },
  title: { text: 'PH' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'PH ' }
  },
  credits: { enabled: false },
  accessibility: {
    enabled: false
  }
});


var chartN = new Highcharts.Chart({
  chart:{ renderTo:'chart-pressure' },
  title: { text: 'Turbidity' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'NTU' }
  },
  credits: { enabled: false },
  accessibility: {
    enabled: false
  }
});










   
  var chartT = new Highcharts.Chart({
  chart:{ renderTo : 'chart-temperature' },
  title: { text: ' Temperature' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#059e8a' }
  },
  xAxis: { type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Temperature (Celsius)' }
    //title: { text: 'Temperature (Fahrenheit)' }
  },
  credits: { enabled: false },
  accessibility: {
    enabled: false
  }
});

 
/*var ref = firebase.database().ref('test/int');
  
  ref.on("value", function(snapshot) {
  
     
    


  
}, function (error) {
  console.log("Error: " + error.code);
});*/


var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var dataNTUPath = 'test/ntu';
// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseNTU = database.ref(dataNTUPath);
// Variables to save database current values
var floatReading;
var intReading;
var NTUReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  y=floatReading;
  var x = (new Date()).getTime();
       
      
    
  chartP.series[0].addPoint({x, y});
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});



databaseNTU.on('value', (snapshot) => {
  NTUReading = snapshot.val();
  y=NTUReading;
  var x = (new Date()).getTime();
       
      
    
  chartN.series[0].addPoint({x, y});
  console.log(NTUReading);
  document.getElementById("reading-ntu").innerHTML = NTUReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});


databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  y=intReading;
  var x = (new Date()).getTime();
       
      
    
  chartT.series[0].addPoint({x, y});
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});




 
 
    
  
  
