// import  { Component } from "react";
// import { connect } from "react-redux";

// /*const mapStateToProps = (state) => {
//     return {
//         attractions: state.attractions
//     };
//   }
  
//   export default connect(mapStateToProps, {
//     retrieveAttractions,
//   })(AttractionsList);*/

// class AttractionsList extends Component {
//     constructor(props) {
//         super(props);
//         this.refreshData = this.refreshData.bind(this);
//         this.setActiveAttraction = this.setActiveAttraction.bind(this);
//         this.state = {
//           currentAttraction: null,
//           currentIndex: -1,
//         };
//       }
//       componentDidMount() {
//         this.props.retrieveAttractions();
//       }
//       refreshData() {
//         this.setState({
//           currentAttraction: null,
//           currentIndex: -1,
//         });
//       }
//       setActiveAttraction(attraction, index) {
//         this.setState({
//           currentAttraction: attraction,
//           currentIndex: index,
//         });
//       }
//     render() {
//         /*const { currentAttraction, currentIndex } = this.state;*/
//         const { attractions } = this.props;
//         return(
//             <div>
//             {attractions.attractionsList.map(card => <div>{card.name}</div>)}
//             </div>
//         );
//       }
// }
// const mapStateToProps = (state) => {
//     return {
//       attractions: state.attractions,
//     };
//   };

// export default connect(mapStateToProps, { retrieveAttractions })(AttractionsList);



// // import React, { useState, useEffect, useMemo } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import Attraction from '../../components/attraction/attraction'
// // import { calculateDistance } from '../../utils/calculateDistance'
// // import './nearestAttractions.css';

// // const NearestAttractions = (props) => {
// //    const dispatch = useDispatch();

// //    const [nearestAttractions, setNearestAttractions] = useState(null);

// //    const userLocation = useMemo(() => {
// //       return { lat: props.location.state?.lat, lng: props.location.state?.lng };
// //    }, [props.location.state]);

// //    const {
// //       attractions,
// //       attractionsTypes,
// //       error,
// //       error_message,
// //    } = useSelector((state) => state.attractionsSlice);

// //    useEffect(() => {
// //       dispatch(fetchAttractions());
// //    }, [dispatch]);

// //    useEffect(() => {
// //          const mapAttractions = attractions.map((attractions) => {
// //             return {
// //                ...attractions,
// //                Distance: calculateDistance(
// //                   userLocation.lat,
// //                   userLocation.lng,
// //                   attractions.Y,
// //                   attractions.X
// //                ).toFixed(0),
// //             };
// //          });

// //          setNearestAttractions(mapAttractions);

// //    }, [attractions, userLocation.lat, userLocation.lng]);

// //    return (
// //       <>
// //          {error ? (
// //             <h1>{error_message}</h1>
// //          )  : (
// //             <div>
// //                <div className='box'>
// //                   <Attraction
// //                      data={nearestAttractions || []}
// //                      attractionsTypes={attractionsTypes}
// //                   />
// //                   {/* <GoogleMaps data={attractions} /> */}
// //                </div>
// //             </div>
// //          )}
// //       </>
// //    );
// // };

// // export default NearestAttractions;
