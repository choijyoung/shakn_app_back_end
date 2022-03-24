import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewsSchema = new Schema({
  rating: {type: Number, min: 1, max: 5},
  profile: { type: Schema.Types.ObjectId, ref: 'Profile', default: null,}
})

const commentsSchema = new Schema({
  comment: {type: String},
  profile: { type: Schema.Types.ObjectId, ref: 'Profile', default: null,}
})

const cocktailSchema = new Schema({

  name: { type: String },
  ingredients: [String],
  method: { type: String, default: "Method" },
  garnish: { type: String, default: "Garnish" },
  servedIn: { type: String, default: "Served In" },
  image: { type: String, default: "Image URL" },

  profile: { type: Schema.Types.ObjectId, ref: 'Profile', default: null,},

review: [reviewsSchema],

comment: [commentsSchema]

},{
  timestamps: true
})

const Cocktail = mongoose.model("Cocktail",cocktailSchema)

export{
  Cocktail
}