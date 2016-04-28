var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // Sass
    var options = {
        includePaths: [
            'node_modules/foundation-sites/scss',
            'node_modules/motion-ui/src'
        ]
    };

    mix.sass('app.scss', null, options);

    // Javascript
    var jQuery = '../../../node_modules/jquery/dist/jquery.js';
    var foundationJs = '../../../node_modules/foundation-sites/dist/foundation.js';

    mix.scripts(jQuery, 'public/js/jquery.js');
    mix.scripts(foundationJs, 'public/js/foundation.js');
});
