"use client"

import { Button } from '@/components/ui/button'
import { Container } from 'lucide-react'
import { useState } from 'react'
import ImageUploader from 'react-images-upload'

export default function Recognize() {
    const [uploadedPictures, setUploadedPictures] = useState([])
    const onDrop = (picture: File[] ) => {
        setUploadedPictures([...uploadedPictures, picture])
      }
    
      const submitPictures = () => {
        uploadedPictures.map((picture) => {
          const reader = new FileReader()
    
          reader.readAsDataURL(picture[0])
    
          reader.onload = function () {
            const base64Url = reader.result
          }
        })
      }
    return (
        <>
        <h1>Put your pictures here.</h1>
        <p>This is important...</p>
        {uploadedPictures.length !== 0 && (
          <Button onClick={submitPictures}>Save your pictures now</Button>
        )}
        <Container>
          <ImageUploader
            withIcon={true}
            withPreview={true}
            buttonText="Choose images"
            onChange={(image) => onDrop(image)}
            singleImage={true}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
        </Container>
      </>
    )
  }
  
