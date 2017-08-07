const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: { type: String, default: '' },
  body: { type: String, default: '' },
  subject: { type: String, default: '' },
  recipients: { type: [RecipientSchema], default: [] },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: { type: Date, default: Date.now },
  lastResponded: { type: Date, default: Date.now }
});

mongoose.model('surveys', surveySchema);
