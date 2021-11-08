import Category from '../model/studentCategory';

// Get all users
export const getCategorys = async (request, response) => {
   
    try{
        
        const categorys = await Category.find();
        response.status(200).json(categorys);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}


export const addCategory = async (request, response) => {
 
    const category = request.body;
    console.log("inside")

    const newCategory = new Category(category);
    try{
        await newCategory.save();
        response.status(201).json(newCategory);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}