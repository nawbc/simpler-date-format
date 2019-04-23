const SimplerDateFomat = require('../index');

const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ,'Sunday'];

const fa = new SimplerDateFomat('h:m:s Y/M/D @');

const fd = new SimplerDateFomat('h:m:s Y/M/D @', weekday);

const fc = new SimplerDateFomat('Y/M/D');

const fe = new SimplerDateFomat('h:m:s');

console.log(fa.format(new Date()), fd.format(new Date()))



