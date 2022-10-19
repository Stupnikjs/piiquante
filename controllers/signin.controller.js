



function getSigninForm(req, res){
 console.log(req.body) 
 res.send(req.body)
}




module.exports = {getSigninForm}