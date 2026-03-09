import pg from "pg";
const {Pool} =pg;
import "dotenv/config";


const pool=new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
})
pool.connect((err,client,release)=>{
    if(err){
        console.log("gadbad hai bhaiya",err);
    }
    else{
        console.log("connect hogaya bhai");
    }
    release();
    
})

export default pool;