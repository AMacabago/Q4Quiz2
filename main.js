function enter() {
    var science = Number(document.getElementById('science').value);
    var math = Number(document.getElementById('math').value);
    var english = Number(document.getElementById('english').value);

    if (science < 0 || science > 100 || math < 0 || math > 100 || english < 0 || english > 100) {
        window.alert('Please enter grades between 0 and 100.');
        return;
    }

    var average = (science + math + english) / 3;

    var rating;

    if (average < 75) {
        rating = "Needs Improvement";
    }
    else if (average < 80) {
        rating = "Standard";
    }
    else if (average < 90) {
        rating = "Above Standard";
    }
    else {
        rating = "Excellent";
    }

    window.alert('Average: ' + average.toFixed(2) + ' Rating: ' + rating);
}
