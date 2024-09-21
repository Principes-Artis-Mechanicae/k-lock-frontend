import { BaseResponse } from "../types";

export interface ApplyForm {
    applyFormId: number;
    year: number;
    semester: number;
    firstApplyStartDate: string;
    firstApplyEndDate: string;
    semesterEndDate: string;
    status: string;
}

export type PeriodResponse = BaseResponse<{
    status: number;
    response: ApplyForm;
}>;
