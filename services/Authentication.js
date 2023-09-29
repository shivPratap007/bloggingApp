const jwt=require('jsonwebtoken');

const secret="keeponmoving";

function generateToken(data){
    const payload={
        _id:data._id,
        email:data.email,
        profileImage:data.profileImage,
        role:data.role
    }
    const token=jwt.sign(payload,secret);
    return token;
}


function verifyToken(token){
    const payload=jwt.verify(token,secret);
    return payload;
}

module.exports={
    generateToken,
    verifyToken,
}