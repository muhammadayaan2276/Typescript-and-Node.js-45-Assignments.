
function storeCarInfo(manufacturer:string,modelName:string,...extraOption: {[key:string]:any}[]):

Object{

const CarInfo = {

    manufacturer,

    modelName,

    ...Object.assign({}, ...extraOption)

}

return CarInfo;

};

let answare = storeCarInfo('Honda','Civic',{color:'black'},{features:['Navigation','Power Window']});


console.log(answare);





























































