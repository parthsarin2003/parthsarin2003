const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected successfully');
    } catch (error) {
        console.error('DB connection ERROR:', error.message);
    }
};

module.exports = { db };
