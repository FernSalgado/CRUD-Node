import mongoose from 'mongoose';

export default mongoose
  .connect(
    'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?authSource=admin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('connected'))
  .catch(err => console.warn('Caught err', err));
