module.exports = function(app)
{
   /* greemfood  */
   app.get('/gallery',function(req,res){
      res.render('index.html')
   });
}