const mongoose = require('mongoose');
const {Schema} = mongoose;

const accountSchema = new Schema({
    publicKey: { 
        type: String, 
        required: true, 
    },
    levelReached: Number,
    
    //包含：
    //1到100关的关卡数字，100个数字，int Number
    //对应的关卡是否已经被解锁，bool IsLocked
    //对应的关卡获得过几颗星，int StarsCount
    levelHistory: Array,
    // starsEarnedPerLevel: [Number], // 新添加的字段

    pointRemain: Number,
    pointHistory: Array,
    pointsEarned: { type: Number, default: 0 },  // 新添加的字段

    mccRemain: Number,
    mccHistory: Array,

    bnbPaid: Number,
    bnbPaymentHistory: Array,

    healthRemain: Number,
    healthHistory: Array,

    items: Array,
    itemshistory: Array,
    
    //Twitter的ID
    //Twitter的交互历史

    //referal system
    referalCode: String,
    referalLink: String,
    referalList: Array,
    referralBonus: { type: Number, default: 0 },  // 新添加的字段

    lastAuthentication: Date,

    
});


mongoose.model('accounts', accountSchema);
