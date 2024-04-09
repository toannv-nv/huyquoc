
let flashSaleDate = new Date('2024-04-01T00:00:00').getTime();

let countdown = setInterval(function() {
    let now = new Date().getTime();

    let distance = flashSaleDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = '' + days + ' ngày ' + hours + ' giờ ' + minutes + ' phút ' + seconds + ' giây';

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Flash sale đã bắt đầu!';
    }
}, 1000);
