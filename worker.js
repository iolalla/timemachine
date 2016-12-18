process.on('message', function(m) {
  // Do work  (in this case just up-case the string
  m = m.toUpperCase();
    var exec = require('child_process').exec;
    var cmd = 'recorder.sh';

    exec(cmd, function(error, stdout, stderr) {
    // command output is in stdout
    // Pass results back to parent process
    console.log(`stderr: ${stderr}`);
    process.send(stdout);
    });

});
