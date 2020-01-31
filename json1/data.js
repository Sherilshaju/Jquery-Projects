var xhr = new XMLHttpRequest(); //1
xhr.onload = function() {

    responseObject = JSON.parse(xhr.responseText); //4
    var newContent = ''; //5
    for (var i = 0; i < responseObject.events.length; i++) {
        newContent += '<div class="event">';
        newContent += '<img src="' + responseObject.events[i].map + '"';
        newContent += 'alt="' + responseObject.events[i].Location + '"/>';
        newContent += '<p><b>' + responseObject.events[i].Location + '</b><br>';
        newContent += responseObject.events[i].date + '</p>';
        newContent += '</div>';

    }
    document.getElementById('content').innerHTML = newContent; //7                   

};
xhr.open('GET', 'data.json', true);
xhr.send(null);