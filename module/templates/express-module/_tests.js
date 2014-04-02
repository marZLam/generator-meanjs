'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	<%= classifiedSingularName %> = mongoose.model('<%= classifiedSingularName %>');

/**
 * Globals
 */
var user;
var <%= camelizedSingularName %>;

/**
 * Unit tests
 */
describe('<Unit Test>', function() {
	describe('Model <%= humanizedSingularName %>:', function() {
		beforeEach(function(done) {
			user = new User({
				firstName: 'Full',
				lastName: 'Name',
				displayName: 'Full Name',
				email: 'test@test.com',
				username: 'username',
				password: 'password'
			});

			user.save(function() {
				<%= camelizedSingularName %> = new <%= classifiedSingularName %>({
					name: '<%= humanizedSingularName %> Name',
					user: user
				});

				done();
			});
		});

		describe('Method Save', function() {
			it('should be able to save without problems', function(done) {
				return <%= camelizedSingularName %>.save(function(err) {
					should.not.exist(err);
					done();
				});
			});

			it('should be able to show an error when try to save without name', function(done) {
				<%= camelizedSingularName %>.name = '';

				return <%= camelizedSingularName %>.save(function(err) {
					should.exist(err);
					done();
				});
			});
		});

		afterEach(function(done) {
			<%= classifiedSingularName %>.remove().exec();
			User.remove().exec();
			done();
		});
	});
});