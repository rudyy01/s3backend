import express, { Request, Response } from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';

const app = express();
const port = 5001;
const storage = multer.memoryStorage();
const upload = multer({ storage });

// const s3 = new AWS.S3({
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   });

// app.post('/upload-file', upload.single('file'), (req: Request, res: Response) => {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const params = {
//       Bucket: 'your-bucket-name',
//       Key: req.file.originalname,
//       Body: req.file.buffer,
//     };

//     s3.upload(params, (err: AWS.AWSError, data: AWS.S3.ManagedUpload.SendData) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: 'Failed to upload file to S3' });
//       }
//       console.log('File uploaded successfully:', data.Location);
//       res.json({ message: 'File uploaded successfully', url: data.Location });
//     });
//   });

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
