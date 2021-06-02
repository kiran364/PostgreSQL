const { request } = require("express");
const express = require("express");
const app = express();
const pool = require("./db");
app.use(express.json());

app.get("/movies", async (req, res) => {
    try{
        const allMovie = await pool.query('select * from movies');
        res.json(allMovie.rows);
    }catch (err){
        console.error(err.message);
    }
})

app.get("/movies/:titleName", async (req, res) => {
    const {titleName} = req.params;
    try{
        const movie = await pool.query('select * from movies where title = $1',[titleName]);
        res.json(movie.rows);
    }catch (err){
        console.error(err.message);
    }
})

app.post("/movies", async (req, res) =>{
    try{
        const { title, description} = req.body;
        const newMovie = await pool.query(
            'INSERT INTO movies (title, description) VALUES ($1, $2) returning *',
            [title, description]
        );
        res.json(newMovie.rows);
    }catch (err){
        console.error(err.message);
    }
})

app.put("/movies/:movId", async(req, res) => {
    const {movId} = req.params;
    const {title, description} = req.body;
    try{
        const updateMovie = await pool.query(
           'update movies set title = $1, description = $2 where id = $3 ',[ title, description, movId]
        );
        res.json("movies are updated!!!");
    }catch (err){
        console.error(err.message);
    }
})

app.delete("/movies/:movId", async(req, res) =>{
    const {movId} = req.params;
    try{
        const deleteMovie = await pool.query('delete from movies where id = $1 returning *',[movId]);
        res.json("movie deleted!!!");
    }catch (err){
        console.error(err);
    }
})
app.listen(3000, () => {
    console.log("server listning at port no 3000");
})