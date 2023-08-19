import db from "../modelsJWT";
const checkExitEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await db.user.findOne({ where: { email: email } });

  if (user === null) {
    next();
    return;
  } else {
    return res.status(400).json({
      errCode: 1,
      message: "dupplicate email !!",
    });
  }
};

const verifySignUp = {
  checkExitEmail,
};

export default verifySignUp;
