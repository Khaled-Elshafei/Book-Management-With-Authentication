const booksModel = require('./models/Books.models')
exports.addBooks = async function(req,res){
    try{
        const newBook = await booksModel.create(req.body)
        res.json({message:"Book added successfully",data:newBook})
    }catch(err){
        res.status(400).send({message:"Something is wrong"})
    }

}

exports.getOneBook = async function(req,res){
    try{
        const readBook = await booksModel.find()
        res.json({message:"Done",data:readBook})
    }catch(err){
        res.status(400).send({message:err.message})
    }
}
exports.editOneBook = async function(req,res){
    try{
        const updateBook = await booksModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({message:"updated successfully",data:updateBook})
    }catch(err){
        res.status(400).send({message:err.message})
    }
}

exports.deleteOneBook = async function(req,res){
    try{
        if(req.user.role === 'admin'){
            let deleteBook = await booksModel.findByIdAndDelete(req.params.id)
        res.json({message:"deleted successfully",data:deleteBook})
        }else{
            res.json({message:"you don't have access to delete book"})
        }
        
    }catch(err){
        res.status(400).send({message:err.message})
    }
}


