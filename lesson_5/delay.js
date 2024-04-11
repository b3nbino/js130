function delayLog() {
  for (var i = 1; i < 11; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}

// delayLog();

function afterNSeconds(call, secs) {
  setTimeout(call, secs * 1000);
}

function startCounting() {
  let i = 1;
  return setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
}

let id = startCounting();

function stopCounting(id) {
  clearInterval(id);
}
