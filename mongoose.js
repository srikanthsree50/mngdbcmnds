
// The permitted SchemaTypes are:

// String
// Number
// Date
// Buffer         // PERMITTING SCHEMA TYPES
// Boolean
// Mixed
// ObjectId
// Array




// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({

//     title:  String,
//     author: String,                        //DEFINING A MONGOOSE SCHEMA
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }

// });
                        
                                                 //DEFINING A MODEL
 // var Blog = mongoose.model('BlogModel', blogSchema);  //FROM SCHEMA

 //---------------------------------------------------------------------------
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var personSchema = new Schema({
    name: {
      first: String,
      last: String
    }
  });


  personSchema.virtual('fullName').get(function () {
    return this.name.first + ' ' + this.name.last;
  });


  // compile our model
  var Person = mongoose.model('Person', personSchema);

  // create a document
  var axl = new Person({
    name: { first: 'asa', last: 'goud' }
  });


  //console.log(axl.name.first+'  '+axl.name.last);
  console.log(axl.fullName);