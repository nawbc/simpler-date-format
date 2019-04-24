# SimplerDateFormat(pattern: string,[week: Array<string>])

## This package likes java's SimpeDateFormat. But it is simpler 😜!

### 1. api 
    format(date: Date);  // format time you want
    zone(number);           // setZoneTime and format

### 2. Usage
#### english

Capital letters for date and lowercase letters for time,  letters are random,
Using space separation, The order in which you enter is the order in which you output. Use special symbols(except ~) to represent what day of the week you output.
add `~` before sentence to reverse output;

#### chinese 
日期用大写字母，时间用小写字母，字母是随机的，

使用空格分隔，输入的顺序是输出的顺序。使用特殊符号（除~）表示一周中输出的日期。

在句子前加`~`可反转输出；

```
const SimplerDateFormat = require('simpler-date-format');

const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ,'Sunday'];

var sd = new SimplerDateFormat('Y/M/D h:m:d');
sd.format(new Date());              //2019/04/23 22:36:44

var sd = new SimplerDateFormat('Y$M$D h:m:d @');
sd.format(new Date());              //2019$04$23 22:36:44 2

var sd = new SimplerDateFormat('h:m:d Y/M/D');
sd.format(new Date());              //22:36:44 2019/04/23

var sd = new SimplerDateFormat('@ h:m:d ~Y/M/D', week);
sd.format(new Date());              // Tuesday 22:36:44 04/23/2019

var sd = new SimplerDateFormat('h:m:d ~Y/M/D', week);
sd.zone(8);              //22:36:44 04/23/2019 Tuesday Beijing time

```

### 3. many functions are not added, coming soon

if you like, please star on github❤


