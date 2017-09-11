import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rss');
  this.route('rssfilter');
  this.route('news');
  this.route('employees');
});

export default Router;
