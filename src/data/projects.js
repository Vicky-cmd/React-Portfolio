import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
const PROJECTS = [
    {
        id: 1,
        title: "React Application",
        description: "The React app built by me and comprises of three seperate projects merged into a single one and mapped using the BrowserRouter found in npm library.",
        descHeader: "Integrated Functionalities",
        descPoints: ["Displaying Portfolio","Display some jokes from a third part api with options to refreash it with button click","Music Master - Display tracks for the requested Artists with option to play the preview, if available. Currently, it has been implemented using a third party api that acts as a wrapper around the spotify apis to remove the need for an authentication token or adeveloper account."],
        link: "https://github.com/Vicky-cmd/React-Portfolio.git",
        image: project1
    },
    {
        id: 2,
        title: "SmartSave Application",
        description: "An application based on serverless architecture (implemented using AWS Lambda and API Gateway) to store and retrieve file in AWS S3 Storage. Furthermore, a six digit auth token is used to validate the requests and must be regenerates after 24 hrs.",
        descHeader: "Technology used",
        descPoints: ["Android Studio - using java for the app", "Python program hosted using AWS Lambda", "Amazon RDS for Mysql instance", "AWS Gateway For creating a secure entrypoint", "AWS SES For Sending OTPs to users.", "AWS S3 for file Storage - using Presigned urls for accessing them"],
        link: "https://github.com/Vicky-cmd/Android-SmartSave.git",
        image: project2
    },
    {
        id: 3,
        title: "Content Sharing App",
        description: "A Content Sharing application implemented using Springboot backend and JSP for creating the dynamic user interface.",
        descHeader: "Additional Features",
        descPoints: ["User identifiaction for signup/login operations", "Supports Outh 2 Authentication with Google", "Rich Text Editor for creating articles and Comments", "Supports uploading image to display in articles and displaying video from youtube/facebook", "Option to send the option to set password in mail to the newly registered email id using Java SMTP protocol."],
        link: "https://github.com/Vicky-cmd/Springboot-ContentSharing.git",
        image: project3
    }
];

export default PROJECTS;