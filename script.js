function darkMode() {
    const moon = document.getElementById('celestialBody');
    const body_background = document.getElementById('container');
    const centro = document.getElementById('centro');

    if (moon.classList.contains('sun')) {
        moon.style.animation = 'DarkNight 1s linear';
        centro.style.animation = 'DarkNightCenter 0.5s linear';
       body_background.style.backgroundImage = 'radial-gradient(circle at center, #2B124C 60%, #010119)';
        moon.classList.remove('sun');
        centro.classList.remove('small');
        centro.classList.add('center');
        hideClouds();
    } else {
        moon.style.animation = 'SunnyDay 0.5s linear';
        centro.style.animation = 'SunnyDayCenter 0.5s linear';
        body_background.style.backgroundImage = 'radial-gradient(circle at center, #f7f5bc 20%, #48CAE4)';
        moon.classList.add('sun');
        centro.classList.remove('center');
        centro.classList.add('small');
        showClouds();
    }
}

function showClouds() {
    const clouds = document.querySelectorAll('.clouds');
    clouds.forEach(cloud => {
        cloud.style.display = 'block';
    });
}

function hideClouds() {
    const clouds = document.querySelectorAll('.clouds');
    clouds.forEach(function(cloud) {
      cloud.style.display = 'none';
    });
  }