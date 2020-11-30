const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductScheme = new Schema({
//   author: ObjectId,
image_src: String,
name: {type:String,required: true, max:[60,"最大６０文字までです"]},
  category: String,
  author: String,
  description: String,
  headingText1: String,
  headingText2: String,
  headingText3: String,
});

module.exports = mongoose.model('Product',ProductScheme)
