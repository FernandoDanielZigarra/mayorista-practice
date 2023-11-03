const { hash, compare } = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  })
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await hash(this.password, 10)
});

userSchema.methods.checkedPassword = async function (password) {
  if (typeof password !== 'string' || password.trim() === '') {
    throw new Error('Invalid password');
  }
  return await compare(password, this.password);
}


module.exports = mongoose.model('User', userSchema);