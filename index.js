const express = require('express');
const canvas = require('canvas');

const app = express();

app.get('/image', async (req, res) => {
    const images = await Promise.all([
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
        canvas.loadImage('https://....png'),
    ]);

    const cvs = canvas.createCanvas(images[0].width, images[0].height);
    const ctx = cvs.getContext('2d');
    images.forEach((image) => {
        ctx.drawImage(image, 0, 0, images[0].width, images[0].height);
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(cvs.toBuffer('image/png'));
});

app.listen(3000, () => {
    console.log('listening on 3000');
});
