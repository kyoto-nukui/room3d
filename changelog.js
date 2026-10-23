(function(){var CHANGES=[
{v:"1.2.29",day:"2026-10-23",items:[
"間取り図の外の壁が窓や斜めの壁で切れていて、リビングなどが部屋として読めなかった図の一部を、読めるようにしました。",]},{v:"1.2.28",day:"2026-10-23",items:[
"間取り図の確認の画面で、図の文字を反映するときに画面が止まりにくくしました。3Dの画面で図の文字を読み終えて、操作が終わるのを待つ間は「操作が終わると反映します」と出します。",]},{v:"1.2.27",day:"2026-10-23",items:[
"間取り図から寸法を自動で合わせられなかったとき、確認の画面のまま図の文字を読み、図に書いてある寸法の数字か帖数で寸法を合わせるようにしました。合ったときは畳数を入れずに「3Dを見る」で進めます。部屋の名前も図の文字から入れます（読み取りは端末の中だけで、画像は送りません）。",]},{v:"1.2.26",day:"2026-10-23",items:[
"間取り図のベッドやソファの輪郭を部屋の数に入れないようにしました（3D には床を残します）。",]},{v:"1.2.25",day:"2026-10-23",items:[
"図の文字で直したときの知らせを短くし、名前が図にない部屋は「部屋1」「部屋2」と見分けられるようにしました。読み取った後に枠を閉じても、下の「読み取る前に戻す」で戻せます。",]},{v:"1.2.24",day:"2026-10-23",items:[
"間取り図の寸法の数字（9,100 など）から縮尺を決める部品を足しました（画面に出すのは、これからの更新です）。",]},{v:"1.2.23",day:"2026-10-23",items:[
"トイレや収納の戸が壁と同じ線で描かれた間取り図で、その戸を読み、トイレや収納を部屋の数に入れるようにしました。",]},{v:"1.2.22",day:"2026-10-23",items:[
"間取り図の小さな仕切り（家具や模様の線など）を部屋の数に入れないようにし（3D には床と壁を残します）、壁が読めない図でも家の外形から部屋を足せるようにしました。",]},{v:"1.2.21",day:"2026-10-22",items:[
"間取り図から3Dを作ったあと、図に書いてある部屋の名前と帖数を読み取り、部屋の名前と、部屋の札の「図では○帖」に出すようにしました。3Dの壁の寸法も図の帖数に合わせます。「元に戻す」で読み取る前に戻せます（読み取りは端末の中だけで、画像は送りません）。",]},{v:"1.2.20",day:"2026-10-22",items:[
"間取り図の文字から帖数を読む部品で、記号の線を帖数と読み違えることがあったのを直しました（画面に出るのはこれからの更新です）。",]},{v:"1.2.19",day:"2026-10-22",items:[
"間取り図の文字を読む部品で、読んでいる間に画面が止まりにくくしました（画面に出るのはこれからの更新です）。",]},{v:"1.2.18",day:"2026-10-22",items:[
"アプリの中で開いたときも、3Dを指でなぞると画面が引っぱられず、なめらかに回るようにしました。",]},{v:"1.2.17",day:"2026-10-22",items:[
"3Dを開いた直後は、部屋・家具の名前と寸法の札を隠し、見やすくしました（「寸法を出す」のボタンで出せます）。",]},{v:"1.2.16",day:"2026-10-22",items:[
"スマホなど指で操作する端末では、3Dの操作の案内を「指でなぞって回す・2本指で拡大・押すと変えられます」にしました。指とマウスの両方がある端末では、両方の言葉で案内します。",]},{v:"1.2.15",day:"2026-10-22",items:[
"家具の向きを変えるボタンが家具や家の模型に重ならないようにし、色や大きさの見本の見え方を整えました。",]},{v:"1.2.14",day:"2026-10-22",items:[
"作った人の Threads へのリンクを付けました。",]},{v:"1.2.13",day:"2026-10-22",items:[
"更新履歴の 1.2.8 の説明を、今の画面の動きに合わせて直しました。",]},{v:"1.2.12",day:"2026-10-22",items:[
"部屋の中からの視点で、指でなぞったときの景色の動きを落ち着かせました。スマホを横にしたときも、端がゆがみすぎないようにしました。","スマホを横にして壁の色を変えたときも、その壁の方を向くようにしました。",]},{v:"1.2.11",day:"2026-10-22",items:[
"3Dで、小さく見えるドアや窓を、少しずれた所を押しても選べるようにしました。ドアや窓の横の壁を押してドアや窓が選ばれたときは、「横の壁を変える」で壁を選べます。",]},{v:"1.2.10",day:"2026-10-22",items:[
"高画質に切り替わる前も、壁ぎわや家具の足元に影が見えるようにしました。",]},{v:"1.2.9",day:"2026-10-22",items:[
"横向きの画面で家具を置いたとき、色の見本が最初から見えるようにしました。シートの続きがあるときは下の端が薄くなります。",]},{v:"1.2.8",day:"2026-10-22",items:[
"間取り図の文字から帖数を読む部品を良くしました（画面に出すのは、これからの更新です）。",]},{v:"1.2.7",day:"2026-10-22",items:[
"高画質に切り替わる前も、床やキッチンの天板が明るく見えるようにしました（壁の明るさは変わりません）。",]},{v:"1.2.6",day:"2026-10-22",items:[
"家具の色と大きさを選ぶ画面を、小さな画面でも全部見えるように直しました。選んでいる家具に「選択中」と出ます。",]},{v:"1.2.5",day:"2026-10-22",items:[
"窓の形の列で、横に続きがあることを知らせる「›」が、窓の名前に重ならないようにしました。",]},{v:"1.2.4",day:"2026-10-22",items:[
"部屋の中からの視点（天井・照明・カーテンを選んだときも）で、回してもカメラが部屋の外に出ないようにしました。指でなぞると、景色が指と同じ向きに動きます。上も見上げられます。",]},{v:"1.2.3",day:"2026-10-22",items:[
"（画面は変わりません）公開の仕組みを整えました。",]},{v:"1.2.2",day:"2026-10-22",items:[
"タイル張りの浴室がある細い線の間取り図で、浴室が細かく分かれて部屋が多く数えられることを直しました。",]},{v:"1.2.1",day:"2026-10-22",items:[
"細い線で描いた間取り図を読み取れなかったとき、「詳しく読み直す」で、もう一度くわしく読めるようにしました（数秒かかります）。",]},{v:"1.2.0",day:"2026-10-22",items:[
"置いた家具の色を、木の色・白・灰などから選べるようになりました。","家具の大きさを変えたときに前後の寸法を出すなど、表示を分かりやすくしました。",]},{v:"1.1.3",day:"2026-10-22",items:[
"ドアと窓の画面で、下のボタンが重ならないようにし、色や形の列に「›」を出して横に続きがあると分かるようにしました。窓も、近くを押せば選べます。",]},{v:"1.1.2",day:"2026-10-22",items:[
"鉛筆の斜線で塗った壁の間取り図も、読めるようになりました。",]},{v:"1.1.1",day:"2026-10-22",items:[
"部屋の光を少し暖かくし、見本の家の高画質の絵が、触る前と後でそろうようにしました。","家具の色を選び直して元に戻すと、最初の色に戻るようにしました。",]},{v:"1.1.0",day:"2026-10-22",items:[
"3Dで壁を押すと、その壁だけ色を変えられるようになりました。",]},{v:"1.0.0",day:"2026-10-22",items:[
"「＋家具」から、3Dを見ながら家具を置けるようになりました。","床・壁・家具の見た目が、光や木目の質感まで本物に近くなりました。","ドアや窓を押すと、変えられる内容が出て、選んだ物に「ここ」と出ます。色や形を変えたあと「元に戻す」で戻せます。","間取り図の画像が小さすぎるときは、読み込む前に知らせます。そのまま読み込むこともできます。",]},];window.R3Changes=CHANGES;var CSS=".cl-back{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px}"+
".cl-dlg{background:var(--card,#fff);color:var(--ink,#1B232E);border-radius:12px;max-width:440px;width:100%;max-height:80vh;overflow-y:auto;padding:12px 16px 16px;box-shadow:0 8px 24px rgba(0,0,0,.3)}"+
".cl-head{display:flex;align-items:center;justify-content:space-between;gap:8px;position:sticky;top:0;background:var(--card,#fff);padding:4px 0}"+
".cl-head h2{font-size:17px;margin:0}"+
".cl-close{min-width:44px;min-height:44px;padding:0 12px;font-size:15px;white-space:nowrap;background:var(--card,#fff);color:var(--ink,#1B232E);border:1px solid var(--edge,#7B8694);border-radius:8px}"+
".cl-dlg h3{font-size:15px;margin:14px 0 4px}"+
".cl-dlg ul{margin:0;padding-left:20px;font-size:14px;line-height:1.6}"+
".cl-dlg .cl-id{font-size:13px;color:var(--sub,#4A5563);margin:14px 0 0}"+
".cl-dlg .author-row{margin:6px 0 0}.cl-dlg .author{display:inline-flex;align-items:center;min-height:44px;font-size:13px;color:var(--sub,#4A5563);text-decoration:underline}";function open(btn){if(document.getElementById("changelog"))return;var back=document.createElement("div");back.className="cl-back";var dlg=document.createElement("div");dlg.className="cl-dlg";dlg.setAttribute("role","dialog");dlg.setAttribute("aria-modal","true");dlg.setAttribute("aria-labelledby","cl-title");dlg.id="changelog";var head=document.createElement("div");head.className="cl-head";var h=document.createElement("h2");h.id="cl-title";h.textContent="更新履歴";head.appendChild(h);var x=document.createElement("button");x.type="button";x.className="cl-close";x.id="cl-close";x.textContent="✕ 閉じる";head.appendChild(x);dlg.appendChild(head);CHANGES.forEach(function(c){var t=document.createElement("h3");t.textContent="ver "+c.v+"（"+c.day+"）";dlg.appendChild(t);var ul=document.createElement("ul");c.items.forEach(function(s){var li=document.createElement("li");li.textContent=s;ul.appendChild(li);});dlg.appendChild(ul);});if(btn.getAttribute("data-v")){var id=document.createElement("p");id.className="cl-id";id.textContent="公開日 "+btn.getAttribute("data-day")+"／管理番号 "+btn.getAttribute("data-v");dlg.appendChild(id);}
var ap=document.createElement("p");ap.className="author-row";var al=document.createElement("a");al.className="author";al.href="https://www.threads.com/@kyoto_nukui";al.target="_blank";al.rel="noopener noreferrer";al.textContent="作った人：@kyoto_nukui（Threadsでフォロー）";ap.appendChild(al);dlg.appendChild(ap);back.appendChild(dlg);document.body.appendChild(back);var close=function(){back.remove();document.removeEventListener("keydown",key,true);btn.focus();};var key=function(e){if(e.key==="Escape"||e.key==="Tab"){e.preventDefault();e.stopImmediatePropagation();if(e.key==="Escape")close();else(document.activeElement===x?al:x).focus();}};x.addEventListener("click",close);back.addEventListener("click",function(e){if(e.target===back)close();});document.addEventListener("keydown",key,true);x.focus();}
function init(){var ver=document.getElementById("ver");if(!ver)return;var st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);var btn=document.getElementById("ver-btn");if(!btn){btn=document.createElement("button");btn.type="button";btn.id="ver-btn";btn.textContent=ver.textContent;ver.textContent="";ver.appendChild(btn);}
btn.setAttribute("aria-label",btn.textContent+"（更新履歴を開く）");btn.addEventListener("click",function(){open(btn);});}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();})();
