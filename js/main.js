export function addContentCSV(path) {
    const response = fetch(path)
    .then(response => response.text())
    .catch(err => console.log(err))

    response.then(v => uploadText(v));
}

/* export function addContentCSV(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}
} */

function uploadText(text) {
    const p=document.createElement('pre');
    p.textContent = text;
    document.body.appendChild(p);
}
