const installUrl = (handle) =>{
    try{
        if(handle){
            return encodeURI(`https://${handle}.myshopline.com/admin/oauth-web/#/oauth/authorize`)
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    installUrl
}