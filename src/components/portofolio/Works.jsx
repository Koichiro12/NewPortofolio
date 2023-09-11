import Work1 from "../../assets/work-1.svg"
import Work2 from "../../assets/work-2.svg"
import Work3 from "../../assets/work-3.svg"
import Work4 from "../../assets/work-4.svg"
import Work5 from "../../assets/work-5.svg"
import Work6 from "../../assets/work-6.svg"

const Category = [
    {
        id:1,
        name:"Web",
    },
    {
        id:2,
        name:"Desktop",
    },
    {
        id:3,
        name:"Mobile",
    },
];

const Works = [
    {
        id:1,
        image:Work1,
        title:"Project Development App",
        category:"Web"
    },
    {
        id:2,
        image:Work2,
        title:"Project Maintenance Web",
        category:"Web"
    },
    {
        id:3,
        image:Work3,
        title:"Project Development Desktop",
        category:"Desktop"
    },
    {
        id:4,
        image:Work4,
        title:"Project Maintenance Desktop",
        category:"Desktop"
    },
    {
        id:5,
        image:Work5,
        title:"Project Development Mobile",
        category:"Mobile"
    },
    {
        id:6,
        image:Work6,
        title:"Project Maintenance Mobile",
        category:"Mobile"
    },
];

export {Works,Category}