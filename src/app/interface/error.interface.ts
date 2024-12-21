export type TErrorSource = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSurces: TErrorSource;
};
