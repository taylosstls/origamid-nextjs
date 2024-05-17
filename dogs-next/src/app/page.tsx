import photosGet from '@/actions/photosGet';
import Feed from '@/components/feed/Feed';

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data?.length ?
        <Feed photos={data} /> :
        <div>Erro ao carregar o feed</div>}
    </section>
  );
}
