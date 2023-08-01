// document.getElementById('output').style.visibility='hidden';
document.getElementById('kgInput').addEventListener('input',
    function (e) {
        let kg = e.target.value;
        // document.getElementById('output').style.visibility='visible';
        document.getElementById('gramsOutput').innerHTML = kg * 1000;
        document.getElementById('lbsOutput').innerHTML = kg * 2.20462;
        document.getElementById('ozOutput').innerHTML = kg * 35.274;
    });