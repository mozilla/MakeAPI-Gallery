module.exports = function( grunt ) {

  grunt.initConfig({
    csslint: {
      options:{
        "import": false,
        "box-sizing": false,
        "box-model": false,
        "qualified-headings": false,
        "important": false,
        "universal-selector": false
      },
      files: [
        "css/*.css"
      ]
    },
    jshint: {
      files: [
        "Gruntfile.js",
        "js/*.js"
      ]
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "js",
          include: [
            "../bower_components/makeapi-client/src/make-api",
            "make-gallery"
          ],
          out: "dist/js/make-gallery.js",
          optimize: "none",
          preserveLicenseComments: false
        }
      },
      minify: {
        options: {
          baseUrl: "js",
          include: [
            "../bower_components/makeapi-client/src/make-api",
            "make-gallery"
          ],
          out: "dist/js/make-gallery.min.js",
          optimize: "uglify2",
          preserveLicenseComments: false
        }
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['images/*'], dest: 'dist/'},
          {expand: true, src: ['css/*'], dest: 'dist/'},
          {src: ['index.html'], dest: 'dist/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-csslint" );
  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask( "default", [ "csslint", "jshint" ]);
  grunt.registerTask( "test", [ "csslint", "jshint" ]);
  grunt.registerTask( "hint", "jshint" );
  grunt.registerTask( "build", [ "requirejs:compile", "copy" ] );
  grunt.registerTask( "build:minify", [ "requirejs:minify", "copy" ] );
  grunt.registerTask( "build:all", [ "requirejs:compile", "requirejs:minify", "copy" ] );

};
