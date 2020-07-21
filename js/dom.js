window.addEventListener('load',function(){
    var hoy = new Date();
    var horaconex=hoy.getHours();
    var minutoconex=hoy.getMinutes();
    var segundoconex=hoy.getSeconds();
    var conexion= horaconex+":"+minutoconex+":"+segundoconex
    localStorage.setItem('horaconexion', conexion);
    divconexion.innerHTML="Hora de conexion: "+localStorage.getItem('horaconexion')
    
    let s=0
    let m=0;
    let h=0;
    setInterval(function(){
        
        if (s<59)
        {
            s=s+1;
        }
        else
        {
            s=0;
            if(m<59)
            {
                m=m+1;
            }
            else
            {
                m=0;
                h=h+1;
                
            }
            
        }
        
        
        divtiempo.innerHTML="Tiempo transcurrido: "+h+`:`+m+`:`+s;
    },1000)

    let contenidoHTML= `
        <table border=1>`
    let l=1
    for (i=1;i<=3;i++)
    {
        contenidoHTML+="<tr>"
        for(j=1;j<=2;j++)
        {
            if((j==1)&&(i==1)){
                contenidoHTML+="<td>"
                contenidoHTML+= `<a id="Mover1" class="btnnumero1" value="1" >1</a>`
                contenidoHTML+="</td>"
            }
            if((j==1)&&(i==2)){
                contenidoHTML+="<td>"
                contenidoHTML+= `<a class="btnnumero2" value="2" >2</a>`
                contenidoHTML+="</td>"
            }
            if((j==1)&&(i==3)){
                contenidoHTML+="<td>"
                contenidoHTML+= `<a class="btnnumero3" value="3" >3</a>`
                contenidoHTML+="</td>"
            }
            
                contenidoHTML+="<td>"
                contenidoHTML+= `<a class="btnnumero" value="0" >0</a>`
                contenidoHTML+="</td>"
            
            
                
        }
        if(i==1)
            {
                contenidoHTML+=`<td>
                    <button class="mover1" id="mover1" value="+">Mover</button>
                </td>` 
            }
            if(i==2)
            {
                contenidoHTML+=`<td>
                    <button class="mover2" id="mover2" value="-">Mover</button>
                </td>` 
            }
            if(i==3)
            {
                contenidoHTML+=`<td>
                    <button class="mover3" id="mover3" value="*">Mover</button>
                </td>` 
            }
    }
    contenidoHTML+=`<tr>
                    </table>`
    divtabla.innerHTML=contenidoHTML;
    document.querySelectorAll(".btnnumero").forEach(x => { 

        x.addEventListener('click',function(){
           alert(x.value); 
        })

     })

     mover1.addEventListener('click',function(){
        let d=mover1.value;
        mover1.value=x.value;
        

     })

    

})