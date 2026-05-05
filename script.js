function handleRegister(event) {
    event.preventDefault();
    var u = document.getElementById('username').value.trim();
    var m1 = document.getElementById('favMovie1').value.trim();
    var m2 = document.getElementById('favMovie2').value.trim();
    var g = document.getElementById('favGenre').value;
    var v = document.getElementById('vk').value.trim();
    var i = document.getElementById('inst').value.trim();
    var l = document.getElementById('letterboxd').value.trim();
    if (!u) { alert('Введи имя'); return false; }
    var gn = { drama:'Драма', comedy:'Комедия', horror:'Хоррор', action:'Боевик', scifi:'Фантастика' };
    var gt = gn[g] || 'не выбран';
    var h = '<div class="profile-card"><h3>'+u+'</h3><div class="movies-list"><p><b>Любимые фильмы:</b></p>';
    if(m1) h += '<span>'+m1+'</span>';
    if(m2) h += '<span>'+m2+'</span>';
    if(!m1&&!m2) h += '<span>Пока не указаны</span>';
    h += '<p style="margin-top:10px;"><b>Жанр:</b> '+gt+'</p></div><div class="social-links">';
    if(v) h += '<a href="'+v+'" target="_blank">VK</a>';
    if(i) h += '<a href="https://instagram.com/'+i.replace('@','')+'" target="_blank">Instagram</a>';
    if(l) h += '<a href="'+l+'" target="_blank">Letterboxd</a>';
    if(!v&&!i&&!l) h += '<span style="color:#999;">Соцсети не указаны</span>';
    h += '</div></div>';
    document.getElementById('profileBlock').innerHTML = h;
    document.getElementById('profileBlock').scrollIntoView({ behavior:'smooth' });
    return false;
}

function calculateTime() {
    var f = parseFloat(document.getElementById('filmsPerWeek').value);
    var d = parseFloat(document.getElementById('avgDuration').value);
    var r = document.getElementById('calcResult');
    var m = document.getElementById('calcMessage');
    r.innerHTML = ''; m.innerHTML = ''; m.style.backgroundColor = 'transparent';
    if(isNaN(f)||f<=0) { r.innerHTML = 'Введи количество фильмов'; return; }
    if(isNaN(d)||d<=0) { r.innerHTML = 'Введи длительность'; return; }
    var hw = (f*d)/60, hm = hw*4, hy = hw*52, dy = hy/24;
    r.innerHTML = 'В неделю: '+hw.toFixed(1)+' ч.<br>В месяц: '+hm.toFixed(1)+' ч.<br>В год: '+hy.toFixed(0)+' ч. (это '+dy.toFixed(1)+' дней!)';
    var msg='', bg='';
    if(hw<5){msg='Смотришь немного';bg='#c8e6c9';}
    else if(hw<15){msg='Нормально';bg='#fff9c4';}
    else if(hw<30){msg='Серьёзно увлекаешься';bg='#ffcc80';}
    else{msg='Ты спишь иногда?';bg='#ef9a9a';}
    m.innerHTML = msg; m.style.backgroundColor = bg;
}