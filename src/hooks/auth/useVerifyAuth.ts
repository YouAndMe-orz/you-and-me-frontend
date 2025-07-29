import { verifyAuth, VerifyAuthReq } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useVerifyAuth = () => {
  return useMutation({
    mutationFn: ({ code, phoneNum }: VerifyAuthReq) => verifyAuth({ code, phoneNum }),
    mutationKey: ["verify-auth"],
  });
};

export default useVerifyAuth;
