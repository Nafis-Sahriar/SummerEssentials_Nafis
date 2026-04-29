import { Spinner } from "@heroui/react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-2 justify-center">

      <Spinner color="danger"size="xl"  />
      
    </div>
  );
};

export default Loading;
