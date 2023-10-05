/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import RichTextOptions from '../../utils/rich-text-options';

const index = ({ shortDescription, data }) => {
  const [openModal, SetOpenModal] = useState(false);
  const handleModalClick = () => {
    SetOpenModal(!openModal);
  };
  return (
    <div className="text-slate-500 ml-2" onClick={() => handleModalClick()}>
      {!openModal ? (
        <p>
          {shortDescription}
          {!openModal && 'Read More'}
        </p>
      ) : (
        <RichTextOptions data={data} />
      )}
      <div className="text-slate-500 text-right">
        <button type="button">{!openModal ? 'Read More' : 'Read Less'}</button>
      </div>
    </div>
  );
};
export default index;
