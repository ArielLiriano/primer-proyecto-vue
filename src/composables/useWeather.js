import { useWheaterStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const weatherStore = useWheaterStore();
    weatherStore.temperatura = temperatura;
}