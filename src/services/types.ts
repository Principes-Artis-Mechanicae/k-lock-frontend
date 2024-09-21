export type BaseResponse<D = null> = {
    status: number;
    data: D;
};
