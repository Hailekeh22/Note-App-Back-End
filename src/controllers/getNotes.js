import { verifyToken } from "../middlewares/verifyToken.js";

export const getNotes = async (req, res) => {
  const { email } = req.body;

  await Notes.find({ email: email }).then((err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
};
