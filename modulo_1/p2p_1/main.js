/**
 * Created by zukutruleSSD on 23/05/2015.
 */
/**
 * Created by zukutruleSSD on 22/05/2015.
 */
/**/
console.log(Math.PI.toFixed(8));
console.log("\n");
console.log("\u55e8\uff0c\u4f60\u597d\u5417");

/*ESTE CODIGO LO DEJO ACA PARA FUTUROS USOS, NO SE USA EN ESTE EJERCICIO * /
 var http = require('http');
 var server = http.createServer(function (request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});

 response.write(Math.PI.toFixed(8));
 response.write("\n\n\n");
 response.end("\u55e8\uff0c\u4f60\u597d\u5417");
 });
 // Listen on port 8000, IP defaults to 127.0.0.1
 server.listen(8000);

 // Put a friendly message on the terminal
 console.log("Server running at http://127.0.0.1:8000/");
 */
