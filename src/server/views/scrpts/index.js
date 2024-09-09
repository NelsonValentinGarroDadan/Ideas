const body = document.getElementsByTagName('body')[0];
const btnAgregar = document.getElementById('btn-agr');


const handleOutsideClick = (e) => {
    const form = document.querySelector('.form-idea');
    if (form && !form.contains(e.target) && e.target !== btnAgregar) {
        form.classList.remove('show');
        setTimeout(() => body.removeChild(form), 300);
    }
};

const generModalForm = () => {
    const form = document.createElement('form');
    form.classList.add('form-idea');

    const labelContent = document.createElement('label');
    labelContent.setAttribute('for', 'content');
    labelContent.textContent = 'Cuéntanos tu idea/pensamiento/sentimiento, lo que quieras';
    const inputContent = document.createElement('textarea'); 
    inputContent.id = 'content';
    inputContent.name = 'content';
    inputContent.placeholder = 'Escribe aqui';
    inputContent.required = true;

    const labelAutor = document.createElement('label');
    labelAutor.setAttribute('for', 'author');
    labelAutor.textContent = 'Tu nombre';
    const inputAutor = document.createElement('input'); 
    inputAutor.type = 'text';
    inputAutor.id = 'author';
    inputAutor.name = 'author';
    inputAutor.placeholder = 'Si no quieres dejar tu nombre quedará como anónimo';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Pintar';


    form.appendChild(labelContent);
    form.appendChild(inputContent);
    form.appendChild(labelAutor);
    form.appendChild(inputAutor);
    form.appendChild(submitButton);

    generEventForm(form);

    return form;
};

const generEventForm = (form) => {
    document.addEventListener('click', handleOutsideClick);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Enviando form');
    });
    
    const closeButton = form.querySelector('.close-button');
    closeButton?.addEventListener('click', () => {
        body.removeChild(form);
        document.removeEventListener('click', handleOutsideClick);
    });
};

btnAgregar?.addEventListener('click', () => {
    if (!document.querySelector('.form-idea')) {
        const modalForm = generModalForm();
        body.appendChild(modalForm);
        setTimeout(() => modalForm.classList.add('show'), 10); 
    }
});
