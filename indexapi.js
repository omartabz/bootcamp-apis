import cors from 'cors'
import express from 'express'
import { longestWord, shortestWord, wordLengths } from './wordGame.js';
import { totalPhoneBill } from './totalPhoneBill.js';
import { enoughAirtime } from './enoughAirtime.js'; 
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))

app.get('/api/wordGame/', function (req, res) {
    const sentence = req.body.sentence

    let long = longestWord(sentence);
    let short = shortestWord(sentence);
    let length = wordLengths(sentence);

    res.json({

        longestWord: long,
        shortestWord: short,
        sum: length,

    });
});


let callCount = 2.75;
let smsCount = 0.65;
app.post('/api/phonebill/total', function (req, res) {
    const usuage = req.body.bill
    const totalCost = totalPhoneBill(usuage)
    const total = parseFloat(totalCost.replace('R', ''));

    res.json({ total });
});

app.get('/api/phonebill/prices', function (req, res) {
    res.json({
        call: callCount,
        sms: smsCount
    });
});

app.post('/api/phonebill/price', function (req, res) {
    const { type, price } = req.body;

    if (items[i] === 'call') {
        callCount++;
    } else if (items[i] === 'sms') {
        smsCount++;
    } else {
        return res.status(400).json({ error: 'Invalid type' });
    }
    res.json({ status: 'success', message: `The ${type} was set to ${price}` });
})

app.post('/api/enough/', function (req, res) {
    const { usage, available} = req.body;
    const result= enoughAirtime(usage,available)
 res.json({
    result: parseFloat(result)
})
})


let PORT = process.env.PORT || 3011;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});