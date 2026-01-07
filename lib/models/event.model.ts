import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    eventName: { type: String, required: true },
    budget: { type: Number, required: true },
    eventDate: { type: Date },
    invitationMessage: { type: String },
    participants: [{
      name: { type: String, required: true },
      email: { type: String, required: true }
    }],
    matches: [{
      params: {
        id: { type: String }
      },
      giver: { type: String },
      receiver: { type: String }
    }]
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
