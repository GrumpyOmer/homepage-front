import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import React, { ReactElement } from 'react';

export interface ImgInfo {
  info: ReactElement;
  src: any;
}

export default function Img(img: ImgInfo[]): any {
  let info = img.map(function (v: any, k: any) {
    return (
      <PhotoView key={k} src={v.src}>
        {v.info}
      </PhotoView>
    );
  });
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false} photoClosable={true}>
      {info}
    </PhotoProvider>
  );
}
