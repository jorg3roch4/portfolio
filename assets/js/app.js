function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj1 = document.getElementById("number1");
  animateValue(obj1, 0, 20, 5000);

  const obj2 = document.getElementById("number2");
  animateValue(obj2, 0, 100, 5000);

  const obj3 = document.getElementById("number3");
  animateValue(obj3, 0, 30, 5000);