import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const studentSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'student');

const postStudent = mongoose.model('student', studentSchema);

export default postStudent;
