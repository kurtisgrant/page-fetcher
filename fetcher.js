const fs = require('fs');
const request = require('request');

const [url, filePath] = process.argv.slice(2);

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('Writing:\n\n', body.slice(0, 200) + '...... (cont.)'); // Print the HTML for the Google homepage.
  console.log('\nto: ', filePath);

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('\nWritting complete.');
    }
  });

});


