import mongoose from 'mongoose';
import { collection } from '../config/collection.js';

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  image:{
    type: String,
    required: false
  },

  description:{
    type: String,
    required: false
  },

  designation:{
    type: String,
    required: false
  },

  publish:{
    type: Boolean,
    required: false,
    default: false
  },


  testimonialType:{
    type: String,
    required: true,
    enum: ['client', 'student', 'Other']
  },

  review: {
    type: String,
    required: false,
    trim: true
  },
  rating: {
    type: Number,
    required: false,
    min: 1,
    max: 5
  },
  googlelink: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model(collection.TESTIMONIALS, TestimonialSchema);
