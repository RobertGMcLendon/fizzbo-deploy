
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number | null;
  bathrooms: number | null;
  square_feet: number | null;
  photos: string[];
  propy_url: string | null;
  description: string | null;
}

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProps = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("listing_status", "active")
        .limit(50);
      if (!error && data) {
        setProperties(
          data.map((d: any) => ({
            ...d,
            photos: typeof d.photos === "string" ? JSON.parse(d.photos) : d.photos,
          }))
        );
      }
      setLoading(false);
    };
    fetchProps();
  }, []);

  return { properties, loading };
};
