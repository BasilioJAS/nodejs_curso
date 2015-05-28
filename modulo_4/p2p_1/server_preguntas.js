var express = require ("express");
//var tag = require("./tag");
//var path = require ("path");
var app= express();

app.get("/preguntas", 
	function (req, res){
        console.log("asdasdasdasd");
        var str = createHtmlPreguntas();
        console.log(str);

        res.send (str);
	}
);

app.get("/respuestas", function (req, res){
	var a = req.query.respuesta;
	var b = req.query.id;
	console.log (a);
	console.log (b);

}

);

//app.use(express.static(path.join(__dirname, "public")));

app.listen(8000);

function addTabs (count)
{
	var str = "";
	for (var i = 0 ; i<count ; i++)
	{
		str += "\t";
	}
	return str;
}
function endLine ()
{
	return "\n";
}



/**/


function createHtmlPreguntas()
{
    var strHtml = "";

    var html = tag("html");
    var head = tag("head");
    var headTitle = tag("title");
    var headMeta = tag("meta", true);
    var body = tag("body");
    var bodyForm_1 = tag("form");
    var bodyFormInputText_1 = tag("input", true);
    var bodyFormInputHidden_1 = tag("input", true);
    var bodyFormInputSubmit_1 = tag("input", true);
    var bodyFormT3_1 = tag("t3");
    var bodyForm_2 = tag("form");
    var bodyFormInputText_2 = tag("input", true);
    var bodyFormInputHidden_2 = tag("input", true);
    var bodyFormInputSubmit_2 = tag("input", true);
    var bodyFormT3_2 = tag("t3");
    var br = tag("br",true);

    headTitle.addValue("el texto del titulo");
    headMeta.addProperty("charset", "UTF-8");


    bodyForm_1.addProperty("method", "get");
    bodyForm_1.addProperty("action", "/preguntas");
    bodyFormInputText_1.addProperty("type", "text");
    bodyFormInputText_1.addProperty("name", "respuesta");
    bodyFormInputText_1.addProperty("value", "escriba su respuesta");
    bodyFormInputHidden_1.addProperty("type", "hidden");
    bodyFormInputHidden_1.addProperty("name", "id");
    /**/
    bodyFormInputHidden_1.addProperty("value", 1);
    bodyFormT3_1.addValue("quien descubrio america")
    /**/
    bodyFormInputSubmit_1.addProperty("type", "submit");
    bodyFormInputSubmit_1.addProperty("value", "contestar");
    bodyForm_1.addChildren(bodyFormT3_1);

    bodyForm_1.addChildren(bodyFormInputText_1);
    bodyForm_1.addChildren(bodyFormInputHidden_1);
    bodyForm_1.addChildren(bodyFormInputSubmit_1);


    bodyForm_2.addProperty("method", "get");
    bodyForm_2.addProperty("action", "/preguntas");
    bodyFormInputText_2.addProperty("type", "text");
    bodyFormInputText_2.addProperty("name", "respuesta");
    bodyFormInputText_2.addProperty("value", "escriba su respuesta");
    bodyFormInputHidden_2.addProperty("type", "hidden");
    bodyFormInputHidden_2.addProperty("name", "id");
    /**/
    bodyFormInputHidden_2.addProperty("value", 2);
    bodyFormT3_2.addValue("capital de portugal")
    /**/
    bodyFormInputSubmit_2.addProperty("type", "submit");
    bodyFormInputSubmit_2.addProperty("value", "contestar");
    bodyForm_2.addChildren(bodyFormT3_2);

    bodyForm_2.addChildren(bodyFormInputText_2);
    bodyForm_2.addChildren(bodyFormInputHidden_2);
    bodyForm_2.addChildren(bodyFormInputSubmit_2);


    body.addChildren(bodyForm_1);
    body.addChildren(br);
    body.addChildren(bodyForm_2);
    head.addChildren(headTitle);
    head.addChildren(headMeta);
    html.addChildren(head);
    html.addChildren(body);
    strHtml = "<!DOCTYPE html>\n" + html.createHtml();
    //console.log(strHtml);
    return strHtml;
}
//"use strict";

function tag (tagName, close)
{
    var _close = close || false;
    var _tagName = tagName;
    var _childrens = [];
    var _prop = {};
    var _value = "";

    function createHtml(tabPos) {
        var tabPosition = tabPos || 0;
        var htmlText = "";
        htmlText += addTabs(tabPosition);
        htmlText += "<" + _tagName;
        for (var name in _prop) {
            htmlText += " " + name + "='" + _prop[name] + "'";
        }
        if (_close) {
            htmlText += "/>";
            htmlText += endLine();
        }
        else {
            htmlText += ">";
            htmlText += endLine();
            if (_value) {
                htmlText += addTabs(tabPosition + 1);
                htmlText += _value;
                htmlText += endLine();
            }
            for (var children in _childrens) {
                htmlText += _childrens[children].createHtml(tabPosition + 1);
            }
            htmlText += addTabs(tabPosition);
            htmlText += "</" + _tagName + ">";
            htmlText += endLine();
        }
        return htmlText;
    }

    function addChildren(children) {
        _childrens.push(children);
    }

    function addValue(value) {
        _value = value;
    }

    function addProperty(name, value) {
        _prop[name] = value;
    }

    function addTabs(count) {
        var str = "";
        for (var i = 0; i < count; i++) {
            str += "\t";
        }
        return str;
    }

    function endLine() {
        return "\n";
    }

    return {
        createHtml: createHtml,
        addValue: addValue,
        addProperty: addProperty,
        addChildren: addChildren
    }
}



/**/













