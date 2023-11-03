'use client';
import React, { useState, useEffect} from 'react';
import Image from 'next/image';

import styles from './form.module.css';
import MyImputs from './Input';

let spritesDiglett = require('../../../../content/sprites.json');

const OurForm = ({ ...props }) => {
  const [formValues, setFormValues] = useState({
    pokemon: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pokemon } = formValues;
    const alertMessage = `Seu pokemon favorito é ${pokemon}`;
    alert(alertMessage);
  };


  //========================== Joguinho do Diglett :) ==========================
  //============================================================================

  const [spriteAtual, setSpriteAtual] = useState(0)
  const [animacaoAtiva, setAnimacaoAtiva] = useState(0)

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => { 
      var imagemDiglett = document.getElementById('imagemDigglet');
      const interval = setInterval(() => { 
        (animacaoAtiva == 1 && spriteAtual < 8 && spriteAtual >= 0) 
        || (animacaoAtiva == -1 && spriteAtual <= 8 && spriteAtual > 0) 
        ?
        setSpriteAtual(spriteAtual + animacaoAtiva)
        : 
        (
          (animacaoAtiva == 1 ?
            (imagemDiglett.classList.add(styles.diglettSumindo))
            : 
            (animacaoAtiva == -1 ?
              (imagemDiglett.classList.add(styles.diglettAparecendo)) 
              : null
            )
          )
        )
      }, 60); 
      return () => clearInterval(interval); 
  }, [spriteAtual, animacaoAtiva]);

  function animacaoDiggletDescendo(){
    var imagemDiglett = document.getElementById('imagemDigglet');
    setAnimacaoAtiva(1)
    setTimeout(()=>{
      setAnimacaoAtiva(0)
      var distancia_left = getRandomInt(0, imagemDiglett.parentNode.offsetWidth - imagemDiglett.offsetWidth);
      imagemDiglett.style.left = distancia_left + "px";
      imagemDiglett.classList.remove(styles.diglettSumindo)
      imagemDiglett.classList.add(styles.diglettAparecendo)
      setTimeout(()=>{
        setAnimacaoAtiva(-1)
        setTimeout(()=>{
          setAnimacaoAtiva(0)
          imagemDiglett.classList.remove(styles.diglettAparecendo)
        }, (60 * 10))
      }, 500)
    },(60 * 10) + 500); 
  }

  //============================================================================
  //============================================================================

  return (
    <div className={styles.formSection} {...props}>
      <div className={styles.container}>
        <h3 className={styles.title}>Envie uma mensagem para nós:</h3>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <MyImputs id="pokemon" type="text" placeholder="Pokemon favorito" onChange={handleChange} />
          <MyImputs id="message" type="text" placeholder="Digite sua mensagem" onChange={handleChange} />
          <MyImputs id="email" type="email" placeholder="Seu e-mail" onChange={handleChange} />
          <MyImputs id="password" type="password" placeholder="Senha do cartão" onChange={handleChange} />
          <button type="submit" id="buttonTest" className={styles.submitButton}>
            Enviar
          </button>
        </form>
        <div className="w-full">
          <Image 
            style={{left:'calc(50% - 100px)', cursor: 'pointer'}} 
            id="imagemDigglet" 
            className="relative bottom-[-95px]" 
            onClick={()=>{spriteAtual == 0 ? animacaoDiggletDescendo() : ''}} 
            alt="Digglet" 
            width="200" 
            height="200" 
            src={`${spritesDiglett.DIGLETT.sprites[spriteAtual].imgUrl}`}
          />
        </div>
      </div>
    </div>
  );
};


export default OurForm;
