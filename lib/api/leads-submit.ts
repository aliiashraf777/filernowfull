// lib/api/leads-submit.ts
import type { BecomeFilerFormValues, ContactFormValues } from "@/lib/validations/leads-schema";

interface ILeadSubmitResponse {
  ticketId: string;
  message: string;
}

interface IFastApiValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

interface ILeadSubmitError {
  message: string | IFastApiValidationError[];
  errors?: Record<string, string[]>;
}

function extractErrorMessage(data: ILeadSubmitError): string {
  if (typeof data.message === "string") return data.message;
  if (Array.isArray(data.message)) {
    // FastAPI's 422 shape: turn "field required" objects into readable text
    // instead of letting Error() silently stringify them into "[object Object]".
    return data.message
      .map((e) => `${e.loc?.[e.loc.length - 1] ?? "field"}: ${e.msg}`)
      .join(", ");
  }
  return "Submission failed";
}

async function postLead<T>(endpoint: string, payload: T): Promise<ILeadSubmitResponse> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as ILeadSubmitResponse | ILeadSubmitError;

  if (!res.ok) {
    throw new Error(extractErrorMessage(data as ILeadSubmitError));
  }

  return data as ILeadSubmitResponse;
}

// Always our own Next.js routes, never the backend's /api/admin/leads path directly.
export const submitContactForm = (payload: ContactFormValues) =>
  postLead<ContactFormValues>("/api/leads/contact", payload);

export const submitBecomeFilerForm = (payload: BecomeFilerFormValues) =>
  postLead<BecomeFilerFormValues>("/api/leads/become-filer", payload);