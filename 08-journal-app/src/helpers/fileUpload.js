import Swal from 'sweetalert2';

export const fileUpload = async ( file ) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dpvsseupu/image/upload';
  
  const formData = new FormData();
  formData.append('upload_preset', 'fvps6qmz');
  formData.append('file', file)
  
  try {
    
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });
    
    if( resp.ok ) {
      const data = await resp.json();
      return data.secure_url;
    } else {
      Swal.fire('Error', 'The image could not be upload', 'error');
      throw await resp.json();
    }

  } catch (err) {
    Swal.fire('Error', err, 'error');
  }
}