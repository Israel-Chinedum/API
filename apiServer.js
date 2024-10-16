import express from 'express';
import cors from 'cors';

const app =  express();
const port = process.env.PORT || 2500;

app.use(cors());
app.user(express.json());

//GET REQUEST HADLERS 
app.get('', (req, res) => {
    res.json({
        FirstName: 'Daniel',
        MiddleName: 'Mazi',
        LastName: 'Abraham',
        Email: 'abarahamdaniel@gmail.com',
        PhoneNumber: '09163383511',
        ContactAddress: 'Round about',
        UserName: 'MaziDaniel',
        Password: '123456'
    });
});

app.listen(port, () => {
    console.log('Server is now active!');
});