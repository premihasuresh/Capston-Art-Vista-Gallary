import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const itemWithImage = {
      ...item,
      imageUrls: [
        'https://jooinn.com/images/sunflower-plant-3.jpg',
        'https://th.bing.com/th/id/R.35aff707df04534e79084ef828c313df?rik=XA2GvrM7UsKq3w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fL20UwTs.jpg&ehk=QeLqHXJq1PIiAFdOBPW1heNVt1Sxnaq%2fLOWpG9DIRME%3d&risl=&pid=ImgRaw&r=0',
        'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/hibiscus-syriacus.jpg',
        'https://c02.purpledshub.com/uploads/sites/62/2023/09/Gold-Comedy-Bird-Photo-b38d302.jpg?w=1029&webp=1',
        'https://images.unsplash.com/photo-1534269222346-5a896154c41d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.lukas-petereit.com/wp-content/uploads/2017/10/Moraine-Lake-Lake-Louise-Ten-Peaks-Snow-Alberta-Banff-National-Park-Rocky-Mountains-Nature-Hike-Photo-Spot-Location-Travel-Roadtrip-Forest-1.jpg',
        'https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-35.jpg',
        'https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2017/07/food-photography-tips-photojaanic-35.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/033/931/023/small_2x/a-village-at-sunset-with-houses-and-mountains-in-the-background-ai-generated-photo.jpg',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1',
        'https://img.freepik.com/free-photo/los-angeles-downtown-buildings-night_649448-298.jpg',
        'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/News/RE-4.jpg&c=0&w=700',
        'https://cdn.pixabay.com/photo/2021/01/06/07/33/old-woman-5893415_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/01/06/07/33/old-woman-5893415_960_720.jpg',
        'https://www.shutterstock.com/shutterstock/photos/2287022079/display_1500/stock-photo-boy-looking-at-sculptures-and-listening-to-audio-guide-at-museum-exhibition-2287022079.jpg',
        'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/concert-photography/thumbnail.jpeg',
        'https://novacolorpaint.com/cdn/shop/articles/UNIQUE_ACRYLIC_PAINTING_IDEAS_YOU_HAVE_TO_TRY_1200x1200.jpg?v=1685294336',
        'https://t6c9u7h6.rocketcdn.me/wp-content/uploads/2022/09/fancy-keats.jpg',
        'https://wallpaperaccess.com/full/4930793.jpg',
        'https://www.mydomaine.com/thmb/GQvCChTeRe93o59LQpRJA92Gu40=/5524x3683/filters:no_upscale():max_bytes(150000):strip_icc()/DesignbyEmilyHendersonDesignPhotographerbySaraTramp_181-ba033340b54147399980cfeaed3673ee.jpg',
        'https://th.bing.com/th/id/OIP.vSNVwwVuP7EpS_glZMyE0QHaEE?rs=1&pid=ImgDetMain',
        'https://inspirationfeed.com/wp-content/uploads/2017/06/Art-Quotes-from-Famous-Artists22-min.jpg',
        'https://th.bing.com/th/id/OIP.216g-WQs1oH6fyKe00KdZgHaEK?rs=1&pid=ImgDetMain',
      ]
    };
    console.log('Dispatching item:', itemWithImage);
    dispatch(addToCart(itemWithImage));
  };

  return (
    <button onClick={handleAddToCart}>Add to cart</button>
  );
};

export default AddToCart;