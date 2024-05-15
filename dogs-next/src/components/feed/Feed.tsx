import { PhotoProps } from "@/actions/photosGet";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ photos }: { photos: PhotoProps[] }) {
  return (
    <section>
      <div>
        <FeedPhotos photos={photos} />
      </div>
    </section>
  )
}