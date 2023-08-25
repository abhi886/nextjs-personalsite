import React, { useState } from 'react';
import RichTextOptions from '../../utils/rich-text-options';

const index = ({ shortDescription, data }) => {
  const [openModal, SetOpenModal] = useState(false);
  const handleModalClick = () => {
    SetOpenModal(!openModal);
  };
  return (
    <div className="text-slate-500 ml-2">
      {!openModal ? (
        <>
          {shortDescription}
          <div className="text-slate-500">
            <button type="button" onClick={() => handleModalClick()}>
              Read More...
            </button>
          </div>
        </>
      ) : (
        <>
          <RichTextOptions data={data} />
          <div className="text-slate-500">
            <button type="button" onClick={() => handleModalClick()}>
              Read Less...
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default index;
