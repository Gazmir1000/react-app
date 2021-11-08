import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './route/route.js';

const app = express(); 

app.use(express.json())
app.use(cors());

app.use('/students', Routes);


const URL = 'mongodb+srv://Gazi:gazi0123@cluster0.mxvfy.mongodb.net/studentDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || '8080';


mongoose.connect(URL, { useNewUrlParser: true  }).then(() => { 
    
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})



