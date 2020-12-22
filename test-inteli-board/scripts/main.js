//Burger Menu
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.headerNav');
    const menuCloseItem = document.querySelector('.headerNavClose');
    burgerItem.addEventListener('click', ()=>{
        menu.classList.add('headerNavActive');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('headerNavActive');
    });
}());


// Chart Options
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 12.5, 12.5, 25, 12.5, 12.5],
            backgroundColor: [
                "#FFB800",
                "#64D60B",
                "#FF7ADA",
                "#A8BDFF",
                "#123CE1",
                "#A8BDFF"
            ],
            borderWidth: "0",
           
        }],
    },
    options: {
        cutoutPercentage: "80"

    }
});