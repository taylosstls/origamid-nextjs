import photosGet from "@/actions/photosGet";
import NotFound from "@/app/not-found";
import Feed from "@/components/feed/Feed";

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photosGet({ user: params.user });

  if (!data) return NotFound();

  return (
    <section className="container mainSection">
      <h1 className="title" style={{ marginBottom: '3rem', marginTop: '2rem' }}>{params.user}</h1>

      <Feed photos={data} username={params.user} />
    </section>
  );
}
