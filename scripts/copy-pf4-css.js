const fs = require("fs");
const path = require("path");
const source = path.resolve(__dirname, '../node_modules/@patternfly/patternfly/patternfly.min.css')
const destination = path.resolve(__dirname, "../dist/app.css")

fs.copyFile(source, destination, error => {
  if (error) {
    console.log(`ERROR: Patternfly CSS failed to copy to ${destination}`);
    throw error;
  }
  console.log(`SUCCESS: Patternfly CSS copied to ${destination}`);
});


