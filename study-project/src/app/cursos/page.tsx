import Link from 'next/link';
import styles from './cursos.module.css';

export default function CursoPage() {
  return (
    <main className={styles.cursos}>
      <h1>Cursos</h1>

      <Link href="/cursos/html/aula/introducao-ao-html">Curso interno</Link>
    </main>
  )
}
