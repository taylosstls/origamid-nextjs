'use client';
import { Dispatch, useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import styles from './PhotoCommentsForm.module.css';
import SendMessage from '@/icons/SendMessage';

import ErrorMessage from '@/components/helper/errorMessage/ErrorMessage';
import { Comment } from '@/actions/photoGet';
import commentPost from '@/actions/commentPost';

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.button} disabled={pending}>
      <SendMessage />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: string;
  setComments: Dispatch<React.SetStateAction<Comment[]>>;
}) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  });

  const { ok, data } = state;

  useEffect(() => {
    if (ok && data) {
      setComments((comments) => [...comments, data]);
      setCommentTextarea('');
    }
  }, [ok, data, setComments]);

  const [commentTextarea, setCommentTextarea] = useState('');

  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={commentTextarea}
        onChange={({ target }) => setCommentTextarea(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
