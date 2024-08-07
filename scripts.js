window.onload = function() {
  setTimeout(function() {
    var img = document.getElementById('central-image');
    img.style.display = 'block';
    img.style.opacity = 0;
    setTimeout(function() {
      img.style.opacity = 1;
    }, 10);
  }, 5000); 

  document.getElementById('central-image').addEventListener('click', function() {
    // Crear un contenedor para el video
    var videoContainer = document.createElement('div');
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100%';
    videoContainer.style.height = '100%';
    videoContainer.style.backgroundColor = 'black';
    videoContainer.style.zIndex = '1000';
    videoContainer.style.display = 'flex';
    videoContainer.style.justifyContent = 'center';
    videoContainer.style.alignItems = 'center';
    
    // Crear el elemento video
    var video = document.createElement('video');
    if (window.innerWidth < 768) {
      video.src = 'FelizCumpleañoMaria(1).mp4'; // Cambia esto con la URL de tu video // GIF para móvil
    } else {
      video.src = 'you!.mp4'; // Cambia esto con la URL de tu video // GIF para PC
    }
    
    video.autoplay = true;
    video.controls = true;
    video.loop= true;
    video.style.width = '80%';
    video.style.height = '80%';
    videoContainer.appendChild(video);
    
    // Crear el elemento audio
    var audio = document.createElement('audio');
    audio.src = 'Birthday Furry Maria.mp3'; // Cambia esto con la URL de tu música
    audio.autoplay = true;
    audio.loop = true; // Para que la música se repita en bucle si es necesario
    document.body.appendChild(audio);

    // Añadir el contenedor del video al body
    document.body.appendChild(videoContainer);

    // Redirigir al video de YouTube después de 1 minuto
    setTimeout(function() {
      window.location.href = 'https://www.youtube.com/watch?v=UmrPJHKP9hY'; 
    }, 60000); // 60000 milisegundos = 1 minuto
  });
};

