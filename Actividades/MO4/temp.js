function calc(opcion1, opcion2, valor,texto){
     let r;
    switch (opcion1) {
        case "Celsius":
            switch (opcion2) {

                case "Kevin":
                    r =c2k(valor);
                    document.getElementById('texto').innerHTML="K=C+273.15";
                    break;
                case "Fahreinheit":
                    r =c2f(valor);
                    document.getElementById('texto').innerHTML="F=C*(9/5)+32";
                    break;
                case "Rankine":
                    r =c2r(valor);
                    document.getElementById('texto').innerHTML="R=C*(9/5)+32+459.67";
                    break;
                default:
                    break;
            }
            break;
        case "Kevin":
            switch (opcion2) {
                case "Celsius":
                    r=k2c(valor);
                    document.getElementById('texto').innerHTML="C=K-273.15";
                    break;
                case "Fahreinheit":
                    r=k2f(valor);
                    document.getElementById('texto').innerHTML="F=K*(9/5)+459.67";
                    break;
                case "Rankine":
                    r=k2r(valor);
                    document.getElementById('texto').innerHTML="R=K*9/5";
                    break;
            
                default:
                    break;
            }
            break;
        case "Fahreinheit":
            switch (opcion2) {
                case "Celsius":
                    r=f2c(valor);
                    document.getElementById('texto').innerHTML="C=(F-32)*5/9";
                    break;
                case "Kevin":
                    r=f2k(valor);
                    document.getElementById('texto').innerHTML="K=(F-32)*5/9+273.15";
                    break;
                case "Rankine":
                    r=f2r(valor);
                    document.getElementById('texto').innerHTML="R=F+459.67";
                    break;
                default:
                    break;
            }
            break;
        case "Rankine":
            switch (opcion2) {
                case "Celsius":
                    r=r2c(valor);
                    document.getElementById('texto').innerHTML="C=(R-32-459.67)*9/5";
                    break;
                case "Kevin":
                    r=r2k(valor);
                    document.getElementById('texto').innerHTML="K=R*5/9";
                    break;
                case "Fahreinheit":
                    r=r2f(valor);
                    document.getElementById('texto').innerHTML="F=R-459.67";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    document.getElementById("resp").value = r;
}

function c2f(c) {
    let t = c * (9/5)+32;
    return t;
};

function c2k(c) {
    let t = c +273.15;
    return t;
};

function c2r(c) {
    let t = c * (9/5)+32+459.67;
    return t;
};

function f2c(f) {
    let t = (f-32)*5/9
    return t;
}

function f2k(f) {
    let t =(f-32)*5/9+273.15;
    return t;
}

function f2r(f) {
    let t = f+459.67;
    return t;
}

function k2c(k) {
    let t = k -273.15;
    return t;
}


function k2f(k) {
    let t = k *(9/5)-459.67;
    return t;
}


function k2r(k) {
    let t = k *(9/5);
    return t;
}

function r2c(r) {
    let t =(r-32-459.67)*9/5;
    return t;
}


function r2f(r) {
    let t = r-459.67;
    return t;
}


function r2k(r) {
    let t = r*5/9;
    return t;
}

function round(num, dec) {
    //TODO
    //Round a number (num) to a specified number of decimals (dec)
}

