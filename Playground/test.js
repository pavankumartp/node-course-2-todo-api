var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var Breakfast = mongoose.model('breakfast',
{
      eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        validate:{
          validator: (v)=>{
            return v  > 6
          }
        }
      },
      bacon: {
        type: Number,
        required: [true, 'Why no bacon?']
      },
      drink: {
        type: String,
        enum: ['Coffee', 'Tea'],
        required: function() {
          return this.bacon > 3;
        }
      }
    }
)

    var badBreakfast = new Breakfast({
      eggs: 7,
      bacon: 3,
      drink: 'Tea'
    });

   var error = badBreakfast.validateSync();
   console.log(error.errors);
