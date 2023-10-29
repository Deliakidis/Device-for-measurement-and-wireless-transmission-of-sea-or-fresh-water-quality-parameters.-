
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
var y;





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
  y= intReading;
  y=y/40;
  console.log(y);
  heatmapLayer.setData({ 
   data: [{ lat: 40.849136     ,  lng:      25.879326  , count: y}]
 });
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});




