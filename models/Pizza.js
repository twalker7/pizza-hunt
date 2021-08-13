const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //added get: to format the date value for us 18.2.7
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [

    ],
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment'
        }
      ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
  );

  // get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
  });

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

  
module.exports = Pizza;