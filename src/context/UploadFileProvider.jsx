import React, { useContext, useState } from "react";
import axios from "axios";

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
        
        await axios.post("http://localhost:8082/api/storage/save-file", {
          base64File: base64Image,
          fileName,
        });
      };
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const createProduct = async (name, description, price) => {
    try {
      await axios.post("http://localhost:8080/api/product/create", {
        name,
        description,
        price,
      });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <UploadFileProvider.Provider value={{ uploadImage, createProduct, uploading }}>
      {children}
    </UploadFileProvider.Provider>
  );
};