
import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, teknologi, tahun } = item

  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>Kategori: {kategori}</p>
      <p>Teknologi: {teknologi}</p>
      <p>Tahun: {tahun}</p>
    </article>
  )
}
