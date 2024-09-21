import { BaseResponse } from "@/services/types";

export interface Apply {
    applyId: number;
    studentName: string;
    studentNumber: string;
    firstFloor: string;
    firstHeight: string;
    secondFloor: string;
    secondHeight: string;
    period: string;
    status: string;
}

export interface ApplyForm {
    applyFormId: number;
    year: number;
    semester: number;
    firstApplyStartDate: string;
    firstApplyEndDate: string;
    semesterEndDate: string;
    status: string;
}

export type AuthResponse = BaseResponse<{
    status: number;
    response: {
        studentName: string;
        studentNumber: string;
        lockerName: string;
        floor: string;
        height: number;
        pw: string;
        broken: boolean;
        apply: Apply;
        applyForm: ApplyForm;
    };
}>;
