const sendEmail = require("./lib/utils/mailer");
const { ERROR_CODES } = require("./lib/error/errorCodes.js");

exports.sendGift = async (req, res) => {
    const email = req.body.email ;
    const subject = "test subj" ;
    const message = " test msg" ;
    console.log(email) ;
    await sendEmail({
        email: email ,
        subject: subject ,
        message: message,
    }) ;

    return res.status(200).json({
        status: "success",
        message: "Gift delivred successfully",
    });

};

