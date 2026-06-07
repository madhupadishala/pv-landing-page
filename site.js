const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");
if(toggle&&menu){toggle.addEventListener("click",()=>menu.classList.toggle("open"))}
document.querySelectorAll("form").forEach((form)=>{
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const note=form.querySelector(".mini-copy");
    if(note){note.textContent="Thanks. This prototype form is ready to connect to email, CRM, OTP, WhatsApp or calendar booking."}
  });
});
