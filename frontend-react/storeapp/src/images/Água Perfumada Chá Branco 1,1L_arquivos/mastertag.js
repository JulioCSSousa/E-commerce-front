if(!window.sdkInitialized) {
    window.sdkInitialized = true;
    (function (i, s, o, g, r, a, m) {
        i['SocialMinerObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = !!1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://plugins.soclminer.com.br/mastertag/allminer.js', 'SM');

    SM('create', '82493f3f-fbbb-4592-8d17-0a36825c3c97');
    SM('send', 'pageview');
}