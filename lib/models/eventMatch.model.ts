import mongoose from 'mongoose';

const eventMatchSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    matches: [{
        giver: { type: mongoose.Schema.Types.ObjectId, ref: 'User.participants' },
        receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User.participants' },
    }],
});

const EventMatch = mongoose.models.EventMatch || mongoose.model('EventMatch', eventMatchSchema);

export default EventMatch;