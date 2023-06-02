window.addEventListener('DOMContentLoaded', event => {
    // Get the modals
    var modalPOO = document.getElementById("myModalPOO");
    var modalSI = document.getElementById("myModalSI");
    var modalTIC = document.getElementById("myModalTIC");
    var modalPSS = document.getElementById("myModalPSS");
    var modalEP = document.getElementById("myModalEP");

    // Get the buttons that open the modals
    var BtnPOO = document.getElementById("BtnPOO");
    var BtnSI = document.getElementById("BtnSI");
    var BtnTIC = document.getElementById("BtnTIC");
    var BtnPSS = document.getElementById("BtnPSS");
    var btnEP = document.getElementById("BtnEC");

    // Get the <span> elements that close the modals
    var spans = document.getElementsByClassName("close");

    // When the user clicks on a button, open the respective modal
    BtnPOO.onclick = function () {
        modalPOO.style.display = "block";
    }
    BtnSI.onclick = function () {
        modalSI.style.display = "block";
    }
    BtnTIC.onclick = function () {
        modalTIC.style.display = "block";
    }
    BtnPSS.onclick = function () {
        modalPSS.style.display = "block";
    }
    btnEP.onclick = function () {
        modalEP.style.display = "block";
    }

    // When the user clicks on <span> (x), close the respective modal
    spans[0].onclick = function () {
        modalPOO.style.display = "none";
    }
    spans[1].onclick = function () {
        modalSI.style.display = "none";
    }
    spans[2].onclick = function () {
        modalTIC.style.display = "none";
    }
    spans[3].onclick = function () {
        modalPSS.style.display = "none";
    }
    spans[4].onclick = function () {
        modalEP.style.display = "none";
    }

    // When the user clicks anywhere outside of a modal, close it
    window.onclick = function (event) {
        if (event.target == modalPOO) {
            modalPOO.style.display = "none";
        }
        if (event.target == modalSI) {
            modalSI.style.display = "none";
        }
        if (event.target == modalTIC) {
            modalTIC.style.display = "none";
        }
        if (event.target == modalPSS) {
            modalPSS.style.display = "none";
        }
        if (event.target == modalEP) {
            modalEP.style.display = "none";
        }
    }
});
