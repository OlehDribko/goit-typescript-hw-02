 import React from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard/ImageCard";
import { imageProps } from "./types/image.types";

const API_KEY = "Xg7i_oxAaJSlMbaYoc7u2q97M_kEQYjBKm0pkQO7qOM";


type FetchImagesParams = {
    query: string,
    page: number
}

export default async function fetchImages({ query, page }: FetchImagesParams): Promise< imageProps[]> {
     
      try {
        const response = await axios.get<{results:imageProps[]}>(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              client_id: API_KEY,
              page,
            },
          }
        );
          return response.data.results;
      } catch (err) {
throw new Error("Щось пішло не так, спробуйте ще раз.");      } 
    }