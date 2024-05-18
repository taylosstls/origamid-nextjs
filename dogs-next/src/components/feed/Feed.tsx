'use client';
import { useEffect, useRef, useState } from 'react';

import styles from './Feed.module.css';
import photosGet, { PhotoProps } from '@/actions/photosGet';
import Loading from '@/components/helper/loading/Loading';
import FeedPhotos from './FeedPhotos';

export default function Feed({ photos, username }: { photos: PhotoProps[], username?: 0 | string }) {
  const [photosFeed, setPhotosFeed] = useState<PhotoProps[]>(photos);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);

  const fetching = useRef(false);

  function infiniteScroll() {
    if (fetching.current) return

    fetching.current = true
    setLoading(true)

    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    if(page === 1) return
    async function getPagePhotos(page: number) {
      const actionData = await photosGet({ page: page, total: 6, user: 0 }, {
        cache: 'no-store'
      })
      
      if(actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if(data.length < 6) setInfinite(false)
      }
    }
    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if(infinite) {
      window.addEventListener('scroll', infiniteScroll);
      window.addEventListener('wheel', infiniteScroll);
    } else {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }

  }, [infinite])

  return (
    <section>
      <div>
        <FeedPhotos photos={photosFeed} />
        <div className={styles.loadingWrapper}>
          {infinite ? (loading && <Loading />) : <p><em>Você visualizou todas as nossas publicações </em>🐶</p>}
        </div>
      </div>
    </section>
  );
}
