  const startTestButton = document.querySelector('.full');

  const testContainer = document.getElementById('test-container');
  const testContent = document.getElementById('test-content');
  const closeTestButton = document.getElementById('close-test');
  const testCanvas = document.getElementById('test-canvas');
  const ctx = testCanvas.getContext('2d');

  const images = [
    '/static/img/1.jpg', // Замените на пути к вашим изображениям
    '/static/img/2.jpg',
    '/static/img/3.jpg',
      '/static/img/4.jpg',
    '/static/img/5.jpg',
      '/static/img/6.jpg',
    '/static/img/7.jpg',
      '/static/img/8.jpg',
    '/static/img/9.jpg',
      '/static/img/10.jpg',
       '/static/img/26.jpg',
 '/static/img/27.jpg',
       '/static/img/25.jpg',
       '/static/img/28.jpg',
       '/static/img/29.jpg',
      '/static/img/25.jpg',
      '/static/img/33.jpg',
      '/static/img/48.jpg',
      '/static/img/44.jpg',
      '/static/img/34.jpg',
      '/static/img/35.jpg',
      '/static/img/49.jpg',
      '/static/img/46.jpg',
      '/static/img/36.jpg',
      '/static/img/37.jpg',
      '/static/img/47.jpg',
      '/static/img/38.jpg',

      '/static/img/39.jpg',
      '/static/img/40.jpg',
      '/static/img/41.jpg',
      '/static/img/42.jpg',
      '/static/img/43.jpg',







      '/static/img/50.jpg',
      '/static/img/45.jpg',
      '/static/img/30.jpg',
       '/static/img/11.jpg',
    '/static/img/12.jpg',
    '/static/img/13.jpg',
    '/static/img/14.jpg',
    '/static/img/15.jpg',
    '/static/img/16.jpg',
    '/static/img/17.jpg',
    '/static/img/19.jpg',

  ];

  let currentImageIndex = 0;
window.addEventListener('resize', () => {
    testCanvas_2.width = window.innerWidth;
    testCanvas_2.height = window.innerHeight;
    changeUniformityImage();
});
  function loadImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
  }

  function showImage(image) {
    ctx.drawImage(image, 0, 0, testCanvas.width, testCanvas.height);
  }

  function changeImage() {
    const image = loadImage(images[currentImageIndex]);
    image.onload = () => showImage(image);
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  startTestButton.addEventListener('click', () => {
    testContainer.style.display = 'block';
    changeImage();
    setInterval(changeImage, 250); // Меняем изображение каждые 1000 миллисекунд (1 секунда)
  });

  closeTestButton.addEventListener('click', () => {
    testContainer.style.display = 'none';
    clearInterval(changeImage); // Останавливаем интервал при выходе из теста
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      testContainer.style.display = 'none';
      clearInterval(changeImage);
    }
  });


// ... (ваш код с изображениями)

startTestButton.addEventListener('click', () => {
  // Запускаем полноэкранный режим
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }

  testContainer.style.display = 'block';
  changeImage();
  setInterval(changeImage, 100);
});

closeTestButton.addEventListener('click', () => {
  // Выходим из полноэкранного режима
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }

  testContainer.style.display = 'none';
  clearInterval(changeImage);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    // Выходим из полноэкранного режима
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    testContainer.style.display = 'none';
    clearInterval(changeImage);
  }
});


const oneColorButton = document.querySelector('.full_1');
const testContainer_1 = document.getElementById('test-container_1');
const closeTestButton_1 = document.getElementById('close-test_1');
const testCanvas_1 = document.getElementById('test-canvas_1');
const ctx_1 = testCanvas_1.getContext('2d');

const colors = ['white', 'Gainsboro','Silver', 'gray','SlateGrey','DarkSlateGrey', 'black','Maroon','Red', 'Purple','SlateBlue','MediumPurple', 'blue','PeachPuff','Lime', 'green','Yellow','Gold'];
let currentColorIndex = 0;

function fillCanvas(color) {
  ctx_1.fillStyle = color;
  ctx_1.fillRect(0, 0, testCanvas_1.width, testCanvas_1.height);
}

oneColorButton.addEventListener('click', () => {
  if (testContainer_1.requestFullscreen) {
    testContainer_1.requestFullscreen();
  }
  fillCanvas(colors[currentColorIndex]);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    currentColorIndex = (currentColorIndex - 1 + colors.length) % colors.length;
    fillCanvas(colors[currentColorIndex]);
  } else if (event.key === 'ArrowRight') {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    fillCanvas(colors[currentColorIndex]);
  }
});

