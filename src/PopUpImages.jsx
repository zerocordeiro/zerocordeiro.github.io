import { createElement } from "react";
import { copySingleArray } from "./copySingleArray";
import arrowleft from "./assets/arrows_arrow_left.svg"
import arrowright from "./assets/arrows_arrow_right.svg"
import xicon from "./assets/X_X.svg"

function PopUpImages({array}){
    let imgurls=copySingleArray(array);
    let indeximg=0;

    function moveIMG(quantity=0){
        indeximg += quantity;
        if(indeximg==imgurls.length){
            indeximg=0;
        }else if(indeximg<0){
            indeximg=imgurls.length-1 ;
        }
        let novaimagem = document.getElementById('imgdisplay'+imgurls[0]);
        novaimagem.src=imgurls[indeximg];
        let contador=document.getElementById(imgurls[1]);
        let counter = 'Showing '+ (indeximg+1) + ' / ' + imgurls.length; 
        contador.innerHTML = counter;
        console.log('posição do array: '+indeximg+', tamanho do array original: '+array.length+'. Conteúdo da posição do array original: '+ array[indeximg]+'.  Cnteúdo da posição do array copiado: '+imgurls[indeximg]);
    }
    function presentationOpenClose(){
        // indeximg=0;
        // novaimagem.src='';
        let presentation=document.getElementById(imgurls[0]);
        if(presentation.className=='popupdiv'){
            presentation.className='hiddendiv';
        } else if(presentation.className=='hiddendiv'){
            presentation.className='popupdiv';
        }
    }

    return(
        <>
            <div className="hiddendiv" id={imgurls[0]} itemID={imgurls[0]}>
                <div className="popupinside" style={{display:'flex',}}>
                    <div style={
                    {
                        aspectRatio:1,height:'7%',
                        borderRadius:'50%',
                        position:'absolute',
                        top:'1%', right:'1%',
                        backgroundColor:'#12121266',
                        backgroundImage:`url(${xicon})`,backgroundRepeat:'no-repeat',backgroundSize:'50%',backgroundPosition:'center'    
                    }
                    }
                    onClick={()=>presentationOpenClose()}>
                        
                    </div>

                    <div style={{borderRadius:10000, height:'30%',width:'10%',position:'absolute', left:-10, top:'35%',backgroundColor:'#12121266',backgroundImage:`url(${arrowleft})`,backgroundRepeat:'no-repeat',backgroundSize:'70%',backgroundPosition:'center'}} onClick={()=>moveIMG(-1)}></div>

                    
                    <img id={'imgdisplay'+imgurls[0]} src={imgurls[indeximg]} style={{maxHeight:'95%', maxWidth:'95%', display:'block', margin:'auto auto auto auto'}}></img>
                    

                    <div style={{borderRadius:10000, height:'30%',width:'10%',position:'absolute', right:-10, top:'35%',backgroundColor:'#12121266',backgroundImage:`url(${arrowright})`,backgroundRepeat:'no-repeat',backgroundSize:'70%',backgroundPosition:'center'}} onClick={()=>moveIMG(+1)}></div>
                </div>
                <p id={imgurls[1]} style={{position:'absolute',bottom:0,right:20, fontSize:'1em',fontWeight:'bold',padding:'0 5px 0 5px',backgroundColor:'#deeeeeee',borderRadius:1000}}>
                    Showing {indeximg+1} / {imgurls.length}
                </p>
            </div>
            <button className='slideshowbutton' style={{width:150,height:40, marginBottom:20, borderRadius:10000}} onClick={()=>presentationOpenClose()}>See images</button>
        </>
    );
}

export {PopUpImages};