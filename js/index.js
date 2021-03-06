{
    window.defaultConfig = {
        GitHubUserName: "first19326",
        GitHubRepositories: "Hexo-LiveForCode",
        BlogUser: "LiveForCode",
        BlogAvatar: "/image/sidebar/avatar.jpg",
        BlogStartDate: "2020-01-01",
        WebsiteTitleBlur: "(◍´꒳`◍) Hi, Live For Code",
        WebsiteTitleBlurTimeOut: 500,
        WebsiteTitleFocus: "(*´∇｀*) 欢迎回来!",
        WebsiteTitleFocusTimeOut: 1000,
        WebsiteFavicon: "/image/website/logo.png",
        ProgressBar: {
            id: "topProgressBar",
            color: "#77B6FF",
            height: "2px",
            duration: 0.2
        },
        Loading: {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: "spinner",
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: "#F0F0F0",
                    stroke: "#272633",
                    base: null,
                    child: "#272633"
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        HomeHeaderAnimationRendered: true,
        HomeHeaderAnimation: {
            radius: 15,
            density: 0.2,
            color: "rgba(255, 255, 255, .2)",
            clearOffset: 0.3
        },
        ArticleHeaderAnimationRendered: false,
        ArticleHeaderAnimatiAon: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colors: [
                "#96EDA6", "#5BC6A9",
                "#38668C", "#374D84",
                "#BED5CB", "#62ADC6",
                "#8EE5DE", "#304E7B"
            ]
        },
        BackAnimationRendered: true,
        IEBrowserBackAnimationRendered: false,
        BackAnimation: {
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        HomeHeaderImage: [
            "/image/header/home.jpg"
        ],
        HomeBannerText: "",
        ArticleHeaderImage: [
            "/image/header/article.jpg"
        ],
        OtherBannerText: "",
        MenuList : [
            {
                name: "首页",
                href: "/",
                target: "",
                class: ""
            }
        ],
        MenuLink : [],
        FooterStyle: 2,
        BottomText: {
            icon: "like-fill",
            left: "",
            right: ""
        },
        ThemeInfo: true,
        ConsoleList: [],
        FontIconExtend: "",
        Donate: {
            paypal : "",
            bitcoin: "",
            alipay : "/image/donate/alipay.png",
            wechat : "/image/donate/wechat.png"
        },
        Code: {
            style: "normal"
        },    
        Search: {
            applicationID: "U8CZAW9G9Z",
            apiKey: "b479add179b24524aa5f8773e9694c62",
            indexName: "Notes",
            hits: {
                page: 10
            },
            labels: {
                placeholder: "搜索",
                empty: "未发现与 「${query}」 相关的内容",
                stats: "${hits} 条相关条目，使用了 ${time} 毫秒"
            }
        },
        Valine: {
            switch: true,
            el: ".comments-content",
            appId: "srhKtvWPQTWYKh3qX8G8M7v0-gzGzoHsz",
            appKey: "8uVSP1q6UlALVC5igYfIfv2h",
            serverURLs: "",
            placeholder: "你是我一生只会遇见一次的惊喜...",
            notify: false,
            verify: false,
            avatar: "mm",
            meta: "nick,mail,link",
            pageSize: 5,
            lang: "zh-cn",
            visitor: true
        },
        Tocbot: {
            switch: true,
            tocSelector: ".toc",
            contentSelector: ".article-body",
            headingSelector: "h1, h2, h3, h4, h5",
            headingsOffset: 0,
            scrollSmooth: true,
            scrollSmoothOffset: -5,
            positionFixedSelector: ".toc",
            positionFixedClass: "toc-fixed"
        }, 
        Require: {
            baseUrl: "/js/",
            waitSeconds: 100
        },
        Music: {
            type: "Meting"
        },
        APlayer: {
            container: ".aplayer",
            fixed: true,
            autoplay: false, 
            loop: "all",
            order: "random", 
            preload: "auto",
            volume: 0.67,
            mutex: true,
            lrcType: 3,
            audio: [
                {
                    name: "Endless Tears",
                    artist: "CLIFF EDGE",
                    cover: "/music/cover/Endless Tears.jpg",
                    url: "/music/song/Endless Tears.mp3",
                    lrc: "/music/lrc/Endless Tears.lrc"
                }
            ]
        },
        Meting: {
            setting: {
                id: "3778678", 
                lrcshow: false, 
                server: "netease", 
                type: "playlist", 
                fixed: true, 
                autoplay: false, 
                loop: "all", 
                order: "random", 
                preload: "auto", 
                volume: 0.67, 
                mutex: true
            }
        },
        Mouse: {
            enable: false,
            options: {
              size: 6,
              sizeF: 24
            }
        },
        LazyLoad: {
            default: "/image/website/lazyload.svg"
        },
        Style: {
            aplayer: "/css/APlayer.css",
            archive: "/css/archive.css",
            donate: "/css/donate.css",
            fancybox: "/css/jquery.fancybox.css",
            footer: "/css/footer.css",
            iconfont: "https://at.alicdn.com/t/font_1546312_l3yohatebw.css",
            index: "/css/index.css",
            menuBubble: "/css/menu-bubble.css",
            page: "/css/page.css",
            post: "/css/post.css",
            search: "/css/search.css",
            tocbot: "/css/tocbot.css",
            normal: "/css/normal.css",
            night: "/css/night.css",
            clipboard: "/css/clipboard.css",
            mouse: "/css/mouse.css"
        },
        Script: {
            aplayer: "/js/APlayer.min.js",
            config: "/js/require.config.js",
            index: "/js/index.js",
            instantSearch: "/js/instantsearch.min.js",
            jQuery: "/js/jquery-3.4.1.min.js",
            loading: "/js/loading.js",
            meting: "/js/Meting.min.js",
            iscroll: "/js/iscroll.js",
            require: "/js/require.min.js"
        },
        Font: {
            LongCang: "/font/LongCang.css",
            Monda: "/font/Monda.css",
            NotoSansSC: "/font/NotoSansSC.css",
            Playball: "/font/Playball.css",
            PTMono: "/font/PTMono.css",
            RobotoSlab: "/font/RobotoSlab.css",
            Rosario: "/font/Rosario.css",
            UbuntuMono: "/font/UbuntuMono.css"
        },
        Suffix: {
            about: "简单地活着, 肆意又精彩."
        },
        Theme: {
            url: "https://github.com/first19326/Hexo-LiveForCode",
            name: "Hexo - Live For Code"
        }
    };

    window.config = $.extend(true, window.defaultConfig, window.config);

    // Start Cache
    $.ajaxSetup({cache: true});

    // Load loading.js
    $.getScript(window.config.Script.loading, function () {

        // Loading Start
        loading.initRebound();
        loading.initSpinner();
        loading.spinner.init(loading.spring, true);

        $.getScript(window.config.Script.require, function () {
            $.getScript(window.config.Script.config, function () {
                var staticResource = [
                    "ToProgress", "Rotate",
                    "SnapSvg", "Classie", "Menu", "Tools"
                ];
                require(staticResource, function() {
                    require(["Base"], function() {
                        (new Base).init();
                    });
                });
            });
        });
    });
}
