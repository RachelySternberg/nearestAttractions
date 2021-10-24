module.exports = mongoose => {
  var schema = mongoose.Schema({
    Id:Number,
    Name: String,
    ShortDescription:String,
    FullDescription:String,
    VendorId:Number,
    Vendor_Name:String,
    Product_Url:String,
    Accessibility:String,
    Address:String,
    Attraction_Type:String,
    Blue_Flag:String,
    City:String,
    Diving_beach:String,
    Email:String,
    Notes:String,
    Notes_for_opening_hours:String,
    Opening_Hours:String,
    Parkingv:String,
    Phone:String,
    Region:String,
    Scheduled_visits:String,
    Suitable_for_Children:String,
    Surfing_beach:String,
    URL:String,
    X:Number,
    Y:Number,
  },
  {timestamps:true}
  );
  schema.method("toJSON", function(){
    const { __v, _id, ...object}= this.toObject();
    object.Id=_id;
    return object;
  });
  const Attractions=mongoose.model("attraction",schema)
  return Attractions;
  };