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

app.get('/personal/details', (req, res) => {
    res.json({
        Surname: 'Dike',
        FirstName: 'Victor',
        OtherName: 'Vykito',
        MaidenName: 'Blessing',
        PreviousName: 'Vykito Swavay',
        DOB: '01-01-2002',
        MaritalStatus: 'Single but searching',
        Nationality: 'Nigerian',
        StateOfOrigin: 'Ebonyi',
        LGA: 'Rice producers local government',
        SenatorialDistrict: 'District we no go gree!',
        HomeTown: 'Township',
        ContactAddress: 'Opposite Industrial unit',
        PhoneNumber: '80666419247',
        EmailAddress: 'vykito@gmail.com',
    });
});

app.post('/acceptance/details', (req, res) => {
    res.json({
        NameOfCandidate: 'Dike Victor',
        sex: 'Male',
        MritalStatus: 'Single',
        MaidenName: 'Blessing',
        PreviousName: 'Vykito Swavay',
        DOB: '01-01-2002',
        Nationality: 'Nigerian',
        StateOfOrigin: 'Ebonyi',
        LGA: 'Rice producers local government',
        SenatorialDistrict: 'District we no go gree!',
        HomeTown: 'Township',
        ContactAddress: 'Opposite Industrial unit',
        PhoneNumber: '80666419247',
        EmailAddress: 'vykito@gmail.com',
        GuardianName: "Mommy emmanuella",
        GuardianAddress: "Opposite young christian",
        School: "Federal Polytechnic of Oil and Gas",
        Department: "Computer Science"
    });
});

app.post('/student/details', (req, res) => {
    res.json({
        "Surname": 'Dike',
        "First Name": 'Victor',
        "Other Name": 'Vykito',
        "Sex": 'Male',
        "Mrital Status": 'Single',
        "Date of Birth": '01-01-2002',
        "Place of Birth": "Bonny Island",
        "Nationality": 'Nigerian',
        "State of Origin": 'Ebonyi',
        "LGA": 'Rice producers local government',
        "Religion": 'Christianity',
        "Name of Spouse": 'Eve',
        "Permanent Home Address": 'Kingdom of Heaven',
        "Current Home Address": 'Opposite Industrial unit',
        "Phone Number": '80666419247',
        "Email Address": 'vykito@gmail.com',
        "Next of Kin": "Emmanuella Hart",
        "Address of Next of Kin": "Opposite young christian",
        "Next of kin Phone Number": "Federal Polytechnic of Oil and Gas",
        "Names and Addrss of 2 Referees": "Computer Science"
    });
});

app.post('/student/personal/data', (req, res) => {
    res.json({
        "Surname": 'Dike',
        "Other Name": 'Victor',
        "Sex": 'Male',
        "Mrital Status": 'Single',
        "Date of Birth": '01-01-2002',
        "Place of Birth": "Bonny Island",
        "Nationality": 'Nigerian',
        "State of Origin": 'Ebonyi',
        "LGA": 'Rice producers local government',
        "Religion": 'Christianity',
        "Name of Spouse": 'Eve',
        "Permanent Home Address": 'Kingdom of Heaven',
        "Current Home Address": 'Opposite Industrial unit',
        "Phone Number": '80666419247',
        "Email Address": 'vykito@gmail.com',
        "Next of Kin": "Emmanuella Hart",
        "Address of Next of Kin": "Opposite young christian",
        "Next of kin Phone Number": "Federal Polytechnic of Oil and Gas",
        "Names and Addrss of 2 Referees": "Computer Science"
    });
});

app.post('/academic/record', (req, res) => {
    res.json( {
        academicRecord: {
                            Institution: 'Bonny National Grammer School',
                            Address: 'Opposite begger road junction',
                            StartDate: '2015',
                            EndDate: '2019'
                        },
        qualifications: {
            "English Language": "A",
            "Mathematics": "B",
            "Physics": "C",
            "Chemistry": "A",
            "Computer Science": "B",
            "Biology": "C",
            "Fisheries": "A",
            "Civic Education": "B",
            "Exam Date": "01-2022",
            "Center": "Rivers State University of Science and Technology",
            "Exam Number": "654321"
        }
    
    });
});

app.get('/manage/applications', (req, res) => {
    res.json([
        {FullName: "Israel Favour", Email: "israel@gmail.com", Department: "Computer Science"},
        {FullName: "Chinyere Maduforo", Email: "chinyere@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Emmanuel Sunday", Email: "emmanuel@gmail.com", Department: "Isset"},
        {FullName: "Jumbo Grace", Email: "grace@gmail.com", Department: "Computer Science"},
        {FullName: "Apex Mennenata", Email: "apex@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Gift Johnson", Email: "giftjohnson@gmail.com", Department: "Computer Science"},
        {FullName: "Tammunosa Baningo", Email: "tammunosa@gmail.com", Department: "Computer Science"},
        {FullName: "King David", Email: "kingdavid@gmail.com", Department: "Computer Science"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"}
    ]);
});

app.get('/approved/students', (req, res) => {
    res.json([
        {FullName: "Israel Favour", Email: "israel@gmail.com", Department: "Computer Science"},
        {FullName: "Chinyere Maduforo", Email: "chinyere@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Emmanuel Sunday", Email: "emmanuel@gmail.com", Department: "Isset"},
        {FullName: "Jumbo Grace", Email: "grace@gmail.com", Department: "Computer Science"},
        {FullName: "Apex Mennenata", Email: "apex@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Gift Johnson", Email: "giftjohnson@gmail.com", Department: "Computer Science"},
        {FullName: "Tammunosa Baningo", Email: "tammunosa@gmail.com", Department: "Computer Science"},
        {FullName: "King David", Email: "kingdavid@gmail.com", Department: "Computer Science"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"}
    ]);
});

app.get('/all/students', (req, res) => {
    res.json([
        {FullName: "Israel Favour", Email: "israel@gmail.com", Department: "Computer Science"},
        {FullName: "Chinyere Maduforo", Email: "chinyere@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Emmanuel Sunday", Email: "emmanuel@gmail.com", Department: "Isset"},
        {FullName: "Jumbo Grace", Email: "grace@gmail.com", Department: "Computer Science"},
        {FullName: "Apex Mennenata", Email: "apex@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Gift Johnson", Email: "giftjohnson@gmail.com", Department: "Computer Science"},
        {FullName: "Tammunosa Baningo", Email: "tammunosa@gmail.com", Department: "Computer Science"},
        {FullName: "King David", Email: "kingdavid@gmail.com", Department: "Computer Science"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Joel Promise", Email: "joelpromise@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Allison Divine", Email: "divineallison@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "chibuzor Michael", Email: "chibuzor@gmail.com", Department: "Petroleum Marketing"},
        {FullName: "Prince Hart", Email: "princehart@gmail.com", Department: "Isset"},
        {FullName: "Emmanuella Jumbo", Email: "emmanuella@gmail.com", Department: "Isset"},
        {FullName: "Vincent Allison", Email: "vinentallison@gmail.com", Department: "Computer Science"},
        {FullName: "Monday Akpan", Email: "akpanmonday@gmail.com", Department: "Computer Science"},
        {FullName: "Uzoma Eze", Email: "uzomaeze@gmail.com", Department: "Isset"},
        {FullName: "Daniel Abraham", Email: "abrahamdaniel@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Allison Grace", Email: "allisongrace@gmail.com", Department: "Electrical Engineering"},
        {FullName: "Mercy Divine", Email: "mercydivine@gmail.com", Department: "Electrical Engineering"}
    ]);
});




app.listen(port, () => {
    console.log(`API is now active on port ${port}`);
});