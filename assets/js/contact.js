
const form=document.querySelector('[data-whatsapp-form]');
if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const phone=form.dataset.phone;const text=[
'Hola, deseo coordinar una cita en AVA Clinic.',
'',
`Nombre: ${data.get('nombre')}`,
`Unidad o motivo general: ${data.get('servicio')}`,
`Sede preferida: ${data.get('sede')}`,
`Horario preferido: ${data.get('horario')}`,
data.get('comentario')?`Comentario administrativo: ${data.get('comentario')}`:'',
'',
'Comprendo que este canal no es para emergencias ni para enviar información clínica sensible.'
].filter(Boolean).join('\n');
const url=`https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
const status=form.querySelector('[data-form-status]');if(status)status.textContent='Abriendo WhatsApp…';window.open(url,'_blank','noopener');});}
