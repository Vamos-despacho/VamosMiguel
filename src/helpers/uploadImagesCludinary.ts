interface Props {
    images: File[];
}
const cloudUrl = 'https://api.cloudinary.com/v1_1/dl6oea68u/image/upload';

export const uploadImagesCloudinaryCrop = async ({ images }: Props) => {
    try {
        const uploadedUrls: string[] = [];

        for (const image of images) {
            const data = new FormData();
            data.append('file', image);
            data.append('upload_preset', 'conocepanama');
            data.append('cloud_name', 'dl6oea68u');
            data.append('folder', 'VamosMA');

            const resp = await fetch(cloudUrl, {
                method: 'POST',
                body: data,
            });

            if (resp.status === 200) {
                const cloudResp = await resp.json();
                uploadedUrls.push(cloudResp.secure_url);
            } else {
                throw new Error('Image upload failed');
            }
        }

        return uploadedUrls;
    } catch (error) {
        console.log(error);
        return [];
    }
};
