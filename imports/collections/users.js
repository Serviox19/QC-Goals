import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'users.find': function(token) {
    return Users.findOne({ _id: token })
  }
})

export const Users = new Mongo.Collection('users');
