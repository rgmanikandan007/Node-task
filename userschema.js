const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDetails', {
   // useNewUrlParser: true,
   // useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});


const User = mongoose.model('User', userSchema);

async function findUsers() {
  try {
    const users = await User.find({});
    console.log("Users found:", users);
  } catch (error) {
    console.error("Error finding users:", error);
  }
}

findUsers();
