function startidentification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PWCX6TMpP/model.json", modelready);
}
function modelready(){
    Classifier.classify(gotResults);
} 
function gotResults(error, results) { 
    if (error){
        console.error(error);
    }
    else {
        color = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("result").innerHTML = "I CAN HEAR:- " + results[0].label;
        document.getElementById("confidence").innerHTML = "ACCURACY:- " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result").style.color = "#" + color;
        document.getElementById("confidence").style.color = "#" + color;
        gif = document.getElementById("gif");
        if (results[0].label == "Background Noise") {
                gif.src = 'bn.gif';
            }
        if (results[0].label == "Cat") {
                gif.src = 'cat.gif';
            }
        if (results[0].label == "Cow") {
                gif.src = 'cow.gif';
            }
        if (results[0].label == "Dog") {
                gif.src = 'dog.gif';
            }
        if (results[0].label == "Tiger/Lion") {
                gif.src = 'tiger.gif';
            }
    }
}