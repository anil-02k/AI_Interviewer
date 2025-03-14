import mongoose from 'mongoose';

const mockInterviewSchema = new mongoose.Schema({
  jsonMockResp: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  jobDesc: {
    type: String,
    required: true,
  },
  jobExperience: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String, // Alternatively, use `Date` if you want to store as a date object
  },
  mockId: {
    type: String,
    required: true,
  },
});

// Create the Mongoose model
const MockInterview =
  mongoose.models.MockInterview || mongoose.model('MockInterview', mockInterviewSchema);

export default MockInterview;