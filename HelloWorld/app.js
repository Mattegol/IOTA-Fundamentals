const IOTA = require('iota.lib.js')
const iota = new IOTA({provider:'https://nodes.testnet.iota.org:443'})
const seed = 'QVKYDLBXZAQUXRAFCKNLJZIJWBFRFBAJGXPXLHBYBCIBNXXCJQBVJBGGUZFDAIDOXNTGMUHTEVSEFRCGZ'
const sendToAddress = 'FBVRRGFTENGLMEQUVVONTYVIMGRWLPCCNKSSRSJOZCDVHCMKRAZKWXLB9QDTWVRHGHF9VVMPNPGPNPBEWWLTSGSWSY'

const transaction =[
    {
        value: 0,
        address: sendToAddress,
        tag: 'HELLOWORLD'
    }
]

iota.api.sendTransfer(seed, 3, 9, transaction, (error, success)=>{
    if(error){
        console.log(error);
    }else{
        console.log(success);
    }
})