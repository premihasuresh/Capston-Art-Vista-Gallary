import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import { useCart } from '../context/CartContext'; 
import DashboardItem from '../components/DashboardItem';


const categories = [
  "Protriast", "Iceland", "Religious Art", "Coconut Bowls", "Tetbury Flower Co", "Photograpthy", "City", 
  "Cars", "Aviation", "Noel", "Flowers", "Food", "Road Tripe", "Jocker", 
  "Art", "Indonesia", "Boat", "Lanns", "Holistic", "Humans", 
  "Living Room", "Dance", "Desert", "Wildlife", "Trible",
]; 

const images = [ 
  {
    title: "Protriast",
    description: "A serene abstract painting that evokes a sense of tranquility and contemplation, blending soft hues and delicate lines.",
    category: "Protriast",
    image: "https://images.unsplash.com/photo-1535987164173-40bb3d30bcf3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Emily Watson", 
    price: 100
  },
  {
    title: "Iceland",
    description: " A breathtaking landscape photograph capturing the stunning beauty of Iceland's glaciers, waterfalls, and volcanic landscapes.",
    category: "Iceland",
    image: "https://plus.unsplash.com/premium_photo-1674313072675-4edb813d12e6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist:"Ólafur Kristjánsson",
    price: 200
  },
  {
    title: "Religious Art",
    description: "A detailed painting depicting a significant religious scene with rich colors and intricate symbolism, conveying deep spiritual themes.",
    category: "Religious Art",
    image: "https://plus.unsplash.com/premium_photo-1677829176552-41719fa3b7f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Maria Santos",
    price: 250
  },
  {
    title: "Coconut Bowls",
    description: "Handcrafted coconut bowls featuring intricate carvings and natural textures, perfect for serving and decorating.",
    category: "Coconut Bowls",
    image: "https://images.unsplash.com/photo-1516474004458-f7f1cf523802?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: " Ananda Kumar",
    price: 300
  },
  {
    title: "Tetbury Flower Co",
    description:"A charming floral arrangement from the Tetbury Flower Co, showcasing a vibrant mix of seasonal blooms and delicate foliage.",
    category:"Tetbury Flower Co",
    image: "https://images.unsplash.com/photo-1585234871343-80861b2564f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Sophie Bennett",
    price: 360
  },
  {
    title: "Photography",
    description: "A striking black and white photograph capturing the essence of urban life with a focus on light, shadow, and movement.",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "James Carter",
    price: 400
  },
  {
    title: "City",
    description:  "A vibrant cityscape painting depicting the hustle and bustle of urban life, with dynamic brushstrokes and bold colors.",
    category: "city",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Laura Mitchell",
    price: 480
  },
  {
    title: "Cars",
    description:  "A detailed illustration of classic cars, showcasing the elegance and design of vintage automobiles in a nostalgic style.",
    category: "Cars",
    image: "https://images.unsplash.com/photo-1696315308518-947f132812a7?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Daniel Edwards",
    price: 380
  },
  {
    title: "Aviation",
    description: "A dramatic painting of an aircraft soaring through the skies, highlighting the power and grace of flight.",
    category: "Aviation",
    image: "https://images.unsplash.com/photo-1617868634099-47f2f38d6be9?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Michael Stevenson",
    price: 480
  },
  {
    title: "Noel",
    description: "A festive artwork celebrating the holiday season, featuring traditional Christmas motifs and a warm color palette.",
    category: "Noel",
    image: "https://plus.unsplash.com/premium_photo-1661765319272-b6d49089e41f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Claire Adams",
    price: 800
  },
  {
    title: "Flowers",
    description: "A delicate watercolor painting of a blooming garden, capturing the vibrant colors and intricate details of various flowers.",
    category: "Flowers",
    image: "https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Lily Thompson",
    price: 700
  },
  {
    title: "Food",
    description: "A mouth-watering still life painting of a beautifully arranged platter of fresh fruits and gourmet dishes.",
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Antonio Ricci",
    price: 800
  },
  {
    title: "Road Trip",
    description: "An evocative painting capturing the spirit of adventure, depicting a traveler exploring exotic landscapes and cultural landmarks.",
    category: "Road Trip",
    image:  "https://images.unsplash.com/photo-1673280167171-d2a3303dff1f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Sarah Johnson",
    price: 650
  },
  {
    title: "Jocker",
    description: "A gallery is a curated space where artworks, photographs, and other creative expressions are displayed for public viewing and appreciation.",
    category: "Jocker",
    image: "https://images.unsplash.com/photo-1501369497246-426438abca8e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Curated View",
    price: 900
  },
  {
    title: "Art",
    description: "An eclectic piece combining various artistic styles and mediums, reflecting the diverse expressions of contemporary art.",
    category: "Art",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "David Nguyen",
    price: 950
  },
  {
    title: "Indonesia",
    description: "A vibrant painting portraying the rich cultural heritage and stunning landscapes of Indonesia, from lush jungles to traditional ceremonies.",
    category: "Indonesia",
    image: "https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Siti Rahayu",
    price: 550
  },
  {
    title: "Boat",
    description: "A serene painting of a fishing boat gently floating on calm waters, with a picturesque sunset in the background.",
    category: "Boat",
    image: "https://images.unsplash.com/photo-1529271230144-e8c648ef570d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Thomas Walker",
    price: 800
  },
  {
    title: "Lanns",
    description: "A whimsical artwork featuring imaginative characters and scenes, creating a dreamlike narrative that captivates the viewer.",
    category: "Lanns",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Fiona Mackenzie",
    price: 500
  },
  {
    title: "Holistic",
    description: "A calming painting that embodies the principles of holistic well-being, using soothing colors and harmonious compositions.",
    category: "Holistic",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Aisha Patel",
    price: 450
  },
  {
    title: "Humans",
    description: "A powerful and emotive painting that explores the complexity of human emotions and connections, capturing the essence of humanity through expressive brushstrokes and vibrant colors.",
    category: "Humans",
    image: "https://images.unsplash.com/photo-1560327298-72f004126f67?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Rachel Morgan",
    price: 700
  },
  {
    title: "Living Room",
    description: "A living room is a central area in a home designed for relaxation, socializing, and entertainment, often furnished with comfortable seating and décor.",
    category: "Living Rooms",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Cozy Corner",
    price: 600
  },
  {
    title: "Dance",
    description: "A dynamic and graceful painting that captures the fluidity and energy of dancers in motion, with swirling colors and rhythmic patterns that evoke the spirit of dance.",
    category: "Dance",
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: " Isabella Martinez",
    price: 800
  },
  {
    title: "Desert",
    description: "A stunning landscape painting depicting the vast and serene beauty of a desert, with golden sands, distant dunes, and a sunlit sky that captures the arid yet majestic environment.",
    category: "Desert",
    image: "https://images.unsplash.com/photo-1516653980844-c68df1de5249?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Ahmed El-Sayed",
    price: 850
  },
  {
    title: "WildLife",
    description: "Wildlife captures the majestic beauty and raw essence of the natural world This artwork portrays various animals in their natural habitats, highlighting their intricate details and the vibrant ecosystem they inhabit.",
    category: "WildLife",
    image: "https://images.unsplash.com/photo-1545833303-6bab33314c69?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    artist: "Emily Thompson",
    price:400
  },
  {
    title: "Trible",
    description: "Trible explores the fusion of ancient tribal art with modern interpretations This piece features bold, geometric patterns and rich, earthy tones that evoke a sense of connection to ancient cultures and traditions.",
    category: "Trible",
    image: "https://images.unsplash.com/photo-1580746453801-37b0bc56f3b4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.",
    artist: "Kai Robinson",
    price: 800
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="dashboard-container">
      {images.map((item) => (
        <div className="card" key={item.title}>
          <button 
            className="add-to-cart-button" 
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Artist: {item.artist}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;