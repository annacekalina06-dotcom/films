function handleRegister(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value.trim();
    var favMovie1 = document.getElementById('favMovie1').value.trim();
    var favMovie2 = document.getElementById('favMovie2').value.trim();
    var favGenre = document.getElementById('favGenre').value;
    var vk = document.getElementById('vk').value.trim();
    var inst = document.getElementById('inst').value.trim();
    var letterboxd = document.getElementById('letterboxd').value.trim();
    
    if (!username) {
        alert('Введи имя');
        return false;
    }
    
    var genreNames = {
        'drama': 'Драма',
        'comedy': 'Комедия',
        'horror': 'Хоррор',
        'action': 'Боевик',
        'scifi': 'Фантастика'
    };
    
    var genreText = genreNames[favGenre] || 'не выбран';
    
    var profileHTML = '<div class="profile-card">';
    profileHTML += '<h3>' + username + '</h3>';
    profileHTML += '<div class="movies-list"><p><b>Любимые фильмы:</b></p>';
    
    if (favMovie1) profileHTML += '<span>' + favMovie1 + '</span>';
    if (favMovie2) profileHTML += '<span>' + favMovie2 + '</span>';
    if (!favMovie1 && !favMovie2) profileHTML += '<span>Пока не указаны</span>';
    
    profileHTML += '<p style="margin-top: 10px;"><b>Жанр:</b> ' + genreText + '</p>';
    profileHTML += '</div>';
    profileHTML += '<div class="social-links">';
    
    if (vk) profileHTML += '<a href="' + vk + '" target="_blank">VK</a>';
    if (inst) profileHTML += '<a href="https://instagram.com/' + inst.replace('@', '') + '" target="_blank">Instagram</a>';
    if (letterboxd) profileHTML += '<a href="' + letterboxd + '" target="_blank">Letterboxd</a>';
    if (!vk && !inst && !letterboxd) profileHTML += '<span style="color: #999;">Соцсети не указаны</span>';
    
    profileHTML += '</div>';
    profileHTML += '</div>';
    
    document.getElementById('profileBlock').innerHTML = profileHTML;
    document.getElementById('profileBlock').scrollIntoView({ behavior: 'smooth' });
    
    return false;
}

function calculateTime() {
    var filmsInput = document.getElementById('filmsPerWeek');
    var durationInput = document.getElementById('avgDuration');
    var resultDiv = document.getElementById('calcResult');
    var messageDiv = document.getElementById('calcMessage');
    
    var filmsPerWeek = parseFloat(filmsInput.value);
    var avgDuration = parseFloat(durationInput.value);
    
    resultDiv.innerHTML = '';
    messageDiv.innerHTML = '';
    messageDiv.style.backgroundColor = 'transparent';
    
    if (isNaN(filmsPerWeek) || filmsPerWeek <= 0) {
        resultDiv.innerHTML = 'Введи количество фильмов';
        return;
    }
    
    if (isNaN(avgDuration) || avgDuration <= 0) {
        resultDiv.innerHTML = 'Введи длительность';
        return;
    }
    
    var hoursPerWeek = (filmsPerWeek * avgDuration) / 60;
    var hoursPerMonth = hoursPerWeek * 4;
    var hoursPerYear = hoursPerWeek * 52;
    var daysPerYear = hoursPerYear / 24;
    
    resultDiv.innerHTML = 'В неделю: ' + hoursPerWeek.toFixed(1) + ' ч.<br>В месяц: ' + hoursPerMonth.toFixed(1) + ' ч.<br>В год: ' + hoursPerYear.toFixed(0) + ' ч. (это ' + daysPerYear.toFixed(1) + ' дней!)';
    
    var message = '';
    var bgColor = '';
    
    if (hoursPerWeek < 5) {
        message = 'Смотришь немного, есть время на жизнь';
        bgColor = '#c8e6c9';
    } else if (hoursPerWeek < 15) {
        message = 'Нормально, киноман понемногу';
        bgColor = '#fff9c4';
    } else if (hoursPerWeek < 30) {
        message = 'Серьёзно увлекаешься кино';
        bgColor = '#ffcc80';
    } else {
        message = 'Ты точно спишь иногда?';
        bgColor = '#ef9a9a';
    }
    
    messageDiv.innerHTML = message;
    messageDiv.style.backgroundColor = bgColor;
}