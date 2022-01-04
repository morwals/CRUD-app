var Userdb=require("../model/model");

//create and save new users

exports.create=(req,res)=>{

    if(!req.body){
        res.status(400).send({message:"body can't be empty"});
    }

    const user=new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    user.save(user).then(data=>{
        // res.send(data);
        res.redirect("/add-user");
    }).catch(err=>{
       console.log(err);
    })

}

//find

exports.find=(req,res)=>{

    if(req.query.id){
        const id=req.query.id;
        Userdb.findById(id).then(data=>{
            if(!data){
                res.send({message:" no user with id: "+id});
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.send({message:"ooppps errorr"});
        })
    }else{
        Userdb.find().then(user=>{
            res.send(user);
        }).catch(err=>{
            console.log(err);
        });
    }

   
}

//update

exports.update=(req,res)=>{
    
    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404);
        }else{
            res.send(data);
        }
    }).catch(err=>{
        res.status(500);    
    });
}

//delete
exports.delete=(req,res)=>{

    const id=req.params.id;

    Userdb.findByIdAndDelete(id).then(data=>{
        if(!data)res.status(404);
        else{
            res.send({message:"user deleted!"});
        }
    }).catch(err=>{
        res.status(500);
    })

}