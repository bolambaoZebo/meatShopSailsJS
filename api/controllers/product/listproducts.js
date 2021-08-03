module.exports = async function(req,res){

    // const users = await User.find({})

    // res.send(users)
    // res.send('list all the products')
    // await Product.destroy({})
    
    const userId = req.session.userId

    const allProduct = await Product.find({user: userId}).populate('user').sort('createdAt DESC')
    // const allProduct = await Product.find().populate('user').sort('createdAt DESC')

    res.view('pages/product/home', {
        allProduct
    })

}