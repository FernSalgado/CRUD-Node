import mongoose from 'mongoose';

export default mongoose
  .connect(
    'string-banco',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('connected'))
  .catch(err => console.warn('Caught err', err));
