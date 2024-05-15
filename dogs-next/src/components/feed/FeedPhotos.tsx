import Image from "next/image"
import Link from "next/link"

import { PhotoProps } from "@/actions/photosGet"
import styles from './FeedPhotos.module.css'

export default function FeedPhotos({photos}: {photos: PhotoProps[]}) {
  console.log(photos)
  return (
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo, i) => {
          return (
            <li key={photo.id + i} className={styles.photo}>
              <Link href={`foto/${photo.id}`} scroll={false}>
                <Image src={photo.src} alt={photo.title} width={1500} height={1500} sizes="80vw" />
                <span className={styles.visualizacao}>{photo.acessos}</span>
              </Link>
            </li>
          )
        })}
      </ul>
  )
}