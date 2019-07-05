import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'user-update': (id, field, value) => {
    Users.update({_id: new Mongo.ObjectID(`${id}`)}, {$set: {field: value}})
  }
})

export const Users = new Mongo.Collection('users');
