/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import Button from './button';
import { generateClientDropzoneAccept } from 'uploadthing/client';

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUpload({
  imageUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const convertFileToUrl = (file: File) => URL.createObjectURL(file);
  const a = () => console.log('imageUrl=' + imageUrl);
  a;
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles), onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-col overflow-hidden rounded-xl bg-grey-50 h-72 bg-dark-3"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-col py-5 text-gray-500">
          <img src="upload.svg" width={77} height={77} alt="file upload" />
          <h3 className="mb-2 mt-2"> Drag photo here</h3>
          <p className="p-12 mb-2"> SVG, PNG, JPG</p>
          <Button type="button" title="Select from computer" />
        </div>
      )}
    </div>
  );
}
