//Exercise 13.3

process.stdin.setEncoding('utf-8');
console.log('Make your choice: OS, version, /exit?');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var question = 'Something else?';
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
          case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
          case 'OS':
            process.stdout.write("Język systemowy: " + process.env.OS + '\n');
            console.log(question);
            break;
          case 'version':
            process.stdout.write("Wersja NODE.JS: " + process.versions.node +'\n');
            console.log(question);
            break;
          default:
            process.stdout.write('Wrong instruction!\n');
        }
    }
});

/*
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if(input !== null) {
      switch(input) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        case 'OS':
            process.stdout.write("Język systemowy: " + process.env.OS);
            break;
        case 'version':
            process.stdout.write("Wersja NODE.JS: " + process.versions.node);
            break;
      }
    } else {
      process.stderr.write('Wrong instruction!\n');
  }

});
*/
