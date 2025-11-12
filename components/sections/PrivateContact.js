"use client";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import CustomSelect from "@/components/ui/CustomSelect";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

export default function PrivateContact() {
  const salutationData = [
    { label: "Mr.", value: "mr" },
    { label: "Ms.", value: "ms" },
    { label: "Dr.", value: "dr" },
  ];
  const categoryData = [
    { label: "Audi", value: "audi" },
    { label: "BMW", value: "bmw" },
    { label: "Mercedes", value: "mercedes" },
  ];
  const themeData = [
    { label: "Sales", value: "sales" },
    { label: "Support", value: "support" },
    { label: "Complaint", value: "complaint" },
  ];

  return (
    <div className="max-w-[864px] w-full mx-auto p-6 bg-gray-50 rounded-md shadow-box transition-all duration-500">
      <form>
        <div className="flex gap-4 mb-6">
          <div className="flex-1 flex gap-4">
            {/* salutation */}
            <div className="max-w-[145px] w-full flex-shrink-0">
              <Label htmlFor="salutation" name="Salutation" className="mb-1" />
              <CustomSelect data={salutationData} name="salutation" placeholder="Choose salutation" />
            </div>

            {/* first name */}
            <div className="w-full">
              <Label htmlFor="first-name" name="First Name*" className="mb-1" />
              <Input id="first-name" placeholder="first name" />
            </div>
          </div>

          {/* last name */}
          <div className="flex-1">
            <Label htmlFor="last-name" name="Last Name*" className="mb-1" />
            <Input id="last-name" placeholder="last name" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* email */}
          <div>
            <Label htmlFor="email" name="Email*" className="mb-1" />
            <Input id="email" placeholder="email" />
          </div>

          {/* mobile */}
          <div>
            <Label htmlFor="mobile" name="Mobile number*" className="mb-1" />
            <Input id="mobile" placeholder="mobile number" />
          </div>

          {/* category */}
          <div>
            <Label htmlFor="category" name="Category" className="mb-1" />
            <CustomSelect data={categoryData} name="brand" placeholder="Choose brand" />
          </div>

          {/* theme */}
          <div>
            <Label htmlFor="theme" name="Theme" className="mb-1" />
            <CustomSelect data={themeData} name="theme" placeholder="Choose theme" />
          </div>

          {/* message */}
          <div className="col-span-2">
            <Label htmlFor="message" name="Message" className="mb-1" />
            <Textarea id="message" placeholder="Write message" className="h-[200px]" />
          </div>
        </div>

        <Button text="Send message" className="mt-10 max-w-[400px] w-full mx-auto block h-12" />
      </form>
    </div>
  );
}
