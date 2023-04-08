import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const presetColors = ['#F44336', '#FFEB3B', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={presetColors}
        className="shadow-md rounded-lg border border-gray-300 p-4"
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
};

export default ColorPicker;
