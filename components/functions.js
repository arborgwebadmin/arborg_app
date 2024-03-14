export function currencyFormat( x ) {
    x.toString().replace(/[\D\s\._\-]+/g, "")
    x = parseInt(x, 10);
    return x.toLocaleString("de-DE") + " kr.";
}

export function percentageFormat( x ) {
    return x * 100 + "%"
}

/**
 * Validates that input is number and adds seperator.
 * @param { event } target 
 * @returns { string } value with seperator
 */
export function inputFormat( target ) {
    let val = "";
    if(target.value !== "") {
        if (target.classList.contains("is-invalid")){
            target.classList.remove("is-invalid");
            target.nextSibling.remove();
        }
        val = target.value.toString().replace(/[\D\s\._\-]+/g, "");
        val = parseInt(val, 10);
        val = val.toLocaleString("de-DE");
    }
    if(val === "NaN"){
        val = "";
        if (!target.classList.contains("is-invalid")) {
            target.classList.add("is-invalid");
            target.insertAdjacentHTML("afterend",'<div class="invalid-feedback">Sláðu inn tölu</div>');
        }
    }
    return val;
}

export function formatedToInt (str) {
    let val = str.toString().replace(/[\D\s\._\-]+/g, "");
    val = parseInt(val, 10);
    return val;
}

    
