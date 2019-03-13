const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyparser = require("body-parser");

const onlineUsers = require("./models/onlineUser");

router.use(cors());
router.use(bodyparser());



router.post('/deleteUser',(req,res,next) =>{

  // console.log(req.body.username);
 onlineUsers.deleteOne({userName:req.body.username})
 .catch(err=>{

 })

});

router.post('/getOnlineUsers',(req,res,next) =>{

  onlineUsers.find({room: req.body.room}).then(online =>{
    if (!online) {
        return res.status(401).json({ message: "ONLINE NOT EXIST !" });
      }

      res.status(200).json(online);
  })

});

router.post('/',(req,res,next) =>{


    const online = new onlineUsers({
        
   userName:req.body.username,
   room:req.body.room 
    });

    online
    .save()
    .then(() => {
      res.status(200).json({
        message: "signup success ! "
      });
    })
    .catch(err => {
      return res.status(500).json({
        error: err
      });
    });
   

});




module.exports = router;