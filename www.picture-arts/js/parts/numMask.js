function numMask() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    
    var input = document.querySelector("#tel");
    var input1 = document.querySelector("#tel1");
    var input2 = document.querySelector("#tel2");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    input1.addEventListener("input", mask, false);
    input1.addEventListener("focus", mask, false);
    input1.addEventListener("blur", mask, false);

    input2.addEventListener("input", mask, false);
    input2.addEventListener("focus", mask, false);
    input2.addEventListener("blur", mask, false);

}
module.exports = numMask;