const cmd = require('node-cmd');

cmd.get(`tslint -c tslint.json src/**/*.ts`, (err, data, stderr) => {
    if(data) {
        throw Error(data);
    };
});
