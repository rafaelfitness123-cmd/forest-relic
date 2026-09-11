(async()=>{
  const errorBox=document.getElementById("runtimeError");
  try{
    const b64=window.__FOREST_RELIC_B64||"";
    if(!b64) throw new Error("Fonte do jogo não encontrada.");
    const raw=atob(b64);
    const bytes=new Uint8Array(raw.length);
    for(let i=0;i<raw.length;i++) bytes[i]=raw.charCodeAt(i);
    if(typeof DecompressionStream!=="function") throw new Error("Este navegador não suporta DecompressionStream (gzip).");
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    const source=await new Response(stream).text();
    const url=URL.createObjectURL(new Blob([source],{type:"text/javascript"}));
    try{ await import(url); } finally { setTimeout(()=>URL.revokeObjectURL(url),1000); }
  }catch(err){
    console.error(err);
    if(errorBox){
      errorBox.style.display="block";
      errorBox.textContent="ERRO AO CARREGAR O JOGO:\n"+String(err?.stack||err?.message||err);
    }
  }
})();
