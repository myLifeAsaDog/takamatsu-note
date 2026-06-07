// 気象庁 天気予報 API の型定義
// エンドポイント：https://www.jma.go.jp/bosai/forecast/data/forecast/{地域コード}.json

export interface WeatherForecast {
  publishingOffice: string;
  reportDatetime: string;
  timeSeries: TimeSeries;
}

type TimeSeries = [WeatherTimeSeries, PopsTimeSeries, TempsTimeSeries];

interface WeatherTimeSeries {
  timeDefines: string[];
  areas: WeatherArea[];
}

interface PopsTimeSeries {
  timeDefines: string[];
  areas: PopsArea[];
}

interface TempsTimeSeries {
  timeDefines: string[];
  areas: TempsArea[];
}

interface WeatherArea {
  area: Area;
  weatherCodes: number[];
  weathers: string[];
  winds: string[];
  waves: string[];
}

interface PopsArea {
  area: Area;
  pops: string[];
}

interface TempsArea {
  area: Area;
  temps: string[];
}

interface Area {
  name: string;
  code: string;
}
