const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
   
    if(!username){
         return res.status(400).json({
            message:"user name required"
         })
    } else if(!email){
        return res.status(400).json({
            message:"email required"
         })
    }else if(!password){
        return res.status(400).json({
            message:"password required"
         })
    }
    
    const existeduser=await User.findOne({email})
    if(existeduser){
        return res.status(400).json({
            success:false,
            message:"user already existed please login"

        })
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' ,data:newUser});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found ' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Password not matched' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return  res.cookie("token",token).json({ message:"user login successfully",token, userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message , message:"error in login please try again"});
  }
};
