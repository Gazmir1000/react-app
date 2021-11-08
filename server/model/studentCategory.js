import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';


const categorySchema = mongoose.Schema({
    year:{type:String,required:true}
});

autoIncrement.initialize(mongoose.connection);
categorySchema.plugin(autoIncrement.plugin, 'category');

const postCategory = mongoose.model('category', categorySchema);

export default postCategory;
