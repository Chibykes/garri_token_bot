import { DependencyList, useEffect, useState } from "react";

const useNavHeight = (value: number, dependencies: DependencyList) => {
  const [height, setHeight] = useState(value);
  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    if (navbar) setHeight(navbar.clientHeight!);
  }, [dependencies]);

  return height;
};

export default useNavHeight;
