import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    budget: { type: String, required: true }, // Adjust type as necessary
    eventDate: { type: Date }, // Optional based on your requirements
    invitationMessage: { type: String },
    participants: [{
      name: { type: String, required: true },
      email: { type: String, required: true }
    }]
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
