const buttonSend = document.querySelector('#send');
const progressLine = document.querySelector('#progress');
const form = document.forms.form;


form.addEventListener('submit', e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(document.forms.form);
    

    xhr.upload.addEventListener('progress', e => {
               progressLine.value = `${e.loaded / e.total}`
    });

    xhr.send(formData);    
}); 