import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '60d' });

  res.cookie('jwt', token, {
    maxAge: 60 * 24 * 60 * 60 * 1000,  // MS
    httpOnly: true,  // prevent XSS attacks cross-site
    sameSite: 'strict',  // prevent SCRF attacks cross-site request
    secure: process.env.NODE_ENV !== 'dev'
  });
};

export default generateTokenAndSetCookie;