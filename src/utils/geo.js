const defaultLocation = { lat: 50.450001, lng: 30.523333 };

export const getBrowserLocation = () => {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        pop => {
          const { latitude: lat, longitude: lng } = pop.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(defaultLocation);
        }
      );
    } else {
      reject(defaultLocation);
    }
  });
};
