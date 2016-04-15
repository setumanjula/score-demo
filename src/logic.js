function initialise() {
    var algebraElem = document.getElementById('algebra_selector');
    var arithmeticElem = document.getElementById('arithmetic_selector');
    var scElem = document.getElementById('sc_selector');
    var crElem = document.getElementById('cr_selector');
    var rcElem = document.getElementById('rc_selector');

    var algShowElem = document.getElementById('algebra_score');
    var arithShowElem = document.getElementById('arithmetic_score');
    var scShowElem = document.getElementById('sc_score');
    var crShowElem = document.getElementById('cr_score');
    var rcShowElem = document.getElementById('rc_score');
    var quantElem = document.getElementById('quant_score');
    var verbalElem = document.getElementById('verbal_score');
    var scoreElem = document.getElementById('total_score');

    var q1, q2, v1, v2, v3, s1, s2, s3;
    var radix = 10;

    function showVal() {
        q1 = parseInt(algebraElem.value, radix);
        q2 = parseInt(arithmeticElem.value, radix);
        v1 = parseInt(scElem.value, radix);
        v2 = parseInt(crElem.value, radix);
        v3 = parseInt(rcElem.value, radix);

        s1 = q1 + q2;
        s2 = v1 + v2 + v3;
        s3 = s1 + s2;

        algShowElem.value = q1;
        arithShowElem.value = q2;
        scShowElem.value = v1;
        crShowElem.value = v2;
        rcShowElem.value = v3;
        quantElem.value = s1;
        verbalElem.value = s2;
        scoreElem.value = s3;
    }

    window.showVal = showVal;
    showVal();
}/**
 * Created by Standard on 4/15/2016.
 */
