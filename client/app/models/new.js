import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  pubdate: DS.attr('string'),
  category: DS.attr('string'),
  source: DS.attr('string')
});
