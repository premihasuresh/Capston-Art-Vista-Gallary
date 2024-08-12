import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Replace with your actual API endpoint
const fetchItemById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/items/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

const ItemDetailPage = () => {
  const { id } = useParams(); // Get the item id from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItemDetails = async () => {
      try {
        const data = await fetchItemById(id);
        setItem(data);
      } catch (err) {
        setError('Failed to fetch item details');
      } finally {
        setLoading(false);
      }
    };

    getItemDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
      {/* Render additional item details as needed */}
    </div>
  );
};

export default ItemDetailPage;