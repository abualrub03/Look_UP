var getHor=new Date();
getHor=getHor.getHours();
if(getHor>18){
window.alert('good evening');
}
else if(getHor>12){
window.alert('good afternoon');
}
else if(getHor>0){
window.alert('good morning');
}