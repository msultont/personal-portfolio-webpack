import { useEffect } from "react";

const useHideLoader = () => {
  useEffect(() => {
    if (window && typeof $ !== "undefined") {
      $(".fh5co-loader").fadeOut("slow", function () {
        $(this).hide();
      });
    }
  }, []);
};

export default useHideLoader;
