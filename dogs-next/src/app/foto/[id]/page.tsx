import photoGet from '@/actions/photoGet';
import PhotoContent from '@/components/photo/photoContent/PhotoContent';
import { notFound } from 'next/navigation';

type PhotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PhotoIdParams) {
  const { data } = await photoGet(params.id);

  if (!data) return { title: 'Fotos' };
  return { title: `${data?.photo.title} | Dogs Next` };
}

export default async function FotoIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await photoGet(params.id);

  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
