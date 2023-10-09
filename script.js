var arr = ["HTML", "CSS", "JAVASCRIPT"];
for (var i=0; i<arr.length; i++){
  console.log(arr[i])
};

function Rec(width, height){
  this.width = width;
  this.height = height;
  this.getArea =()=>{
  return this.width*this.height;
  }
}
var myrec = new Rec(25, 20)
console.log(myrec.getArea());

var obj = {
  name:"hassaan",
  designation:"web-developer",
}
for(const prop in obj){
  console.log(prop + ": " + obj[prop])
}
