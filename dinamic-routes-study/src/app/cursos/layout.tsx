// sobre/layout.tsx
import Link from 'next/link';

export default async function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/sobre/empresa">A Empresa</Link>
          </li>
          <li>
            <Link href="/sobre/equipe">Equipe</Link>
          </li>
          <li>
            <Link href="/sobre/historia">História</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
