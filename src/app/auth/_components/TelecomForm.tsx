import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { telecomOptions } from "@/types/userType";
import { useForm } from "react-hook-form";

export default function TelecomForm() {
  const { watch, setValue } = useForm();
  const telecom = watch("telecom");

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>{telecom || "통신사"}</button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>통신사를 선택해주세요</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col">
            {telecomOptions.map((telecom) => (
              <DrawerClose key={telecom.value}>
                <button onClick={() => setValue("telecom", telecom.value)}>{telecom.label}</button>
              </DrawerClose>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
