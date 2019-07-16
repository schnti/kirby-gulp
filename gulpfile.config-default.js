module.exports = {
    paths : {
        index : 'public/index.html',
        html : ['./public/index.php', './site/snippets/**/*.php', './site/templates/**/*.php'],
        sass : ['scss/**/*.scss', 'site/modules/**/*.scss'],
        sassMain : ['scss/styles.scss'],
        js : ['javascript/**/*.js'],
        bower : 'node_modules',
        dist : 'public'
    },
    bower : {
        js : [
            'jquery/dist/jquery.min.js',
            'bootstrap/dist/js/bootstrap.bundle.min.js'
            //'photoswipe/dist/photoswipe.js',
            //'photoswipe/dist/photoswipe-ui-default.js'
            //'fancybox/source/jquery.fancybox.pack.js',
        ], css : [
            'bootstrap/dist/css/bootstrap.min.css' // TODO NOT NEEDED!!! USED TO FIX "Error: Invalid glob argument" Error.
            //'fancybox/source/jquery.fancybox.css'
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
            //}
        }
    },
    favicon : {
        masterPicture : 'public/assets/images/favicon.svg',
        dest : 'public/assets/favicon/',
        iconsPath : '/assets/favicon/',
        color : '#ed2129',
        complementaryColor : '#ffffff',
        name : 'Projekt'
    }
};