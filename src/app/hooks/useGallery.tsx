import { useState } from "react";
import { data } from "../data";

export const useGallery = () => {
  const [gallery, setGallery] = useState(null);

  const fetchData = async () => {
    setGallery(data);
  };
};
