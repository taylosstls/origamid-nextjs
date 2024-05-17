'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import photoPost from '@/actions/photoPost';
import Button from '@/components/forms/Button';
import Input from '@/components/forms/Input';
import ErrorMessage from '@/components/helper/ErrorMessage';

import styles from './AccountPhotoPhost.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Enviar</Button>
      )}
    </>
  );
}

export default function AccountPhotoPhost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = useState('');

  function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) setImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form className={styles.form} action={action}>
        <Input label="Nome" name="nome" type="text" />
        <Input label="Peso" name="peso" type="number" />
        <Input label="Idade" name="idade" type="number" />

        <label htmlFor="img" className={styles.label}>
          Selecione a foto
        </label>
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />

        <ErrorMessage error={state.error} />

        <FormButton />
      </form>

      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </section>
  );
}
