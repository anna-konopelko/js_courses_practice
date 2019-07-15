function drawTriangle(triangleSize){
  var str='\n';
  for (var i = 0; i < triangleSize; i++){
      for (var j = 0; i<triangleSize ? j<triangleSize-i : j< i - triangleSize + 1; j++)
      str +=' ';
      str += (i < triangleSize ? '/' : '\\');
      for (var j = 0; i < triangleSize ? j < i*2 : j < triangleSize - 1; j++)
      {
      if(i==triangleSize -1) str+= '_';
      else str +=' ';
      }
      str +='\\';
      str +='\n';
}
console.log(str)}   
drawTriangle(4)

function drawRhomb(rhombSize){
  var str='\n'; 
  for (var i = 0; i < rhombSize*2; ++i) { 
      for (var j = 0; i < rhombSize ? j < rhombSize-i : j < i-rhombSize + 1; j++) 
      str += ' '; 
      str += (i<rhombSize ? '/' : '\\'); 
      for (var j = 0; i < rhombSize ? j < i*2 : j < (rhombSize*2 - i - 1) * 2; j++)
      str+= ' '; 
      str+= (i<rhombSize ? '\\' : '/'); 
      for (var j = 0;i < rhombSize ? j < rhombSize - i : j < i - rhombSize + 1; j++) 
      str+= ' '; 
      str+= '\n'; 
  } 
  console.log(str)}
  drawRhomb(4)

  var a=3;
  var b=3;
  function multiply(a,b){
  var ans=0
      for (i=1; i<=b; i++){
      ans+=+a;}
  console.log(ans)}
  multiply(a,b);