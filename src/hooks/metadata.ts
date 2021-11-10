import { useEffect, useState } from "react";
import { getMetadataById } from "../services/metadata";

export const useMetadata = (id: number) => {
  const [loading, setloading] = useState(false);
  const [nft, setnft] = useState(null);

  const init = async () => {
    setloading(true);
    try {
      const { data, status } = await getMetadataById(id);

      if (status === 200) {
        setnft(data);
      }
    } catch (error) {
      //
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    nft,
    loading,
  };
};
