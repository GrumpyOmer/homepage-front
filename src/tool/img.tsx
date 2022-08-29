import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import React, { ReactElement } from 'react';

export interface ImgInfo {
  info: ReactElement;
  src: any;
}

export default function Img(img: ImgInfo): any {
  return (
    <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
      <PhotoView src={img.src}>{img.info}</PhotoView>
    </PhotoProvider>
  );
}
