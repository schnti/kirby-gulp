module.exports = {
    paths : {
        index : 'website/index.html',
        html : ['./website/index.php', './website/site/snippets/**/*.php', './website/site/templates/**/*.php'],
        sass : ['scss/**/*.scss', 'website/site/modules/**/*.scss'],
        sassMain : ['scss/styles.scss'],
        js : ['javascript/**/*.js'],
        bower : 'bower_components',
        dist : 'website'
    },
    bower : {
        js : [
            'jquery/dist/jquery.min.js',
            // 'bootstrap/dist/js/bootstrap.min.js',
            'bootstrap-sass/assets/javascripts/bootstrap.min.js',
            // 'cookieconsent/build/cookieconsent.min.js'

            //'fancybox/source/jquery.fancybox.pack.js',
            //'photoswipe/dist/photoswipe.js',
            //'photoswipe/dist/photoswipe-ui-default.js'
        ], css : [
            //'fancybox/source/jquery.fancybox.css'
            //'photoswipe/dist/photoswipe.css',
            //'photoswipe/dist/default-skin/default-skin.css'
        ], assets : {
            //lightboxImages : {
            //src : ['lightbox2/dist/images/*.*'],
            //base : 'lightbox2/dist/'
            //}
            //photoswipe: {
            //    src: ['photoswipe/dist/default-skin/*.+(svg|png|gif)'],
            //    base: 'photoswipe/dist/default-skin',
            //    dist: 'assets/images/photoswipe/'
            //},
            //fancyboxImages: {
            //    src: ['fancybox/source/*.png', 'fancybox/source/*.gif'],
            //    base: 'fancybox/source/',
            //    dist: 'assets/css/'
            //},
            bootstrapFonts : {
                src : ['bootstrap-sass/assets/fonts/bootstrap/*.*'],
                base : 'bootstrap-sass/assets/'
            }
        }
    },
    favicon : {
        masterPicture : 'website/assets/images/favicon.svg',
        dest : 'website/assets/favicon/',
        iconsPath : '/assets/favicon/',
        color : '#ed2129',
        complementaryColor : '#ffffff',
        name : 'Projekt'
    }
};