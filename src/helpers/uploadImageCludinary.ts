

interface Props {
    images: File;
};

const cloudUrl = 'https://api.cloudinary.com/v1_1/dl6oea68u/image/upload';

export const uploadImageCloudinaryCrop = async ({ images }: Props) => {

    try {

        const data = new FormData();
        data.append('file', images);
        data.append('upload_preset', 'conocepanama');
        data.append('cloud_name', 'dl6oea68u');
        data.append('folder', 'VamosMA');

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: data,
        });

        if (resp.status === 200) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }

        throw new Error('Image upload failed');


    } catch (error) {
        console.log(error);
        return [];
    }
};
