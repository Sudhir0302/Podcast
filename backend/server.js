const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/songDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
    title: String,
    file: {
        data: Buffer,
        contentType: String,
    },
});

const Song = mongoose.model('Song', songSchema);

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
