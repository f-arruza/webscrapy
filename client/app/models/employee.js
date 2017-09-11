import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  role: DS.attr('string'),
  local: DS.attr('string'),
  extension: DS.attr('string'),
  webpage: DS.attr('string'),
  gscholar: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  academic_unit: DS.attr('string'),
  academic_unit_webpage: DS.attr('string'),
  curriculum: DS.attr('string'),
  grade: DS.attr('string'),
  course: DS.attr('string'),
  category: DS.attr('string'),
  program: DS.attr('string'),
  snies: DS.attr('string'),
  program_description: DS.attr('string')
});
