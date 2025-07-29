import { ApiResponse, http } from "@/lib/http";

interface VerifyPhoneRes {
  success: boolean;
}

export const verifyPhone = async (receiver: string): Promise<ApiResponse<VerifyPhoneRes>> => {
  const response = await http.post(`/sms/verify`, { receiver });
  return response.data;
};

export interface VerifyAuthReq {
  code: string;
  phoneNum: string;
}

export interface VerifyAuthRes {
  success: boolean;
  verified: boolean;
}

export const verifyAuth = async ({ code, phoneNum }: VerifyAuthReq): Promise<ApiResponse<VerifyAuthRes>> => {
  const response = await http.post(`/auth/verify`, { code, phoneNum });
  return response.data;
};
