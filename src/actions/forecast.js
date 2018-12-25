export const FORECAST_REQUEST = 'FORECAST_REQUEST';
export const FORECAST_SUCCEEDED = 'FORECAST_SUCCEEDED';
export const FORECAST_FAILED = 'FORECAST_FAILED';

export function getForecast() {
  return { type: FORECAST_REQUEST };
}
