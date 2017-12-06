var fs = require('fs');
var colors = require('colors');


fs.readdir('./catalog', 'utf-8', function(err, data) {
  if (err) throw err;
  console.log('Loaded!'.red);
  for (var i = 0 ; i < data.length ; i++) { 
    console.log(data[i]);
    data[i] = '\n' + (i + 1) + '. ' + data[i];
  }
  fs.writeFile('./catalog_text.txt', `catalog: ${data}`, function(err) {
    if (err) throw err;
    console.log('Saved!'.blue);
  });

});
// var fs = require('fs');
// var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });
// var fs = require('fs');
// var colors = require('colors');

// fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });