import { verifyPhone } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useVerifyPhone = () => {
  return useMutation({
    mutationFn: (receiver: string) => verifyPhone(receiver),
    mutationKey: ["verify-phone"],
  });
};

export default useVerifyPhone;
