const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/authRoute');
const piauth = require('./routes/piechart');

const app = express();

const cors = require('cors');
const radarChart = require('./routes/radarchart');
const radarCurve  = require('./routes/radarcurveChat');
const funnel  = require('./routes/funnelChart');
const area  = require('./routes/areachart');

dotenv.config();
app.use(cors());
app.use(express.json());



try {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    
  )
  console.log("connected to mongodb");
} catch (error) {
  console.log(error);
}


app.use("/api/auth",authRoute);
app.use("/api/piChart",piauth)
app.use("/api/radarChart",radarChart)
app.use("/api/radarCurveChart",radarCurve)
app.use("/api/funnelChart",funnel)
app.use("/api/areaChart",area)


app.listen(process.env.PORT || 3001,()=>{
      console.log(`Backend runnig on port ${process.env.PORT}`);
})