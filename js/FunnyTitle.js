<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/evanchenjj/cdn@1.0.1/images/favicon.ico");
         document.title = 'ヽ(●-`Д´-)ノ看不见我！看不见我！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/evanchenjj/cdn@1.0.1/images/favicon.ico");
         document.title = 'ヾ(Ő∀Ő3)ノ被你发现了！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
