const axios=require("axios");//unable us to make requests 


exports.homeRoutes=(req,res)=>{
    //make get request to /api/users
    axios.get("http://localhost:3000/api/users").then(function(response){

        res.render("index",{users: response.data}); 
    }).catch(err=>{
        res.send(err);
    });
}

exports.addUser=(req,res)=>{
    res.render("adduser");
}

exports.updateUser=(req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(userdata=>{
        res.render("updateuser",{user:userdata.data});
    }).catch(err=>{
        res.send(err);
    })
}