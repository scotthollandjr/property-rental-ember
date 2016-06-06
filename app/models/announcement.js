import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  author: DS.attr(),
  //how to feed it default Date
  date: DS.attr()
});
