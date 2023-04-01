import { getSearchImages } from "../Service/ServiceApi";
import { useEffect, useLayoutEffect, useState, createRef } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "../Button/Button";

import { ColorRing } from "react-loader-spinner";
import { Circle, Title } from "./ImageGallery.styled";

export const ImageGallery = ({ valueSearch }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [status, setStatus] = useState("idle");

  //---- Query overwritten

  useLayoutEffect(() => {
    if (query !== valueSearch) {
      setQuery(valueSearch);
      return setPage(1);
    }
  }, [valueSearch, query]);

  // ----- Request

  useEffect(() => {
    if (query === "") return;

    page > 1 || setStatus("pending");

    getSearchImages(query, page)
      .then((data) => {
        if (data.total === 0) {
          console.log(data.message);
          setStatus("rejected");
          return;
        }
        setImages((prevImages) =>
          page === 1 ? data.hits : [...prevImages, ...data.hits]
        );
        setTotalPage(data.total);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error.message);
        setStatus("rejected");
      });
  }, [query, page]);

  //----- Scroll

  let imagesItemRef = createRef(null);

  useEffect(() => {
    if (!imagesItemRef.current) return;
    imagesItemRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [images]);

  //  ----Button onLoad
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //----- Markup

  if (status === "idle") {
    return <Title>What do you want to find?</Title>;
  }

  if (status === "pending") {
    return (
      <Circle>
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
        />
        ;
      </Circle>
    );
  }

  if (status === "rejected") {
    return <Title>Sorry, no such request</Title>;
  }

  if (status === "resolved") {
    return (
      <>
        <ImageGalleryItem images={images} imagesScroll={imagesItemRef} />
        {totalPage - images.length > 0 && <Button onClick={onLoadMore} />}
      </>
    );
  }
};
