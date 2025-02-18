import React, { useState } from "react";
import { UploadFileContext } from "./UploadFileContext"

export const UploadFileProvider = ({ children }) => {

  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file) => {
    setUploading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64Image = reader.result.split(",")[1];
        const fileName = file.name;

        await fetch("http://localhost:8002/api/storage/save-file", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: base64Image, fileName })
        });
      };
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
    } finally {
      setUploading(false);
    }
  };

  const createProduct = async (name, category, brand, description, price, images) => {
    try {
      await fetch("http://localhost:8000/api/product/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category,
          brand,
          description,
          price,
          images
        })
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <UploadFileContext.Provider value={{ uploadImage, createProduct, uploading }}>
      { children }
    </UploadFileContext.Provider>
  );
};