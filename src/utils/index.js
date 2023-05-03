export const getWeatherIcon = (iconCode, size = '') => {
    let base = `https://openweathermap.org/img/wn/${iconCode}`;
    if (size === 'lg') {
      base += '@2x';
    }
    base += '.png';
  
    return base;
  };