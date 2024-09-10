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
    labelContent.textContent = 'Cuéntanos tu idea/pensamiento/sentimiento';
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
const getData = (form) =>{
    let content = form.querySelector('#content').value;
    let autor = form.querySelector('#author').value? form.querySelector('#author').value : "Anonimo";
    return {content,autor};
};
const validateData = ({content,autor}) =>{
    let result = {status: true, message:""};
    if(!content || !autor){ 
        result.status = false;
        result.message = "Falta el contenido del contenido";
    }
    if(content.length > 100){
        result.status = false;
        result.message = "El contenido no debe ser menor a 100 caracteres";
    } 
    return result;
}
const  formSubmit = (form) =>{
    if(!form){
        alert("Demasidas acciones");
    }else{
        form.addEventListener('submit',(e)=>{
            e.preventDefault();
            const data = getData(form);
            const validacion = validateData(data); 
            if(validacion.status){
                fetch("https://ideas-toc6.onrender.com/ideas/api",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data) 
                })
                    .then(()=>{
                        alert("Pintao");
                        form.reset();
                        window.location.reload(); 
                    })
                    .catch((err)=>{
                        alert(err.message);
                        console.log(err);
                    })
            }else{
                alert(validacion.message);
            }
        })
    }
}
const generEventForm = (form) => {
    document.addEventListener('click', handleOutsideClick);

    formSubmit(form);
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



//cards
const pastelColors = [
    '#FABC3F', '#E85C0D', '#C7253E', '#821131', '#A7D2E0', '#F9A1A6', '#B6E2B8', '#E4A0A1', '#B4A4E8', '#B9E5D4',
    '#FFD580', '#FF9999', '#FFC0CB', '#FFB6C1', '#FFCCCC', '#FFE4E1', '#FFF0F5', '#FFDDC1', '#FFE1A8', '#FFEDB8',
    '#FFD1BA', '#FFF5E1', '#FBE7C6', '#F7CAC9', '#F5A9A9', '#F5D0A9', '#F9E79F', '#FFF9E3', '#FEF9E7', '#FBF4E6',
    '#FDEDEC', '#F5EEF8', '#F9EBEA', '#FDEBD0', '#FAD7A0', '#F9E79F', '#F8C471', '#F7DC6F', '#FDE3A7', '#FAE5D3',
    '#D5F5E3', '#D6EAF8', '#D5DBDB', '#D7BDE2', '#F5EEF8', '#F2D7D5', '#F7F9F9', '#FDEDEC', '#F9E79F', '#FBEEE6',
    '#D0ECE7', '#D1F2EB', '#D1F7C4', '#D6EAF8', '#D4E6F1', '#D4E6F1', '#EAF2F8', '#EBF5FB', '#F4ECF7', '#F5EEF8',
    '#EAECEE', '#D6DBDF', '#E5E8E8', '#EBEDEF', '#F2F3F4', '#EBF5FB', '#D6DBDF', '#D5F5E3', '#D7BDE2', '#F9EBEA',
    '#FDF2E9', '#F5EEF8', '#F7F9F9', '#FDFEFE', '#FDFEFE', '#FEF5E7', '#FEF9E7', '#FBEEE6', '#F9EBEA', '#FAE5D3',
    '#F5EEF8', '#F5B7B1', '#F4D03F', '#F7DC6F', '#FADBD8', '#FAD7A0', '#FDEBD0', '#FDF2E9', '#FEF9E7', '#FCF3CF',
    '#FDEBD0', '#FDF2E9', '#F9E79F', '#F8C471', '#F9E79F', '#F4D03F', '#F5CBA7', '#F5B041', '#F39C12', '#F39C12'
];

  
const columns = [
    document.getElementById('col1'),
    document.getElementById('col2'),
    document.getElementById('col3'),
    document.getElementById('col4')
];
  

const getRandomColor = () => pastelColors[Math.floor(Math.random() * pastelColors.length)];

const getRandomColumn = () => columns[Math.floor(Math.random() * columns.length)];
  

const addCardToRandomColumn = (idea) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id',idea._id);
    card.style.backgroundColor = getRandomColor();
    
    const cardContent = document.createElement('h2');
    cardContent.classList.add('card-content');
    cardContent.textContent = `"${idea.content}"`;
  
    const cardAutor = document.createElement('p');
    cardAutor.classList.add('card-autor');
    cardAutor.textContent = `-${idea.autor}`;
  
    card.appendChild(cardContent);
    card.appendChild(document.createElement('hr')); 
    card.appendChild(cardAutor);
    
    const randomColumn = getRandomColumn();
    randomColumn.appendChild(card);
};

async function fetchData() {
    try {
        const res = await fetch("https://ideas-toc6.onrender.com/ideas/api", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const ideas = await res.json(); 
        ideas.forEach(addCardToRandomColumn);
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}

fetchData(); 
  