// Обработчик события для закрытия теста
closeTestButton_1.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  testContainer_1.style.display = 'none'; // Скрыть контейнер после выхода из полноэкранного режима
});

// Обработка события выхода из полноэкранного режима
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    testContainer_1.style.display = 'none'; // Скрыть контейнер после выхода из полноэкранного режима
  } else {
    testContainer_1.style.display = 'block'; // Показать контейнер в полноэкранном режиме
  }
});

    const uniformityTestButton = document.querySelector('.full_2');
    const testContainer_2 = document.getElementById('test-container_2');
    const closeTestButton_2 = document.getElementById('close-test_2');
    const testCanvas_2 = document.getElementById('test-canvas_2');
    const ctx_2 = testCanvas_2.getContext('2d');

    const uniformityImages = [
    '/static/img/11.jpg',
    '/static/img/12.jpg',
    '/static/img/13.jpg',
    '/static/img/14.jpg',
    '/static/img/15.jpg',
    '/static/img/16.jpg',
    '/static/img/17.jpg',
    '/static/img/19.jpg',
    '/static/img/10.jpg',
    '/static/img/9.jpg',
    '/static/img/8.jpg',
    '/static/img/21.jpg',

    '/static/img/22.jpg',
    '/static/img/23.jpg',
    '/static/img/24.jpg',

];
window.addEventListener('resize', () => {
    testCanvas.width = window.innerWidth;
    testCanvas.height = window.innerHeight;
    changeUniformityImage();
});

let currentUniformityImageIndex = 0;

function load_Image(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
}

function show_Image(image) {
    ctx_2.clearRect(0, 0, testCanvas_2.width, testCanvas_2.height);
    ctx_2.drawImage(image, 0, 0, testCanvas_2.width, testCanvas_2.height);
}

function changeUniformityImage() {
    const image = load_Image(uniformityImages[currentUniformityImageIndex]);
    image.onload = () => {
        console.log(`Loaded image index: ${currentUniformityImageIndex}`);
        show_Image(image);
    };

    currentUniformityImageIndex = (currentUniformityImageIndex + 1) % uniformityImages.length;
}

uniformityTestButton.addEventListener('click', () => {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
    testContainer_2.style.display = 'block';
    changeUniformityImage();
});

closeTestButton_2.addEventListener('click', () => {
    if (document.fullscreenElement) {
    document.exitFullscreen();
    }
    testContainer_2.style.display = 'none';
    currentUniformityImageIndex = 0; // Сброс индекса
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        testContainer_2.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentUniformityImageIndex = (currentUniformityImageIndex - 1 + uniformityImages.length) % uniformityImages.length;
        changeUniformityImage();
    } else if (event.key === 'ArrowRight') {
        currentUniformityImageIndex = (currentUniformityImageIndex + 1) % uniformityImages.length;
        changeUniformityImage();
    }
});


    const reactionTestButton = document.querySelector('.full_3');
    const reactionTestContainer = document.getElementById('test-container_3');
    const reactionTestCanvas = document.getElementById('test-canvas_3');
    const closeReactionTestButton = document.getElementById('close-test_3');
    const ctx_3 = reactionTestCanvas.getContext('2d');

    let isGreenOn = false;
    let startTime = null;
    let endTime = null;

    function showRed() {
        ctx_3.fillStyle = 'red';
        ctx_3.fillRect(0, 0, reactionTestCanvas.width, reactionTestCanvas.height);
    }

    function showGreen() {
        ctx_3.fillStyle = 'green';
        ctx_3.fillRect(0, 0, reactionTestCanvas.width, reactionTestCanvas.height);
        isGreenOn = true;
        startTime = new Date().getTime();
    }

    function handleKeyPress(event) {
        if (event.key === 'Escape') {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            reactionTestContainer.style.display = 'none';
        }
        if (!isGreenOn) {
            return;
        }
        isGreenOn = false;
        endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        alert(`Время реакции: ${reactionTime} мс`);
    }

    reactionTestButton.addEventListener('click', () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
        reactionTestContainer.style.display = 'block';
        showRed();
        setTimeout(() => {
            showGreen();
        }, 1000);
        setTimeout(() => {
            showRed();
            isGreenOn = false;
        }, 11000);
    });

    closeReactionTestButton.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        reactionTestContainer.style.display = 'none';
    });

    document.addEventListener('keydown', handleKeyPress);

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            reactionTestContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target === reactionTestCanvas) {
            if (isGreenOn) {
                isGreenOn = false;
                endTime = new Date().getTime();
                const reactionTime = endTime - startTime;
                alert(`Время реакции: ${reactionTime} мс`);
            } else {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                reactionTestContainer.style.display = 'none';
            }
        }
    });