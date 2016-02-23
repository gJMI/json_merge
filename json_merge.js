var fs=require('fs');
var extend=require('extend');

//console.log(process.argv.length);

if (process.argv.length != 5)
{
  console.log("Usage: node json_merge.js FILE1 FILE2 RESULT");
  console.log("It merges the FILE2 into the FILE1 and save the result as RESULT file");
  process.exit(1);
}

var object1 = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var object2 = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

//console.log(object1);
//console.log(object2);

var result = extend(object1,object2);

//console.log(result);

fs.writeFileSync(process.argv[4],JSON.stringify(result,null,2),'utf8');
