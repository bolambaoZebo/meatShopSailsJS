
module.exports = async function(req,res){

    const productBody = req.body.productBody
    const userId = req.session.userId
    console.log('Create product text: ' + productBody)

    const record = await Product.create({
        text: productBody,
        user: userId
    }).fetch()

    // res.send(record)
    res.redirect('/listproducts')
}