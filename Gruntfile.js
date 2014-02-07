module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),

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
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-csslint" );
  grunt.loadNpmTasks( "grunt-contrib-jshint" );

  grunt.registerTask( "default", [ "csslint", "jshint" ]);
  grunt.registerTask( "test", [ "csslint", "jshint" ]);
  grunt.registerTask( "hint", "jshint" );
};
