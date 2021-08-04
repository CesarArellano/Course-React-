import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload"

cloudinary.config({
  cloud_name: 'dpvsseupu',
  api_key: '916666825172457',
  api_secret: 'eRXjyPCffJzysVe6zickEHymRxU',
  secure: true
});

describe('Testing fileUpload function', () => {

  test('Send empty file to the fuction and return URL', async () => {

    const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect( typeof url ).toBe('string');
    // Delete image by id
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      console.log('Finished!');
    });
  });

  test('Must return error', async () => {

    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect( url ).toBe(null);
  });

})
