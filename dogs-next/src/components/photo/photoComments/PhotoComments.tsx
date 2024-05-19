import React from 'react';
import PhotoCommentsForm from '../photoCommentsForm/PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useUser } from '@/context/UserContext';
import { Comment } from '@/actions/photoGet';
import Link from 'next/link';

const PhotoComments = (props: {
  single: boolean;
  id: string;
  comments: Comment[];
}) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      {user ? (
        <>
          <ul
            ref={commentsSection}
            className={`${styles.comments} ${props.single ? styles.single : ''}`}
          >
            {comments.map((comment) => (
              <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
              </li>
            ))}
          </ul>
          <PhotoCommentsForm
            single={props.single}
            id={props.id}
            setComments={setComments}
          />
        </>
      ) : (
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>
            Login
            <br /> necessário
          </h2>
          <p>
            Faça login ou <strong>crie sua conta</strong> e começe a publicar!
          </p>

          <div className={styles.register}>
            <div>
              <Link className="button" href="/login">
                Entrar
              </Link>
            </div>

            <div className={styles.buttonContainer}>
              <Link
                className={`button ${styles.buttonCreate}`}
                href="/login/criar"
              >
                Cadastro
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoComments;
