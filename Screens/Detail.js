import React from 'react';
import ListingDetail from '../Components/Listing/ListingDetail';

// Detail route component
const Detail = ({ navigation }) => {
  // Specify the name of the parameter and fallback value for this parameter
  const item = navigation.getParam('item', {})

  return <ListingDetail item={item} />
};

export default Detail;
