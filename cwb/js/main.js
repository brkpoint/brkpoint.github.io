const languages = [
    {
        name: "c++",
        highlights: [
            { word: "", color: [] }
        ],
    }
];

function highlightAll() {
    document.querySelectorAll("code .code").forEach((cd) => {
        let text = cd.innerText;
        languages.forEach((lang) => {
            if (lang.name == cd.getAttribute("lang")) {
                text.split("\n").forEach((line) => {
                    line.split(/ +/).forEach((word) => {
                        console.log(word);
                    });
                });
            }
        });
    });
}