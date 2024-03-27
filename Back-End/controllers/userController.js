
exports.getAllUsers=async(req,res)=>{
    const users = await User.find()

    res.status(200).json({
        status : 'success',
        results : users.length,
        data :{
            data :users
        }
    })
}