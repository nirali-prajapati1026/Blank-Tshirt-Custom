const canvas=document.getElementById("design-canvas");
const ctx=canvas.getContext("2d");
const tshirtimage=document.getElementById("tshirt-image");
const desinguplod=document.getElementById("design-uplod");
const downlodebtn=document.getElementById("downlode-btn");
canvas.width=300;
canvas.hight=300;
desinguplod.addEventListener("change",(e)=>{
    const file=e.target.files[0];
    if(file){
        const img=new Image();
        img.src=URL.createObjectURL(file);
        img.onload=()=>{
            ctx.clearRect(0,0,canvas.width,canvas.hight);
            ctx.drawImage(img,50,50,200,200);
        };
    }
});
downlodebtn.addEventListener("click",()=>{
    const link=document.createElement("a");
    link.download="image/IMG_20241126_142636.jpg";
    link.href=canvas.toDataURL();
    link.click();
})