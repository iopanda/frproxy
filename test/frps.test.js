var FrpsConfig = require('../model/frps/FrpsConfig');

(async()=>{
    // await FrpsConfig.create({
    //     bind_addr: "0.0.0.0",
    //     bind_port: 7000,
    //     authentication_method: "token",
    //     token: "abcdefg"
    // })
    var res = await FrpsConfig.findOne();
    res.bind_addr = '1.1.1.1';
    await FrpsConfig.update({
        bind_addr: "1.1.1.1"
    }, {
        where: {
            id: 1
        }
    });
    res = await FrpsConfig.findOne();
    console.log(res.toString())
})()
