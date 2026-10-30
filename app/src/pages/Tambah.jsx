import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kuliah', teknologi: '', tahun: '', tautan: '' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim(), tahun: form.tahun ? Number(form.tahun) : '', })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tugas</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Kuliah</option>
        <option>Organisasi</option>
      </select>

      <label htmlFor="teknologi">Teknologi</label>
      <input id="teknologi" name="teknologi" value={form.teknologi} onChange={ubah} placeholder="Contoh: React, Laravel" />

      <label htmlFor="tahun">Tahun</label>
      <input id="tahun" name="tahun" type="number" value={form.tahun} onChange={ubah} placeholder="Contoh: 2026" />

      <label htmlFor="tautan">Tautan</label>
      <input id="tautan" name="tautan" type="url" value={form.tautan} onChange={ubah} placeholder="https://..." />

      <button type="submit">Simpan</button>
    </form>
  )
}