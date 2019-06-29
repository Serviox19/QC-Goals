import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//Provide Access to collections
import { Users } from '../imports/collections/users';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('users', function (id) {
    return Users.find({});
  });
});
