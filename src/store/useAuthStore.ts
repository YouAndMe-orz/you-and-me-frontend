import { TelecomProvider } from "@/types/userType";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  name: string;
  phone: number;
  telecom: TelecomProvider;
  residentNumber: number;
}

interface AuthAction {
  setName: (name: string) => void;
  setPhone: (phone: number) => void;
  setTelecom: (telecom: TelecomProvider) => void;
  setResidentNumber: (residentNumber: number) => void;
}

export const useAuthStore = create<AuthState & AuthAction>()(
  devtools((set) => ({
    join: null,

    // setActivity: (activity) => set({ activity }),
  }))
);
