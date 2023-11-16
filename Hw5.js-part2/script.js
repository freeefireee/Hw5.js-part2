document.getElementById('button').addEventListener('click', function() {
    // Birinchi inputdagi va ikkinchi inputdagi textlarni olib olamiz
    var textOneValue = document.getElementById('one').value;
    var textTwoValue = document.getElementById('two').value;

    // Birinchi inputga ikkinchi inputdagi textni, ikkinchi inputga birinchi inputdagi textni yozamiz
    document.getElementById('one').value = textTwoValue;
    document.getElementById('two').value = textOneValue;
});