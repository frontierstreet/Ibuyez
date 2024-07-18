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

  async scheduleForm(value: {
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    consideredSellingDuration: string;
    reasonsToSell: string[];
    sellingTimeframe: string;
    askingPrice: string;
  }) {
    const response = await baseAxios.post("/schedule-form", value);
    await this.sendEmailNotification(value); // Send email notification
    return response;
  }

  async sendEmailNotification(formData: {
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    consideredSellingDuration: string;
    reasonsToSell: string[];
    sellingTimeframe: string;
    askingPrice: string;
  }) {
    const emailContent = this.generateHtmlFromFormData(formData);

    const emailData = {
      to: ["jack.crenshaw@frontierstreet.us"],
      cc: ["Modernreig@gmail.com",],
      subject: "New Schedule Form Submitted",
      text: "A schedule form has been submitted successfully.",
      html: `<p>A schedule form has been submitted successfully.</p>${emailContent}`,
    };

    try {
      const response = await baseAxios.post("/send-email", emailData);
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  generateHtmlFromFormData(formData: {
    name: string;
    phoneNumber: string;
    address: string;
    email: string;
    consideredSellingDuration: string;
    reasonsToSell: string[];
    sellingTimeframe: string;
    askingPrice: string;
  }) {
    const entries = Object.entries(formData);
    const excludeFields = ["_id", "user", "createdAt", "updatedAt"];

    return `
      <ul>
        ${entries
          .filter(([key]) => !excludeFields.some((field) => key.includes(field)))
          .map(([key, value]) => `<li style="margin-bottom:12px"><strong>${key}:</strong> ${value}</li>`)
          .join('')}
      </ul>
    `;
  }
}

const scheduleService = new ScheduleService();

export default scheduleService;
