
function errorHandler (err, req, res, next) {
     

    res.status(500).send('Something went wrong')
    
}

module.exports = errorHandler



