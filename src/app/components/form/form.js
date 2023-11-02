'use client';
import React, { useState } from 'react';
import styles from './form.module.css';
import MyImputs from '../inputs/input';

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
      </div>
    </div>
  );
};

export default OurForm;
