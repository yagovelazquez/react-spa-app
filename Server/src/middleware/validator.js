module.exports = (validator, params) => {
    return (req, res, next) => {
     
      const { error } = validator(req.body, params);  
     
      if (error) return res.status(400).send(error.details[0].message);
   
      next();
    }
  }
  