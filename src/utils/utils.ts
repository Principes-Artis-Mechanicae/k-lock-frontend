export const lockerValueChanger: { [key: string]: string } = {
    "3F": "FLOOR_3F",
    L: "FLOOR_L",
    B1: "FLOOR_B1",
    상: "TOP",
    중: "MIDDLE",
    하: "BOTTOM",
};

export const lockerValueChangerReverse: { [key: string]: string } = {
    FLOOR_3F: "3F",
    FLOOR_L: "L",
    FLOOR_B1: "B1",
    TOP: "상",
    MIDDLE: "중",
    BOTTOM: "하",
};

export const dateValueFormatter = (dateString: string): string => {
    const date = new Date(dateString);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${month}/${day} ${hours}:${minutes}`;
};

export const addOneDay = (date: string) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate.setHours(0, 0, 0, 0);
    return String(nextDate);
};
