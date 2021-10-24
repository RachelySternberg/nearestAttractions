export default function calculateDistance  (lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = degtoRad(lat2 - lat1);
  var dLon = degtoRad(lon2 - lon1);
  var latitude1 = degtoRad(lat1);
  var latitude2 = degtoRad(lat2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(latitude1) * Math.cos(latitude2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};

function degtoRad(value) {
  return (value * Math.PI) / 180;
}
