import { CloudUpload } from 'lucide-react'
import React, { useState } from 'react'
import { ReactPhotoEditor } from 'react-photo-editor';

const App = () => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const chooseFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      setFile(file);
      setShowModal(true);
    };
  };

  const hideModal = () => {
    setShowModal(false);
    setFile(null);
  };

  const handleSaveImage = (editedFile) => {
    if (!file) return;

    const timestamp = Date.now();
    const originalName = file.name.split('.').slice(0, -1).join('.');
    const extension = file.name.split('.').pop();
    const downloadName = `${originalName}_edited_${timestamp}.${extension}`;

    const url = URL.createObjectURL(editedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = downloadName;
    link.click();
    URL.revokeObjectURL(url);

    hideModal();
  };

  return (
    <div className="h-screen flex items-center justify-center px-4 
      bg-[linear-gradient(17deg,_hsl(199,73.28700146254045%,71.75684098565425%),_hsl(38,64.78609095123502%,78.86749240220053%))]">

      <div
        onClick={chooseFile}
        className="flex flex-col items-center justify-center 
                   bg-white shadow-lg 
                   w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
                   p-6 sm:p-8 rounded-xl
                   transform transition-transform duration-300 
                   hover:scale-110 active:scale-95 cursor-pointer"
      >
        <CloudUpload className="w-10 h-10 mb-3 text-slate-700" />
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
          Upload Image
        </h1>
      </div>

      <ReactPhotoEditor
        open={showModal}
        onClose={hideModal}
        file={file}
        onSaveImage={handleSaveImage}
        className="w-[95vw] max-w-[500px] h-[80vh] sm:h-[90vh]"

      />
    </div>
  );
};

export default App;
