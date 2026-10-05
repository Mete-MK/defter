const V='defter-v7'; // bei Updates der App hochzählen (v2, v3 ...)
const LIBS=[
 "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
 "https://cdn.jsdelivr.net/npm/docx-preview@0.3.3/dist/docx-preview.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
];
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{
  const c=await caches.open(V);
  await c.addAll(SHELL);
  for(const u of LIBS){const r=await fetch(u,{mode:'cors',cache:'reload'});if(!r.ok)throw new Error('Laden fehlgeschlagen: '+u);await c.put(u,r)}
  await self.skipWaiting();
})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==V)await caches.delete(k);
  await self.clients.claim();
})())});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  e.respondWith((async()=>{
    const m=await caches.match(r,{ignoreVary:true,ignoreSearch:r.mode==='navigate'});
    if(m)return m;
    try{return await fetch(r)}catch(x){
      if(r.mode==='navigate'){const i=await caches.match('index.html');if(i)return i}
      return Response.error();
    }
  })());
});
