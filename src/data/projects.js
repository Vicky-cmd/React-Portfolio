import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
const PROJECTS = [
    {
        id: 1,
        title: "React Application",
        description: "A React app built by me using react and js with three different functionalities integrated in it - ",
        descHeader: "",
        descPoints: ["Displaying Portfolio","Display some jokes from a third part api and","Music Master - Display tracks for the requested Artists with option to play preview"],
        link: "https://www.google.com",
        image: project1
    },
    {
        id: 2,
        title: "SmartSave Application",
        description: "An application based on serverless architecture (implemented using AWS Lambda and API Gateway) to store and retrieve file in AWS S3 Storage.",
        descHeader: "Technology used",
        descPoints: ["Android Studio - using java for the app", "Python program hosted using AWS Lambda", "Amazon RDS for Mysql instance", "AWS Gateway For creating a secure entrypoint", "AWS SES For Sending OTPs to users", "AWS S3 for file Storage - using Presigned urls for accessing them"],
        link: "https://github.com/Vicky-cmd/Android-SmartSave.git",
        image: project2
    },
    {
        id: 3,
        title: "Operating systems project",
        description: "My unique final project for my project!",
        descHeader: "",
        descPoints: [],
        link: "https://www.google.com",
        image: project3
    }
];

export default PROJECTS;