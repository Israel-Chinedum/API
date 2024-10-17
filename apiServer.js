import express from 'express';
import cors from 'cors';

const app =  express();
const port = process.env.PORT || 2500;

app.use(cors());
app.use(express.json());

//POST REQUEST HADLERS 
app.post('', (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.status(400).json({error: 'Request body is empty'});
    } else{
        res.json({
            FirstName: 'Daniel',
            MiddleName: 'Mazi',
            LastName: 'Abraham',
            Email: `${req.body.Email}`,
            PhoneNumber: '09163383511',
            ContactAddress: 'Round about',
            UserName: 'MaziDaniel',
            Password: '123456'
        });
        console.log(req.body);
    }
});

app.post('/profile/data', (req, res) => {
    if(Object.keys(req.body).length === 0){
        res.status(400).json({error: 'Request body is empty'});
    } else{
        res.status(200).json({message: 'Data has been recieved!'});
        console.log(req.body);
    }
});

app.listen(port, () => {
    console.log('Server is now active!');
});