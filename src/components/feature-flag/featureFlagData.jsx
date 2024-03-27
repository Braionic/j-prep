const flagData = {
    colorpicker: true,
    qrCode: true,
    themeChange: false,
    gitHub: true,
    multiTab: true
}


export default function flagDataPromise(){
    return new Promise((resolve, reject)=>{
        if(flagData){
          return setTimeout(() => {
           return resolve(flagData)
           }, 500);
        }else{
           return reject('something went wrong')
        }
    })
}