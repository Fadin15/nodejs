var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
    name:"Air Jordan 1 Mid",
    category:"shoes",
    description:"Colour Shown: Black/White/Hyper Royal",
    image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/343186b9-b3d6-4c7f-8072-875a825b10f3/air-jordan-1-mid-shoe-BpARGV.png"

  },
  {
    name:"Air Jordan 1 Mid",
    category:"shoes",
    description:"Colour Shown: White/Black/Gym Red ",
    image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/air-jordan-1-mid-shoe-BpARGV.png"

  },
  {
    name:"Air Jordan 1 Mid",
    category:"shoes",
    description:"Colour Shown: White/Black/Tropical Twist",
    image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb28a2df-c4a7-4c4e-a31e-10c00d6867d9/air-jordan-1-mid-shoe-BpARGV.png"

  },
  {
    name:"Air Jordan 1 Mid",
    category:"shoes",
    description:"Colour Shown: White/Black/Arctic Orange",
    image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47922912-39af-49e3-ac43-d11aac1ac7ba/air-jordan-1-mid-shoe-BpARGV.png"

  },
 
 
 
]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(rer,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
