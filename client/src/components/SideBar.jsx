import React from 'react';
import ColorPicker from './ColorPicker';
import FilePicker from './FilePicker';
import AIPicker from './AIPicker';

const Sidebar = ({ file, setFile, readFile, prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="h-full w-72 bg-gray-100 flex flex-col p-4">
      <div className="flex-grow">
        <ColorPicker />
      </div>
      <div className="my-4">
        <FilePicker file={file} setFile={setFile} readFile={readFile} />
      </div>
      <div className="my-4">
        <AIPicker prompt={prompt} setPrompt={setPrompt} generatingImg={generatingImg} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Sidebar;
