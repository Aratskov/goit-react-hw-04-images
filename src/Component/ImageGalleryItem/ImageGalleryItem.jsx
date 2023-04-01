import { GalleryContainer, Gallery, Item } from "./ImageGalleryItem.styled";
import { ListItem } from "../Item/Item";

export const ImageGalleryItem = ({ images, imagesScroll }) => {
  return (
    <GalleryContainer>
      <Gallery>
        {images.map((image, ind, arr) => (
          <Item
            key={image.id}
            ref={arr.length - 12 === ind && ind !== 0 ? imagesScroll : null}
          >
            <ListItem image={image} />
          </Item>
        ))}
      </Gallery>
    </GalleryContainer>
  );
};
