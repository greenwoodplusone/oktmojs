export class CSVLoader {

    // Загрузка текста в тело сайта
    static uploadText(text) {
        const p=document.createElement('pre');
        p.textContent = text;
        document.body.appendChild(p);
    }


    // fetch
    static loadFetch(path) {
        alert("Запущен скрипт loadFetch")

        const response = fetch(path)
        .then(response => response.text())
        .catch(console.error)
        //.catch(err => console.log(err))

        response.then(v => CSVLoader.uploadText(v));
    }

    

    // async 
    static loadAsync = async (path) => {
        alert("Запущен скрипт loadAsync")

        try {
            const res = await fetch(path);
            
            const data = await res.text();

            CSVLoader.uploadText(data)

        } catch (err) {
            console.log(err)
        }
    } 



    // Чистый промис
    static loadPromise(path) {
        return new Promise(function(resolve, reject) {
            let p = document.createElement('pre');

            let reader = new FileReader();
            reader.readAsText(path);

            p.path = path;


            p.onload = () => resolve(reader.result);
            p.onerror = () => reject(new Error(`Ошибка загрузки файла ${path}`));

            document.body.appendChild(path);
        });
    }

}
