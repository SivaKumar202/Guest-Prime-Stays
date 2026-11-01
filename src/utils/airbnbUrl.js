export function buildAirbnbUrl(property, searchCriteria) {
  const url = new URL(`https://www.airbnb.com/rooms/${property.airbnbId}`);

  if (searchCriteria?.submitted) {
    url.searchParams.set('adults', String(searchCriteria.guests || 2));

    if (searchCriteria.checkIn && searchCriteria.checkOut) {
      url.searchParams.set('check_in', searchCriteria.checkIn);
      url.searchParams.set('check_out', searchCriteria.checkOut);
    }
  }

  return url.toString();
}
