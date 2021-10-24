
    const attractions=require("../controllers/attraction_controller");
    var router=require("express").Router();
    //Retrieve all attractions
   
   
   
    router.get("/getAll",attractions.findAll);
   module.exports=router
