window.addEventListener('load',function(){

    txtnombre.addEventListener('blur',function()
    {
        divnombre.innerHTML=""
        if(!validarNumeros(txtnombre.value))
        {
            divnombre.innerHTML+=" El campo no puede contener números"
        }

    })
    fechaconexion.addEventListener('blur',function(){
        divfecha.innerHTML=""
        if(!validarfecha(fechaconexion))
        {
            divfecha.innerHTML+="No es una fecha valida (formato: dd/mm/aaaa)"
        }
    })
    horaconexion.addEventListener('blur',function(){
        divhora.innerHTML=""
        if(!validarhora(horaconexion))
        {
            divhora.innerHTML+="No es una hora valida (formato: HH:MM)"
        }
    })


    function validarNumeros(parametro)
    {
        let numeros="0123456789"
        for(let i=0; i<parametro.length; i++)
        {
            if (numeros.indexOf(parametro.charAt(i),0)==-1)
            {
                return 1
            }
            else
            {
                return 0
            }
        }
    }
    function validarfecha(parametro)
    {
        let dd1=parametro.value.substr(0,1).split('');
        let dd2=parametro.value.substr(1,1).split('');
        let ddtotal=dd1+dd2;
        let mm1=parametro.value.substr(3,1).split('');
        let mm2=parametro.value.substr(4,1).split('');
        let mmtotal=mm1+mm2;
        let aaaa1=parametro.value.substr(6,1).split('');
        let aaaa2=parametro.value.substr(7,1).split('');
        let aaaa3=parametro.value.substr(8,1).split('');
        let aaaa4=parametro.value.substr(9,1).split('');
        let aaaatotal=aaaa1+aaaa2+aaaa3+aaaa4;
        let barra1=parametro.value.substr(2,1).split('')
        let barra2=parametro.value.substr(5,1).split('')
        if(parametro.value.length!=10)
        {
            return 0
        }
        if((parseInt(ddtotal)>0)&&(parseInt(ddtotal)<32)&&(parseInt(mmtotal)>0)&&(parseInt(mmtotal)<13)&&(parseInt(aaaatotal)>1904)&&(parseInt(aaaatotal)<2021)&&(barra1=="/")&&(barra2=="/"))
        {
            return 1
        }
        else
        {
            return 0
        }
        
        
    }
    function validarhora(parametro)
    {
        let hh1=parametro.value.substr(0,1).split('');
        let hh2=parametro.value.substr(1,1).split('');
        let hhtotal=hh1+hh2;
        let mm1=parametro.value.substr(3,1).split('');
        let mm2=parametro.value.substr(4,1).split('');
        let mmtotal=mm1+mm2;
        let puntos=parametro.value.substr(2,1).split('');
        if(parametro.value.length!=5)
        {
            return 0
        }
        if((parseInt(hhtotal)>-1)&&(parseInt(hhtotal)<24)&&(parseInt(mmtotal)>-1)&&(parseInt(mmtotal)<60)&&(puntos==":"))
        {
            return 1
        }
        else
        {
            return 0
        }

    }
    btnregistro.addEventListener('click',function(){
        if(txtnombre.value=="")
        {
            alert("Llenar campos");
        }
        if(fechaconexion.value=="")
        {
            alert("Llenar campos");
        }
        if(horaconexion.value=="")
        {
            alert("Llenar campos");
        }
        else
        {
            window.location='./sopro.html'
        }
    })




})