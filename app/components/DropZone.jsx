'use client'

import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css'
import { useEffect, useState } from 'react'

export default function DropZoneComponent () {
  const [status, setStatus] = useState(false)
  const [link, setLink] = useState('')

  useEffect(() => {
    const dropzone = new Dropzone('#dropzone', {
      uploadMultiple: false,
      acceptedFiles: '.jpg, .png, .webp, .jpge, .svg',
      maxFiles: 1,
      previewsContainer: false
    })

    dropzone.on('sending', (file, xhr, formData) => {
      formData.append('upload_preset', 'ml_default')
      formData.append('timestamp', (Date.now() / 1000))
      formData.append('api_key', 957824338686352)
    })

    dropzone.on('success', (file, response) => {
      console.log('Todo bien :3')
      console.log(response)
      console.log(response.secure_url)
      setStatus(true)
      setLink(response.secure_url)
    })

    dropzone.on('error', (file, response) => {
      console.log('Todo mal :c')
      console.log(response)
    })
  }, [])

  function copy () {
    navigator.clipboard.writeText(link)
  }

  return (
    <>
      {status
        ? <button className='bg-gray-600 text-bold text-white text-xl px-6 py-4 rounded-lg' onClick={copy}>Copiar Link al portapapeles</button>
        : ''}
      {status
        ? <input className='mt-4 bg-transparent' type='text' value={link} readonly />
        : ''}
      <form
        id='dropzone'
        className='shadow-xl border-dashed border-2 border-gray-400 rounded-lg aspect-video flex items-center justify-center flex-col w-2/3 mt-16 cursor-pointer'
        action='https://api.cloudinary.com/v1_1/dohrgib2w/image/upload'
      >
        {!status
          ? <button className='pointer-events-none bg-gray-600 text-bold text-white text-xl px-6 py-4 rounded-lg hover:shadow-2xl mt-8'>Examina tu imagen</button>
          : ''}
        {!status
          ? <strong className='mt-4 text-gray-400'>O arrastra una imagen</strong>
          : ''}
        {status
          ? <img src={link} alt='preview' />
          : ''}
      </form>
    </>
  )
}
