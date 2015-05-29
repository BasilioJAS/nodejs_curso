"use strict";
var express = require ("express");
var app= express();

app.get("/preguntas", 
	function (req, res){
        res.send (createHtmlPreguntas());
	}
);

app.get("/respuestas",
    function (req, res){
        res.send (createHtmlRespuestas(req.query.respuesta, parseInt(req.query.id)));
    }
);
app.get("*",
    function (req, res){
        res.send (createHtmlPreguntas());
    }
);


app.listen(8000);

function respuestaCorrecta(id)
{
    switch (id)
    {
        case 1:
            return "los vikingos";
        break;
        case 2:
            return "lisboa";
        break;
    }
    throw "error, id de respuesta erroneo";
}
function esCorrectaLaRespuesta(respuesta, id)
{
    if (respuesta === respuestaCorrecta(id))
    {
        return true;
    }
    else return false;
}
function createHtmlRespuestas(respuesta, id)
{
    if(esCorrectaLaRespuesta(respuesta, id))
    {
        //armo la pagina correcta
        var html = tag("html");
        var head = tag("head");
        var headTitle = tag("title");
        var headMeta = tag("meta", true);
        var body = tag("body");
        var t3 = tag("t3");

        var br = tag("br",true);
        var aHref = tag("a");
        aHref.addProperty("href", "./preguntas");
        aHref.addValue("Back");
        //<a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>
        headTitle.addValue("respuestas");
        headMeta.addProperty("charset", "UTF-8");
        t3.addValue("La respuesta '"+respuesta+"' es correcta!");
        body.addChildren(t3);

        body.addChildren(br);
        body.addChildren(aHref);

        head.addChildren(headTitle);
        head.addChildren(headMeta);
        html.addChildren(head);
        html.addChildren(body);
        return  "<!DOCTYPE html>\n" + html.createHtml();
    }
    else
    {
        respuesta = respuestaCorrecta(id);
        var html = tag("html");
        var head = tag("head");
        var headTitle = tag("title");
        var headMeta = tag("meta", true);
        var body = tag("body");
        var t3 = tag("t3");
        var br = tag("br",true);
        var aHref = tag("a");
        aHref.addProperty("href", "./preguntas");
        aHref.addValue("Back");
        headTitle.addValue("respuestas");
        headMeta.addProperty("charset", "UTF-8");
        t3.addValue("La respuesta correcta era = '"+respuesta+"'");
        body.addChildren(t3);
        body.addChildren(br);
        body.addChildren(aHref);
        head.addChildren(headTitle);
        head.addChildren(headMeta);
        html.addChildren(head);
        html.addChildren(body);
        return  "<!DOCTYPE html>\n" + html.createHtml();
    }
}
/**
 * ASCOOOOOO
 * @returns {string}
 */
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
    bodyForm_1.addProperty("action", "/respuestas");
    bodyFormInputText_1.addProperty("type", "text");
    bodyFormInputText_1.addProperty("name", "respuesta");
    bodyFormInputText_1.addProperty("value", "");
    bodyFormInputHidden_1.addProperty("type", "hidden");
    bodyFormInputHidden_1.addProperty("name", "id");
    bodyFormInputHidden_1.addProperty("value", 1);
    bodyFormT3_1.addValue("quien descubrio america");
    bodyFormInputSubmit_1.addProperty("type", "submit");
    bodyFormInputSubmit_1.addProperty("value", "contestar");
    bodyForm_1.addChildren(bodyFormT3_1);
    bodyForm_1.addChildren(bodyFormInputText_1);
    bodyForm_1.addChildren(bodyFormInputHidden_1);
    bodyForm_1.addChildren(bodyFormInputSubmit_1);
    bodyForm_2.addProperty("method", "get");
    bodyForm_2.addProperty("action", "/respuestas");
    bodyFormInputText_2.addProperty("type", "text");
    bodyFormInputText_2.addProperty("name", "respuesta");
    bodyFormInputText_2.addProperty("value", "");
    bodyFormInputHidden_2.addProperty("type", "hidden");
    bodyFormInputHidden_2.addProperty("name", "id");
    bodyFormInputHidden_2.addProperty("value", 2);
    bodyFormT3_2.addValue("capital de portugal")
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
    return strHtml;
}

/**
 * esta clase se encarga de crear un tag HTML
 * @param tagName
 * @param close
 * @returns {{createHtml: createHtml, addValue: addValue, addProperty: addProperty, addChildren: addChildren}}
 */
//TODO: averiguar como meter herencia y poder crear clases menos genericas que hereden de esta
function tag (tagName, close)
{
    var _close = close || false;
    var _tagName = tagName;
    var _childrens = [];
    var _prop = {};
    var _value = "";

    /**
     * Recorre todos los hijos y los va agregando al string que va a devolver, agregado tabs y enters donde corresponda
     * @param tabPos
     * @returns {string}
     */
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

    /**
     * hay que agregar todos los hijos ordenadamente
     * @param children
     */
    function addChildren(children) {
        _childrens.push(children);
    }

    /**
     * Sirve para crear tags tipo <T1> o <A>
     * @param value
     */
    function addValue(value) {
        _value = value;
    }

    /**
     * se tiene que ingresar la dupla nombre valor. Ej. para agregar href="google.com" a un <A>
     * @param name
     * @param value
     */
    function addProperty(name, value) {
        _prop[name] = value;
    }

    /**
     * para que el codigo quede lindo
     * @param count
     * @returns {string}
     */
    function addTabs(count) {
        var str = "";
        for (var i = 0; i < count; i++) {
            str += "\t";
        }
        return str;
    }

    /**
     * idem anterior
     * @returns {string}
     */
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