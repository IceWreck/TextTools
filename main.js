




function uppercase() {

    inputJS = $('#p1').val();
    var final = inputJS.toUpperCase();
    document.getElementById('p1r').innerHTML = final;

}



function upcopy() {

    var copyvar = document.getElementById('p1r').innerHTML;
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}


function lowercase() {

    inputJS = $('#p2').val();
    var final = inputJS.toLowerCase();
    document.getElementById('p2r').innerHTML = final;

}

function lowcopy() {

    var copyvar = document.getElementById('p2r').innerHTML;
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}

function titlecase() {



    String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };


    inputJS = $('#p3').val();
    var final = inputJS.toProperCase();
    document.getElementById('p3r').innerHTML = final;

}

function titlecopy() {

    var copyvar = document.getElementById('p3r').innerHTML;
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}



function sencase() {


    inputJS = $('#p4').val();



    var string = inputJS;

    var n = string.split(".");
    var vfinal = ""
    for (i = 0; i < n.length; i++) {
        var spaceput = ""
        var spaceCount = n[i].replace(/^(\s*).*$/, "$1").length;
        n[i] = n[i].replace(/^\s+/, "");
        var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
        for (j = 0; j < spaceCount; j++)
            spaceput = spaceput + " ";
        vfinal = vfinal + spaceput + newstring + ".";
    }
    vfinal = vfinal.substring(0, vfinal.length - 1);
    var final = vfinal;

    document.getElementById('p4r').innerHTML = final;

}


function sencopy() {

    var copyvar = document.getElementById('p4r').innerHTML;
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}

function count() {

    inputJS = $('#p5').val();
    var quarterfinal = inputJS.length;
    var semifinal = inputJS.split(" ").length;
    var final = semifinal + " Words and " +
        quarterfinal + " Characters"
    document.getElementById('p5r').innerHTML = final;

}




function rtw() {

    var copyvar = "Aliquip";
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}

function rtp() {

    var copyvar = "Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}

function rtt() {

    var copyvar = "Cillum Dolore Fugiat";
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}

function rts() {

    var copyvar = "Ut enim ad minim veniam, quis nostrud exercitation.";
    console.log(copyvar);
    cordova.plugins.clipboard.copy(copyvar);
    copyinfo();

}






function copyinfo() {

    App.dialog({
        title: 'Info',
        text: 'Your text has been copied to the clipboard !',
        okButton: 'Ok',
    });

}