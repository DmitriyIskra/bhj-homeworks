const buttonSend = document.querySelector('#send');
const progressLine = document.querySelector('#progress');
const form = document.forms.form;


form.addEventListener('submit', e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms.form);
    

    xhr.upload.addEventListener('progress', e => {
               console.log(e)

        switch (xhr.readyState) {
            case 2: progressLine.value = '0.25'
                    progressLine.value = '0.50'
            break;
            case 3: progressLine.value = '0.75'
                    progressLine.value = '0.95'
            break;
            case 4: progressLine.value = '1'
            break;
        };
    });

    xhr.send(formData);    
});