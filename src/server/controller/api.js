/**
 * Created by Aaron on 2017/6/1.
 */
var http = require("http");


exports.queryAPIs = function (request, response) {

    var result = new Object();
    var options = {
        "method": "GET",
        "hostname": "127.0.0.1",
        "port": "8001",
        "path": "/apis?size=3&offset=Mw%3D%3D",
    };


    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            var json = JSON.parse(body);

            var apiList = new Array();
            //遍历
            var length = json.data.length;
            for(var i =0 ;i<length;i++){
                var apiObject = json.data[i];



                var apiEntity = new Object();
                apiEntity.name=apiObject.name;
                apiEntity.upstream_url=apiObject.upstream_url;
                var hostArr= apiObject.hosts;
                apiEntity.host=hostArr[0];

                // console.log(apiObject);
                apiList[i]=apiEntity;
            }




            result.list=apiList;
            result.total=json.total;
            console.log(result);

            response.json(result);
        });
    });

    req.end();



}
