// const { randomBytes, createHash } = require('crypto');
const mongoose = require('mongoose');



const usermodel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
    profileImage: {
        type: String,
        default: '/public/149071.png',
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
    }
}, { timestamps: true });

// usermodel.pre('save', function (next) {
//     const user = this;

//     if (!user.isModified('password')) return next();

//     const salt = randomBytes(16).toString('hex');
//     const hashedPassword = createHash('sha256')
//         .update(user.password + salt)
//         .digest('hex');

//     user.salt = salt;
//     user.password = hashedPassword;

//     next();
// });

// usermodel.statics.matchedPassword = async function (email, password) {
//     const user = await this.findOne({ email });
//     if (!user) throw new Error("User not found");

//     const salt = user.salt;
//     const hashedPassword = user.password;
//     const updatedhashedPassword = createHash('sha256')
//         .update(password + salt)
//         .digest('hex');

//     if (hashedPassword !== updatedhashedPassword) throw new Error("Password is incorrect");

//     return { ...user.toObject(), password: undefined, salt: undefined };
// }

const User = mongoose.model('user', usermodel);

module.exports = {
    User
};
