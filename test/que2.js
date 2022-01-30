var n = prompt("Enter The Number");
n = parseInt(n);



var count;
for(var m=1; m<=n; m++){
count=0;
for(var p=1; p<=m; p++)
{
if(m%p==0)
count=count+1;
}
if(count==2)
console.log(m);
}