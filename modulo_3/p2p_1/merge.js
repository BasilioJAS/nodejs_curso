/**
 * Created by zukutruleSSD on 23/05/2015.
 */
var fs = require("fs")

sdfs
if (process.argv.length <4)
{
    console.log("sintaxis: 'node append <dest> <org_1>...<orgN>'");
    process.exit();
}
var fileDest = process.argv[2];
var files = process.argv.splice( 3, process.argv.length );

var file = files.shift();
if (file != undefined)
    fs.readFile(file,readFileCB);

function readFileCB(err , data){
    if (err)
        throw err;
    fs.appendFile(fileDest,data,appendFileCB);
}
function appendFileCB(err) {
    if (err)
        throw err;
    var file = files_2.shift();
    if (file != undefined)
        fs.readFile(file,readFileCB);
}
/*ESTAS ERAN PRUEBAS DE DIFERENTES MODOS* /
//MODO 1, Async, problemas con el orden de los archivos
for (var fileIndex in files) {
    fs.readFile(
        files[fileIndex],
        function(err , data){
            fs.appendFile(
                "MODO_1_" + fileDest,
                data,
                function(err) {
                    if (err) throw err;
                }
            );
        }
    );
}
//MODO 2 , SYNC, no recomendado , detiene el server para leer un archivo de un solo usuario aparentemente!
for (var fileIndex in files){
    var data = fs.readFileSync(files[fileIndex]);
    fs.appendFileSync("MODO_2_" + fileDest, data);
}
//MODO 3 , streams, Async, problemas con el orden de los archivos
var streamDest = fs.createWriteStream("MODO_3_" + fileDest,  {flags: 'a'});
for (var fileIndex in files){
    fs.createReadStream(files[fileIndex]).pipe(streamDest);
}
//MODO 4 Async, problemas con el orden de los archivos
var files_2 = files.slice();
var file = files_2.shift();
fs.readFile(file,readFileCB);
function readFileCB(err , data){
    fs.appendFile("MODO_4_" + fileDest,data,appendFileCB);
}
function appendFileCB(err) {
    if (err) throw err;
    var file = files_2.shift();
    if (file != undefined)
        fs.readFile(file,readFileCB);
}
/**/
