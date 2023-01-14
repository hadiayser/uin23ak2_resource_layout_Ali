const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
]
    let menuHTML = document.getElementById("ulTxt2");

    const li = document.createElement("li");

    var overskrift2 = document.getElementById("overskrift2");

    const para = document.createElement("p");

    let parap2 = document.getElementById("lorem-ipsum2");

    const maptest1 = resources.map((categoryz) => {
        
        return [categoryz.category];
    });

    let katJs = maptest1;

    const kat2overskrift = overskrift2.innerHTML = katJs;

    const test7 = overskrift2.innerHTML = katJs;

    const maptest2 = resources.map((categoryz) => {
        return [categoryz.text];
    });

    let htmltxt2 = maptest2;

    var txt2 = parap2.innerHTML = htmltxt2;

    const maptest3 = resources.map((categoryz) => {

        categoryz.sources.map((item) => {

            var paragraftest = document.createElement("li");

            var ultest = document.createElement("a");

            ultest.innerHTML = item.title;

            ultest.href = item.url;

            paragraftest.insertAdjacentElement("beforeend", ultest);

            menuHTML.appendChild(paragraftest);

        })
    });