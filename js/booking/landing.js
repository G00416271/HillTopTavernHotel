


document.addEventListener("DOMContentLoaded", () => {
    const bk_res = document.getElementById('reserve');
    const bk_log = document.getElementById('login');

    if (bk_res) {
        bk_res.addEventListener('click', () => {
            window.location.href = '../../html/booking/booking.html';
        });
    } else {
        console.error("Element with ID 'reserve' not found!");
    }

    if (bk_log) {
        bk_log.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    } else {
        console.error("Element with ID 'login' not found!");
    }
});