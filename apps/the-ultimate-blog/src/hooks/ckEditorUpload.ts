// import { trpc } from 'libs/shared/ui/src/utils/trpc';

// export function MyCustomUploadAdapterPlugin(editor) {
//   editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
//     return new MyUploadAdapter(loader);
//   };
// }

// class MyUploadAdapter {
//   constructor(loader) {
//     // CKEditor 5's FileLoader instance.
//     this.loader = loader;
//   }

//   // Starts the upload process.
//   upload() {
//     return new Promise((resolve, reject) => {
//       this.loader.file.then(async (file) => {
//         try {
//           //   const formData = new FormData();
//           //   formData.append('file', file);
//           // Make the trpc request to handle the upload and get the URL
//           const data = 'https://i.morioh.com/2022/03/01/b2c794d3.webp';
//           console.warn('TESTING', data); // Replace with your trpc method for uploading images

//           if (!data) {
//             return reject('File upload faile1');
//           }

//           // Resolve the upload promise with the URL of the uploaded image.
//           resolve({
//             default: data, // Modify this based on your trpc response structure
//           });
//         } catch (error) {
//           reject('File upload failed2');
//         }
//       });
//     });
//   }

//   abort() {
//     // Implement abort logic if needed
//   }
// }
