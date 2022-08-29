import { response } from '@umijs/deps/compiled/express';
import request from 'umi-request';

export interface GetRequest {
  Url: string;
  Header?: HeadersInit;
  Param?: Object;
}

export interface PostRequest {
  Url: string;
  Header?: any;
  Body?: any;
}

export function GetRequest(props: GetRequest): any {
  return request
    .get(props.Url, {
      params: props.Param,
      headers: props.Header,
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return { code: 400, message: error };
    });
}

export function PostRequest(props: PostRequest): any {
  return request
    .post(props.Url, {
      data: props.Body,
      headers: props.Header,
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
}
