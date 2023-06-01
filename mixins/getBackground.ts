import Iwether from "../types/Iwether";

export default (Wether:Iwether):number => {
    if((4 <= Wether.time && Wether.time < 17) && (Wether.deg < 200) && (Wether.temp >= 0)) return 1;
    else if((17 <= Wether.time && Wether.time < 21) && (Wether.deg < 200) && (Wether.temp >= 0)) return 2;
    else if((Wether.deg >= 200) && (Wether.temp >= 0)) return 3;
    else if(Wether.temp < 0) return 4;
    else return 5;
}        