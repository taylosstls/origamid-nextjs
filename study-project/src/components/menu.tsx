import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre#empresas" scroll={true} prefetch={true}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/produtos" scroll={true} prefetch={true}>
          Produtos
        </Link>
      </li>
      <li>
        <Link href="/cursos" scroll={true} prefetch={true}>
          Cursos
        </Link>
      </li>
    </ul>
  );
}
