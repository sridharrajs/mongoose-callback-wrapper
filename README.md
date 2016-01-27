# mongoose-callback-wrapper

A wrapper for mongoose callbacks

    npm install mongoose-callback-wrapper
   
Usual way of using mongoose orm

   While querying for records, we might want to trim the attributes of modal based on certain context.
    
  ex:

    const ATTRIBUTES = [
        '_id',
        'password',
        'username',
        'profile_url',
        'doj',
        'emailId'
    ];
    
    const PUBLIC_ATTRIBUTES = [
        'username',
        'profile_url',
        'emailId'
    ];
    
    let getUserById = function(userId, callback) {
        userModel.find({
            userId: userId
        }, function(err, items) {
            if (err) {
                return callback(err);
            }
            let users = _.map(items, (user) => {
                return _.pick(user, PUBLIC_ATTRIBUTES);
            });
            return callback(null, users);
        });
    };
    
   with ```mongoose-callback-wrapper``` 
    
    let wrapper = require('mongoose-callback-wrapper');
    
    let getUserById = function(userId, callback) {
        let wrappedCallback = wrapper.wrap(callback, PUBLIC_ATTRIBUTES);
        userModel.find({
            userId: userId
        }, wrappedCallback);
    };
    
