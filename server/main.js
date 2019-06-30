import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//Provide Access to collections
import { Users } from '../imports/collections/users';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('users', function() {
    return Users.find({});
  });

  // MONGO_URL="mongodb://servioDev:ServioDev19!@ds345597.mlab.com:45597/qc-goals-test"

});
