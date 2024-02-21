const languages = [
    {
        name: "c++",
        highlights: [
            { word: "", color: [0, 0, 0] }
        ],
    }
];

function highlightAll() {
    document.querySelectorAll("code").forEach((cd) => {
        const cf = cd.querySelector(".code"), cl = cd.getAttribute("lang");
        let text = cf.innerText, ttext;
        languages.forEach((lang) => {
            console.log(lang)
            if (lang.name !== cl)
                return;

            text.split("\n").forEach((line) => {
                line.split(/ +/).forEach((word) => {
                    
                });
            });
        });
    });
}