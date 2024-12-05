const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieparser=require("cookie-parser")
const {connectDB} = require('./config/database.js');
const authRoutes = require('./routes/authRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieparser())

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
