export const registerUser = (req, res) => {
  const { fname, lname, email, password } = req.body;

  console.log(fname, lname, email, password);
  res.send(`The data you entered is ${fname} ${lname} ${email} ${password} `);
};
