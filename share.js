(function(){"use strict";var KIND={"3d":["3Dの画像","room3d.png","今の3Dを画像で保存"],plan:["平面図の画像","room3d-plan.png","真上から見た図（平面図）を画像で保存"]};function err(k){return"共有できませんでした。「"+k[2]+"」を使ってください";}
function pngFile(url,name){var bin=atob(url.split(",")[1]),a=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new File([a],name,{type:"image/png"});}
function ask(k,file,dialog,fail){if(!file||!file.size){fail(err(k));return;}
dialog(k[0]+"を、次の画面で選ぶアプリに渡します。このアプリからはどこにも送りません。",[["戻る","ghost",function(){document.getElementById("btn-save").click();}],["アプリを選ぶ","ok",function(){var p;try{p=navigator.share({files:[file]});}catch(e){p=Promise.reject(e);}
Promise.resolve(p).catch(function(e){if(e&&e.name==="AbortError")return;fail(err(k));});}]]);}
function open(get,dialog,fail,kind){var k=KIND[kind]||KIND["3d"];if(kind==="plan"){try{get(function(b){ask(k,b?new File([b],k[1],{type:"image/png"}):null,dialog,fail);});}catch(e){fail(err(k));}
return;}
var file=null;try{var url=get(1);if(url&&url.indexOf("data:image/png;base64,")===0)file=pngFile(url,k[1]);}catch(e){file=null;}
ask(k,file,dialog,fail);}
window.R3Share={open:open};})();
