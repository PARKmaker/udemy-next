"use client";

import styles from "./image-picker.module.css";
import React, { useRef, useState } from "react";
import Image from "next/image";

type Props = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: Props) {
  const [pickedImage, setPickedImage] = useState<
    string | undefined | ArrayBuffer | null
  >();
  const imageInput = useRef<HTMLInputElement>(null);
  function handlePickClick() {
    // 타입 체킹 필요
    if (!imageInput.current) {
      return;
    }

    imageInput.current.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage as string} alt={"dd"} fill={true} />
          )}
        </div>
        <input
          className={styles.input}
          type={"file"}
          id={name}
          accept={"image/png, image/jpeg"}
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
      </div>
      <button
        className={styles.button}
        type={"button"}
        onClick={handlePickClick}
      >
        Pick an Image
      </button>
    </div>
  );
}
