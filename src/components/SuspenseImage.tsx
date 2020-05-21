import React, { Suspense } from "react";
import styled from "styled-components";

interface Resource {
  read: () => void;
}

function wrapPromise(promise: Promise<any>): Resource {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const cache: Record<string, Resource> = {};

const ImageResource = (source: string): Resource => {
  if (!cache[source])
    cache[source] = wrapPromise(
      new Promise((resolve) => {
        const img = new Image();
        img.src = source;
        img.onload = () => {
          resolve();
        };
      })
    );
  return cache[source];
};

interface ImageProps {
  src: string;
}

const SuspenseImage: React.FC<ImageProps> = (props) => {
  return (
    <Suspense fallback={<Fallback {...props} />}>
      <ActualImage {...props} />
    </Suspense>
  );
};

const ActualImage: React.FC<ImageProps> = ({ src, ...props }) => {
  ImageResource(src).read();
  return <img src={src} style={{}} {...props} />;
};

const Fallback = styled.div`
  background: #73622b;
  opacity: 0.2;
`;

export default SuspenseImage;
