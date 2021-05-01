import React, { useState } from "react";
import CardFlip from "./CardFlip";
import CardInput from "./CardInput";
import { Button } from '@material-ui/core'


export default function CardList() {
  const [kelimeler, setKelimeler] = useState([
    
    {id:1, eng:"bring", tr:"getirmek", example:"do not forget to bring my books"},
    {id:2, eng:"council", tr:"kurul,meclis", example:"the council meets twice a week"},
    {id:3, eng:"income", tr:"gelir", example:"my income is enough"},
  ]);
  const [isTest, setIsTest] = useState(false);
  const kelimeKarti = ()=>{
    setIsTest(true)
  }
  const kelimeEkle = ()=>{
    setIsTest(false)
  }
  const [sira, setSira] = useState(1);
  const artir = () => {
    setSira((prevState) => prevState + 1);
    console.log(sira);
  };
  const azalt = () => {
    setSira((prevState) => prevState - 1);
    console.log(sira);
  };
  return (
    <div>     
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:30}} >
      <Button onClick={kelimeKarti} variant="contained" color="secondary" style={{marginTop:15}} >
                Kelime Kartları
            </Button>
            <Button onClick={kelimeEkle} variant="contained" color="secondary" style={{marginTop:15}} >
                Kelime Ekle
            </Button>
      </div>
      {isTest ? kelimeler.map((kelime) => {
        if (kelime.id === sira) {
          return <CardFlip key={kelime.id} kelime={kelime} kelimeler={kelimeler} artir={artir} azalt={azalt} sira={sira} />
           
        }
      }) : <CardInput kelimeler={kelimeler} setKelimeler={setKelimeler} /> }


      
    </div>
  );
}
