//Importing all image file from assets folder 
import earth from "../assets/Earth_Inside.jpg";
import tree from "../assets/../assets/tree_carbon.jpg";
import stone from "../assets/stone_sahara.jpg";
import nature from "../assets/Nature_ancientEarth.jpeg";
import human from "../assets/human_ancestors.jpeg";
import living from "../assets/living_things.jpeg";
import pollution from "../assets/pollution_Earth.jpeg";

/* Creating a JS Array and inside it has different objects.*/

const topics = [
    {
        title: "Earth",
        image: earth,
        description: "Earth is our home planet, rich with ecosystems and natural wonders.",
        link: "https://www.hutton.ac.uk/",
        Nasa: {
            title: "Earth",
            image: ""
        },
        GBIF: {
            title: "Earth",
            image: ""
        }
    },
    {
        title: "Tree",
        image: tree,
        description: "Trees are vital for life, providing oxygen and supporting biodiversity.",
        link: "https://suzannesimard.com/",
        Nasa: {
            title: "Tree",
            image: ""
        },
        GBIF: {
            title: "Tree",
            image: ""
        }
    },
    {
        title: "Stone",
        image: stone,
        description: "Stones shape landscapes and tell the story of Earth's history.",
        link: "https://independent.academia.edu/FinestoneEmma",
        Nasa: {
            title: "Stone",
            image: ""
        },
        GBIF: {
            title: "Stone",
            image: ""
        }
    },
    {
        title: "Nature",
        image: nature,
        description: "Nature encompasses all living and non-living things in the environment.",
        link: "https://www.nature.com/scitable/spotlight/charles-darwin-7567158/",
        Nasa: {
            title: "Nature",
            image: ""
        },
        GBIF: {
            title: "Nature",
            image: ""
        }
    },
    {
        title: "Human",
        image: human,
        description: "Humans interact deeply with Earth's systems and shape its future.",
        link: "https://naturalhistory.si.edu/education/teaching-resources/anthropology-and-social-studies/human-evolution",
        Nasa: {
            title: "Human",
            image: ""
        },
        GBIF: {
            title: "Human",
            image: ""
        }
    },
    {
        title: "Living",
        image: living,
        description: "Living organisms form the foundation of ecosystems worldwide.",
        link: "https://scientistswarning.forestry.oregonstate.edu/",
        Nasa: {
            title: "Living",
            image: ""
        },
        GBIF: {
            title: "Living",
            image: ""
        }
    },
    {
        title: "pollution",
        image: pollution,
        description: "Pollution impacts ecosystems, air, and water quality, affecting all life forms.",
        link: "https://education.nationalgeographic.org/resource/pollution/",
        Nasa: {
            title: "pollution",
            image: ""
        },
        GBIF: {
            title: "pollution",
            image: ""
        }
    },
];


//module.exports = topics;
export default topics;