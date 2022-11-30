import React from 'react'
import Work1 from "../../assets/pro.webp";
import Work2 from "../../assets/port.png";
import Work3 from "../../assets/sr.jpg";
import Work4 from "../../assets/soci.jpeg";
import Work5 from "../../assets/todo.png";
import Work6 from "../../assets/image.png";

const Menu = [
    {
        id: 1,
        image: Work1,
        title: "Task manager Application",
        description: "All the Intotek employees used this application to manage their day to day tasks",
        technologies: <ol>
            <ul>PHP</ul>
            <ul>MySQL</ul>
            <ul>Xampp</ul>
        </ol>,
        category: "Intotek",
    },
    // {
    //     id: 6,
    //     image: Work6,
    //     title: "Alumni App",
    //     description: "Companies track the employment status of thier former interns(Alumni",
    //     technologies: <ol>
    //     <ul>PHP</ul>
    //     <ul>MySQL</ul>
    //     <ul>Xampp</ul>
    // </ol>,
    //     category: "DA",
    // },
   
    {
        id: 3,
        image: Work3,
        title: "School Register and Demerit System",
        description:"High School learners used the app to mark register daily based on thier location",
        technologies: <ol>
        <ul>PHP</ul>
        <ul>MySQL</ul>
        <ul>Xampp</ul>
    </ol>,
        category: "University",
    },
    // {
    //     id: 5,
    //     image: Work5,
    //     title: "To-do app",
    //     description:"Users manage thier daily to daily task by inputing them on the app and change status when done",
    //     technologies: <ol>
    //     <ul>PHP</ul>
    //     <ul>MySQL</ul>
    //     <ul>Xampp</ul>
    // </ol>,
    //     category: "DA",
    // },
    // {
    //     id: 4,
    //     image: Work4,
    //     title: "Social Media clone",
    //     description: "Social media platform where users can blog,follow/unfollow and like post of others",
    //     category: "DA",
    // },
    
    {
        id: 2,
        image: Work2,
        title: "Portfolio website",
        description:"My own resume where I showcase my skills and experience",
        technologies: <ol>
        <ul>PHP</ul>
        <ul>MySQL</ul>
        <ul>Xampp</ul>
    </ol>,
        category: "DA",
    },

]

export default Menu
