module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dest: {
				files: [{
					expand: true,
					cwd: 'js/',
					src: '*.js',
					dest: 'dist/js/'
				}]
			}
		},
		cssmin: {
			options: {
				banner: '<%= meta.banner %>',
				beautify: {
					ascii_only: true
				}
			},
			dest: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: '*.css',
					dest: 'dist/css/'
				}]
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['uglify', 'cssmin']);

};