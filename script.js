
// Mobile nav
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if(menuBtn){ menuBtn.addEventListener('click', ()=> mobileNav.classList.toggle('hidden')); }
document.querySelectorAll('#mobileNav a').forEach(a=> a.addEventListener('click', ()=> mobileNav.classList.add('hidden')));

// Testimonial slider
const track = document.querySelector('.slider-track');
let slideIndex = 0;
function goSlide(i){ if(!track) return; slideIndex = i; track.style.transform = `translateX(-${i*100}%)`; }
setInterval(()=>{ if(!track) return; slideIndex = (slideIndex+1)%document.querySelectorAll('.slider-card').length; goSlide(slideIndex); }, 5000);

// FAQ accordion
document.querySelectorAll('[data-acc]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.nextElementSibling;
    panel.classList.toggle('hidden');
    btn.querySelector('svg').classList.toggle('rotate-180');
  });
});

// Booking form (WhatsApp + mailto fallback)
const form = document.getElementById('bookingForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    const service = form.service.value;
    const notes = form.notes.value.trim();
    const proPhone = form.dataset.whatsapp || "+91XXXXXXXXXX";
    const msg = encodeURIComponent(`Hi! I’d like to book:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nWhen: ${date} at ${time}\nNotes: ${notes}`);
    const wa = `https://wa.me/${proPhone.replace(/[^0-9]/g,'')}/?text=${msg}`;
    window.open(wa, '_blank');
    setTimeout(()=>{
      if(document.hasFocus()){
        const mail = form.dataset.email || "hello@example.com";
        window.location.href = `mailto:${mail}?subject=Booking%20Request&body=${msg}`;
      }
    }, 600);
  });
}

// Instagram auto (optional) - paste User ID + Token in admin.html (local only)
const IG_USER = localStorage.getItem('INSTAGRAM_USER_ID');
const IG_TOKEN = localStorage.getItem('INSTAGRAM_TOKEN');
async function loadInstagram(){
  const grid = document.getElementById('instaGrid');
  const notice = document.getElementById('igNotice');
  try{
    if(!IG_USER || !IG_TOKEN){
      if(notice) notice.classList.remove('hidden');
      return;
    }
    const url = `https://graph.instagram.com/${IG_USER}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${IG_TOKEN}&limit=12`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('Instagram API error');
    const data = await res.json();
    const items = data.data || [];
    grid.innerHTML = '';
    items.forEach(item=>{
      const isVideo = item.media_type === 'VIDEO';
      const src = isVideo ? (item.thumbnail_url || item.media_url) : item.media_url;
      const card = document.createElement('div');
      card.className = 'insta-card card-hover';
      card.innerHTML = `<img loading="lazy" src="${src}" alt=""><a href="${item.permalink}" target="_blank" rel="noopener"></a>`;
      grid.appendChild(card);
    });
  }catch(e){
    console.log('Instagram load failed:', e);
  }
}
loadInstagram();

// Year
document.getElementById('year').textContent = new Date().getFullYear();
