const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'Abul'){
        req.user = {name:'Abul', id: 420};
        next();
    }
    else{
        res.status(404).send('Unauthorized')
    }
};

module.exports = authorize;