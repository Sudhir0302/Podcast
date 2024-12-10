 const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

const songDB = mongoose.createConnection('mongodb://localhost:27017/songDB');

const podcastDB = mongoose.createConnection('mongodb://localhost:27017/PodcastDB');

songDB.on('connected',()=>{
    console.log("DB connected");
})

const songSchema = new mongoose.Schema({
    title: String,
    file: {
        data: Buffer,
        contentType: String,
    },
    genre: String,
});

const Song = songDB.model('Song', songSchema);
const Song1 = podcastDB.model('Song', songSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage });


app.use(cors()); 
app.use(express.json());
app.use(express.static('public')); 


app.post('/upload', upload.single('song'), async (req, res) => {
    const newSong = new Song({
        title: req.body.title,
        file: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
        },
        genre: req.body.genre
    });

    try {
        await newSong.save();
        res.status(201).json(newSong); 
    } catch (error) {
        res.status(500).send('Error uploading song');
    }
});

app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find(); 
        res.json(songs); 
    } catch (error) {
        res.status(500).send('Error retrieving songs');
    }
});

app.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) return res.status(404).send('Song not found');
        res.set('Content-Type', song.file.contentType);
        res.send(song.file.data);
    } catch (error) {
        res.status(500).send('Error retrieving song');
    }
});


app.get('/pod', async (req, res) => {
    try {
        const songs = await Song1.find(); 
        res.json(songs); 
    } catch (error) {
        res.status(500).send('Error retrieving songs');
    }
});

app.get('/pod/:id', async (req, res) => {
    try {
        const song = await Song1.findById(req.params.id);
        if (!song) return res.status(404).send('Song not found');
        res.set('Content-Type', song.file.contentType);
        res.send(song.file.data);
    } catch (error) {
        res.status(500).send('Error retrieving song');
    }
});
    

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
