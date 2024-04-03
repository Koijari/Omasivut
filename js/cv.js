var kuvat = [
    "../kuvat/Solo_Tech.png",
    "../kuvat/Solo_HTML.png",
    "../kuvat/Solo_CSS.png",
    "../kuvat/Solo_JavaScript.png",
    "../kuvat/Solo_Python.png"
];
let nro =0;
function seuraava() {
    var esitys = document.getElementById("esitys");
    nro++;
    if (nro >= kuvat.length) {
        nro = 0;
    };
    esitys.src = kuvat[nro];
};
