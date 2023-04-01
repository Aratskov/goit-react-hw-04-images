import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { Img } from "./Item.styled";

export const ListItem = ({ image: { webformatURL, largeImageURL, tags } }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Img src={webformatURL} onClick={() => setVisible(true)} alt={tags} />
      {visible && (
        <Modal
          src={largeImageURL}
          visible={setVisible}
          isOpen={visible}
          tags={tags}
        />
      )}
    </>
  );
};
