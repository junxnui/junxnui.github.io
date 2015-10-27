//creatTime:2011-09-06 11:58:08
function queryResource(loginname,pwd,resource){
var server="http://210.77.30.250/vplus/";
var url = server+"remote.do?method=query&loginname="+loginname + "&pwd=" + pwd + "&resource=" + resource+"&timeStamp="+new Date().getTime();
url = encodeURI(url);
var js_obj = document.createElement( "script" );
js_obj.type = "text/javascript";
js_obj.setAttribute( "src" , url);
document.body.appendChild(js_obj);
}
function queryResourceForPreview(loginname,pwd,resource){
var server="http://210.77.30.250/vplus/";
var url = server+"remote.do?method=query2&loginname="+loginname + "&pwd=" + pwd + "&resource=" + resource+"&timeStamp="+new Date().getTime();
url = encodeURI(url);
var js_obj = document.createElement( "script" );
js_obj.type = "text/javascript";
js_obj.setAttribute( "src" , url);
document.body.appendChild(js_obj);
}
function delResource(loginname,pwd,resource){
var server="http://210.77.30.250/vplus/";
var cdbStr = ToCDB(resource);
var url = server+"remote.do?method=del&loginname="+loginname + "&pwd=" + pwd + "&resource=" + cdbStr+"&timeStamp="+new Date().getTime();
url = encodeURI(url);
var js_obj = document.createElement( "script" );
js_obj.type = "text/javascript";
js_obj.setAttribute( "src" , url);
document.body.appendChild(js_obj);
}
function ToCDB(str){
var tmp = "";
for(var i=0;i<str.length;i++){
if(str.charCodeAt(i)>65248&&str.charCodeAt(i)<65375){
tmp += String.fromCharCode(str.charCodeAt(i)-65248);
}else{
tmp += String.fromCharCode(str.charCodeAt(i));
}}
tmp = tmp.replace(/\r\n/ig,"");
tmp = tmp.replace(/[ ]/g,"");
return tmp;
}
function getService(){return "http://210.77.30.250/vplus/"}