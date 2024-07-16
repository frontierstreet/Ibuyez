import baseAxios from "./base";
import { ScheduleSteps, FlattenedScheduleFormSubmission } from "types/form";

class ScheduleService {
  createFormEntry(address: string): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
    return baseAxios.post(`/submissions/create`, { address });
  }

  getFormEntry(submissionId: string): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
    return baseAxios.get(`/submissions/${submissionId}`);
  }

  editForm(
    submissionId: string,
    payload: Partial<Record<keyof FlattenedScheduleFormSubmission, any>>,
    step: ScheduleSteps
  ): Promise<{ data: FlattenedScheduleFormSubmission; steps: ScheduleSteps[] }> {
    return baseAxios.patch(`/submissions/${submissionId}/${step}`, payload);
  }

  saveForm(submissionId: string, email: string) {
    return baseAxios.post(`/submissions/${submissionId}/save`, { email });
  }

  contactForm(value: {
    email: string;
    firstName: string;
    lastName: string;
    supportRequest: string;
    message: string;
  }) {
    return baseAxios.post("/contact", value);
  }

  scheduleForm(value: {
    name:string;
    phoneNumber: string;
    address: string;
    email: string;
    consideredSellingDuration: string;
    reasonsToSell: string[];
    sellingTimeframe: string;
    askingPrice: string;
  }) {
    return baseAxios.post("/schedule-form", value);
  }
}

const scheduleService = new ScheduleService();

export default scheduleService;
