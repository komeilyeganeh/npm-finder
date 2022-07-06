import axios from "axios";
import React, { useState } from "react";
import { npmContext } from ".";

type ProviderProps = {
  children: React.ReactNode;
};

const ProviderNpm: React.FC<ProviderProps> = ({ children }) => {
  const [packages, setPackages] = useState<{ name: string; url: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchPackage = (name: string): void => {
    setPackages([]);
    const fetchApi = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: name,
          },
        }
      );
      data.objects.map((pack: any) => {
        setPackages((prev) => [
          ...prev,
          { name: pack.package.name, url: pack.package.links.npm },
        ]);
      });

      setIsLoading(false);
      if (Object.keys(data.objects).length === 0) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    };
    fetchApi();
  };

  return (
    <npmContext.Provider
      value={{
        packages,
        loading: isLoading,
        searchPackage,
        notFound: isError,
      }}
    >
      {children}
    </npmContext.Provider>
  );
};

export default ProviderNpm;
