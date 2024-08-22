/* eslint-disable */

// TODO: test

const _projects = [
    {
        "id": "website-portfolio",
        "title": "Website Portfolio",
        "descShort": "This website, actually!",
        "descLong": "The website you are on right now is built upon a React.js framework accompanied styling from Bootstrap 5, and p5.js for sketch backgrounds.",
        "languages": ["React JS", "HTML", "CSS", "Javascript", "Bootstrap", "SASS", "p5.js", "Git"],
        "github": "https://github.com/OverdriveNGain/portfolio"
    },
    {
        "id": "simple-money-counter",
        "title": "Simple Money Counter",
        "descShort": "A simple money counter app with a ready to use calculator at any time",
        "descLong": "This is a simple android application that helps you counts physical cash with single taps for each denomination. The app also includes an easy-to-access calculator at a moments notice.",
        "languages": ["Flutter"],
        // "playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.simplemoneycounter",
        "github": "https://github.com/OverdriveNGain/counter-calc",
        "img": [
            "https://lh3.googleusercontent.com/d/1LDQwo0PF8nGWi1lasNa6R_Jb1nw2LgS3",
            "https://lh3.googleusercontent.com/d/1lHo9kgjF-uh8vNjrwnMFvclfBmmjW2O6",
            "https://lh3.googleusercontent.com/d/1X1vtdNIJyhUzwM9mdQrzyzrL4AiDRNH-"
        ],
        "imgPortrait": true
    },
    {
        "id": "buwad-republic",
        "title": "Buwad Republic",
        "descShort": "A promotional website for a growing dried fish business",
        "descLong": "A promotional website for a growing dried fish business started by both of my parents. It uses the Flutter framework to build the actual web application.",
        "languages": ["Flutter", "Firebase"],
        "website": "https://buwad-republic.web.app/",
        "img": [
            "https://lh3.googleusercontent.com/d/1zJkTLpSRr9CE1emI62uEL05MrpPL2Iig",
            "https://lh3.googleusercontent.com/d/1o53HYkCmnx1gc_H5zWhkQjIpfeOadbZt",
            "https://lh3.googleusercontent.com/d/1JNptpt0ZoJo5RIfMg7UrpNLp7gVNoKFx",
            "https://lh3.googleusercontent.com/d/1rt19o5e_Skcz_gTSWFdNh5Knl2nRnJTH"
        ]
    },
    {
        "id": "loose-blocks",
        "title": "Loose Blocks",
        "descShort": "A classic game without the training wheels",
        "descLong": "A classic game without the training wheels. This game was one of the few projects that I have completed with Unity 3D; complete with self-produced assets. The game is currently still available on the Google Play store.",
        "languages": ["Unity 3D", "Adobe Illustrator"],
        // "playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.looseblocks",
        "img": [
            "https://lh3.googleusercontent.com/d/1bI_fOm0DWA1Gnu1B4O3z7T5Z5IhaAYvE",
            "https://lh3.googleusercontent.com/d/1S2ZZpoXhNBY3_ClNMtLVAJUWYX2cwa6A",
            "https://lh3.googleusercontent.com/d/13j1W3_MknfUzaRNySZ8d4EmNZgSHgoWN",
            "https://lh3.googleusercontent.com/d/1ivtWxkplYa1N6Ijvi5Csjam0q-LF8YPn"
        ],
        "imgPortrait": true
    },
    {
        "id": "cell-trace",
        "title": "Cell Trace",
        "descShort": "A simple mobile puzzle game",
        "descLong": "This is a game created in late 2019 that was created using Unity 3D. This was my first mobile game application at the time, and it was during Christmas break. The aim of the game is to clear out the cells on the board without lifting your finger.",
        "languages": ["Unity 3D", "Adobe Illustrator"],
        // "playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.celltrace",
        "img": [
            "https://lh3.googleusercontent.com/d/1T7Eu6_OAzt9H2o4rgH4pE5BwP9SHa2hp",
            "https://lh3.googleusercontent.com/d/1MRNwUd5v74Fg9vxgpkG5JrTNfyzRwgW8",
            "https://lh3.googleusercontent.com/d/1ob-Vhs04d9zfA0cU8_HaCBCZIfePLEA3",
            "https://lh3.googleusercontent.com/d/1MhgifHRS_pdrtqVZXgyvoNCOO07U6zkG"
        ],
        "imgPortrait": true
    },
    {
        "id": "loose-tower",
        "title": "Loose Tower",
        "descShort": "A 3D mobile game where you create a tower",
        "descLong": "This is a game created in early 2020 that was created using Unity 3D. This was done during my free time in my early college years. The aim of the game is to stack a tower as high as possible without letting it crash down. It is inspired by the games Tetris and Stack.",
        "languages": ["Unity 3D", "Adobe Illustrator"],
        // "playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.loosetower",
        "img": [
            "https://lh3.googleusercontent.com/d/1ZfDGpPkO1mduScsUl_WbdfCUN2beYFFA",
            "https://lh3.googleusercontent.com/d/1q-tHsPYNj0zPbC7m8zj-iCIO3BkrM39-",
            "https://lh3.googleusercontent.com/d/1py_vTEWEfxhGwQQRfqcowCSmPmfnpQCO",
            "https://lh3.googleusercontent.com/d/1NJ5i0T1s0AZMp7rkEkw3Fhdr6kd6e7zA"
        ],
        "imgPortrait": true
    },
    {
        "id": "just-crafts-ph",
        "title": "Just Crafts PH App",
        "descShort": "A mobile app that showcases a sticker business' designs",
        "descLong": "This mobile apps showcases the sticker designs of Just Crafts PH, a sticker business which provides various designs and sticker categories.",
        "languages": ["Flutter"]
    }
];
const allProjects = () => {
    return _projects;
}
const getProject = (id) => {
    return _projects.find((proj) => proj.id === id);
}

export { allProjects, getProject };